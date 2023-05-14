const UserModel = require("../models/user");
const AddressModel = require("../models/address");

const { generateTokens } = require("../utils/token");
const { getUserDetails, getUserAddress } = require("../utils/user");
const { encryptData, compareEncryptedData } = require("../utils/bcrypt");
const sendEmail = require("../services/nodemailer");
const { generateUUID } = require("../utils/common");
const { resetPasswordLinkTemplate } = require("../utils/htmlTemplates");
const { mailSubjects } = require("../utils/text");
const userSecretCache = require("../services/userSecretCache");

const { mongoErrorCodes } = require("../utils/mongo_err_codes");
const { isEmpty } = require("../utils/common");

/* eslint-disable consistent-return */
exports.registerUser = async (req, res) => {
	try {
		const encryptedPwd = encryptData(req.body.password);
		const user = new UserModel({
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			email: req.body.email,
			password: encryptedPwd,
		});
		await user.save();
		res.status(200).json({
			status: true,
			message: "User registered successfully!",
		});
	} catch (err) {
		if (err.name === "MongoServerError" && mongoErrorCodes[err.code]) {
			return res.status(422).json({
				message: "user already exist.",
				status: false,
				data: err,
			});
		}
		return res.status(400).json({
			message: "Failed to register user!",
			status: false,
			data: err,
		});
	}
};

exports.loginUser = async (req, res) => {
	try {
		const user = await UserModel.findOne({ email: req.body.email });
		if (!user) {
			return res.status(404).json({
				message: "User Not found!",
				status: false,
			});
		}
		const passwordIsValid = compareEncryptedData(req.body.password, user.password);

		if (!passwordIsValid) {
			return res.status(401).send({
				message: "Invalid password!",
				status: false,
			});
		}

		const userData = await getUserDetails(user);

		const { accessToken, refreshToken } = await generateTokens({
			id: userData.id,
			email: userData.email,
			name: `${userData.firstName} ${userData.lastName}`,
		});

		if (!accessToken || !refreshToken) {
			res.status(400).json({ message: "Failed to authenticate user. Please try again.", status: false });
		}

		user.refreshToken = refreshToken;
		await user.save();

		const cookieParams = {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			"Max-Age": 1000 * 60 * 60 * 24,
		};
		res.status(200)
			.cookie("accessToken", accessToken, cookieParams)
			.cookie("refreshToken", refreshToken, cookieParams)
			.cookie("cartItems", JSON.stringify(user.cartData))
			.json({
				user: userData,
				status: true,
			});
	} catch (err) {
		console.trace(err);
		res.status(400).json({ status: false, message: err.message });
	}
};

exports.updateUserInfo = async (req, res) => {
	try {
		if (!req.params?.userId) {
			throw new Error(`No userId passed, Current value ${req.params?.userId}`);
		}

		if (isEmpty(req.body)) {
			throw new Error(`Request body is empty, Current value ${JSON.stringify(req.body)}`);
		}
		let user = await UserModel.findByIdAndUpdate(req.params.userId, { ...req.body });
		if (!user) {
			return res.status(404).json({
				message: "Can't add a new address because User Not found!",
				status: false,
			});
		}

		const address = await AddressModel.findById(user?.address);

		if (user?.first_name === address?.first_name && user?.last_name === address?.last_name) {
			await AddressModel.findByIdAndUpdate(user?.address, {
				first_name: req.body?.first_name,
				last_name: req.body?.last_name,
			});
		}
		// Re-retching info from DB to get the latest updated details
		user = await UserModel.findById(req.params.userId);
		const userData = await getUserDetails(user);
		res.json({ status: true, message: "Successfully updated user info", data: userData });
	} catch (err) {
		res.status(400).json({ status: true, message: `Failed to update user info, ${err.toString()}` });
	}
};

exports.addUserAddress = async (req, res) => {
	try {
		if (!req.params?.userId) {
			throw new Error(`No userId passed, Current value ${req.params?.userId}`);
		}

		const user = await UserModel.findById(req.params.userId);

		if (!user) {
			return res.status(404).json({
				message: "Can't add a new address because User Not found!",
				status: false,
			});
		}

		if (user?.address) {
			throw new Error("Can't add a new address because an address already exist");
		}

		const address = new AddressModel({
			first_name: req.body?.first_name || user?.first_name,
			last_name: req.body?.last_name || user?.last_name,
			addr1: req.body?.addr1,
			addr2: req.body?.addr2 || "",
			city: req.body?.city,
			zip_code: req.body?.zip_code,
			state: req.body?.state,
			country: req.body?.country,
			user,
		});

		await address.save();
		// Saving address ref to user doc
		user.address = address;
		await user.save();
		const addressData = getUserAddress(address);
		res.json({ status: true, message: "Successfully added address", data: addressData });
	} catch (err) {
		res.status(400).json({ status: false, message: `Failed to add address, ${err.toString()}` });
	}
};

exports.updateUserAddress = async (req, res) => {
	try {
		const { id: addressId = null, ...rest } = req.body;
		if (!req.params?.userId) {
			throw new Error(`No userId passed, Current value ${req.params?.userId}`);
		}

		if (!addressId) {
			throw new Error("Can't update the address because no addressId passed in request");
		}

		const user = await UserModel.findById(req.params.userId);

		if (!user?.address) {
			throw new Error("Can't update the address because user don't have an address, Please add an address first");
		}

		if (!user?.address.equals(addressId)) {
			throw new Error("incorrect details received.");
		}

		let address = await AddressModel.findByIdAndUpdate(addressId, { ...rest });
		address = await AddressModel.findById(addressId);
		const addressData = getUserAddress(address);
		res.json({ status: true, message: "Successfully updated the user address", data: addressData });
	} catch (err) {
		res.status(400).json({ status: false, message: `Failed to update user address, ${err.toString()}` });
	}
};

exports.changeUserPassword = async (req, res) => {
	try {
		if (isEmpty(req.body)) {
			throw new Error(`Request body is empty, Current value ${JSON.stringify(req.body)}`);
		}

		const { userId, secret } = req.params;
		const { password } = req.body;
		const user = await UserModel.findById(userId);

		if (!user) {
			return res.status(404).json({
				message: "Failed to change user password because user not found!",
			});
		}

		const storedSecret = userSecretCache.getSecret(userId);
		console.log("{storedSecret, secret} :>> ", { storedSecret, secret });
		if (!storedSecret) {
			throw new Error("Invalid password change request, please try again.");
		}
		const isSecretValid = storedSecret === secret;
		if (!isSecretValid) {
			return res.status(403).json({
				message: "Can't change because due to invalid request",
			});
		}

		const passwordIsSame = compareEncryptedData(password, user.password);

		if (passwordIsSame) {
			throw new Error(`Can't change because new password is same as old password`);
		}

		user.password = encryptData(password);
		await user.save();
		userSecretCache.deleteSecret(userId);
		res.json({ msg: "Successfully changed the password", status: true });
	} catch (err) {
		res.status(400).json({ msg: `${err.message.toString()}`, status: false });
	}
};

exports.recoverUserPassword = async (req, res) => {
	try {
		if (isEmpty(req.body)) {
			throw new Error(`Request body is empty, Current value ${JSON.stringify(req.body)}`);
		}

		const { email } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) {
			return res.status(404).json({
				message: `No user found having email ${email}`,
				status: false,
			});
		}

		const { _id: userId } = user;

		const uuid = generateUUID();
		const html = resetPasswordLinkTemplate({ userId, secret: uuid });
		sendEmail({ userEmail: email, subject: mailSubjects.accountPwdReset, html });
		userSecretCache.setSecret(userId, uuid);
		res.status(200).json({
			status: true,
			message: `Successfully send password reset email on ${email}`,
		});
	} catch (err) {
		return res.status(400).json({
			message: `Failed to recover user password ${err.toString()}`,
			status: false,
		});
	}
};

exports.updateCartItems = async (req, res) => {
	const { accessToken, refreshToken, cartItems = [] } = req.cookies;
	res.json({ accessToken, refreshToken, cartItems });
};
