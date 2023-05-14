/* eslint-disable no-sparse-arrays */
const { validationResult, cookie, body, param, checkExact } = require("express-validator");

const { validationsMessages } = require("../utils/text");

// eslint-disable-next-line consistent-return
exports.validateRequest = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ status: false, message: "invalid request", errors: errors.mapped() });
	}
	next();
};

exports.registerUserValidation = checkExact(
	[
		body("firstName", validationsMessages.incorrectFirstName).notEmpty().escape().trim().isAlpha(),
		body("lastName", validationsMessages.incorrectLastName).notEmpty().escape().trim().isAlpha(),
		body("email", validationsMessages.incorrectEmail).notEmpty().normalizeEmail().escape().trim().isEmail(),
		body("password", validationsMessages.incorrectPassword).notEmpty().escape().trim().isStrongPassword({
			minLength: 8,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		}),
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.loginValidation = checkExact(
	[
		body("email", validationsMessages.incorrectEmail).notEmpty().normalizeEmail().escape().trim().isEmail(),
		body("password", validationsMessages.incorrectPassword).notEmpty().escape().trim().isLength({ min: 8 }),
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.updateUserInfoValidation = checkExact(
	[
		cookie("accessToken", validationsMessages.noAccessToken).notEmpty().escape().trim().isString(),
		cookie("refreshToken", validationsMessages.noRefreshToken).notEmpty().escape().trim().isString(),
		body("first_name", validationsMessages.incorrectFirstName).optional().notEmpty().escape().trim().isAlpha(),
		body("last_name", validationsMessages.incorrectLastName).optional().notEmpty().escape().trim().isAlpha(),
		body("phone", validationsMessages.incorrectPhone).optional().notEmpty().escape().trim().isMobilePhone(),
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.addUserAddressValidation = checkExact(
	[
		cookie("accessToken", validationsMessages.noAccessToken).notEmpty().escape().trim().isString(),
		cookie("refreshToken", validationsMessages.noRefreshToken).notEmpty().escape().trim().isString(),
		body("first_name", validationsMessages.incorrectFirstName).optional().notEmpty().escape().trim().isAlpha(),
		body("last_name", validationsMessages.incorrectLastName).optional().notEmpty().escape().trim().isAlpha(),
		body("addr1", validationsMessages.incorrectAddr1).notEmpty().escape().trim().isAlpha(),
		body("addr2", validationsMessages.incorrectAddr2).optional().notEmpty().escape().trim().isAlpha(),
		body("state", validationsMessages.incorrectStateName).notEmpty().escape().trim().isAlpha(),
		body("city", validationsMessages.incorrectCityName).notEmpty().escape().trim().isAlpha(),
		body("country", validationsMessages.incorrectCountryName).notEmpty().escape().trim().isAlpha(),
		body("zip_code", validationsMessages.incorrectZipCodeName).notEmpty().escape().trim().isNumeric(),
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.updateUserAddressValidation = checkExact(
	[
		cookie("accessToken", validationsMessages.noAccessToken).notEmpty().escape().trim().isString(),
		cookie("refreshToken", validationsMessages.noRefreshToken).notEmpty().escape().trim().isString(),
		body("id", validationsMessages.incorrectResourceId).notEmpty().escape().trim().isAlphanumeric(),
		body("first_name", validationsMessages.incorrectFirstName).optional().notEmpty().escape().trim().isAlpha(),
		body("last_name", validationsMessages.incorrectLastName).optional().notEmpty().escape().trim().isAlpha(),
		body("addr1", validationsMessages.incorrectAddr1).notEmpty().escape().trim().isAlpha(),
		body("addr2", validationsMessages.incorrectAddr2).optional().notEmpty().escape().trim().isAlpha(),
		body("state", validationsMessages.incorrectStateName).notEmpty().escape().trim().isAlpha(),
		body("city", validationsMessages.incorrectCityName).notEmpty().escape().trim().isAlpha(),
		body("country", validationsMessages.incorrectCountryName).notEmpty().escape().trim().isAlpha(),
		body("zip_code", validationsMessages.incorrectZipCodeName).notEmpty().escape().trim().isNumeric(),
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.recoverPasswordValidation = checkExact(
	body("email", validationsMessages.incorrectEmail).notEmpty().normalizeEmail().escape().trim().isEmail(),
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);

exports.changePasswordValidation = checkExact(
	[
		body("password", validationsMessages.incorrectPassword).notEmpty().escape().trim().isStrongPassword({
			minLength: 8,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		}),
		param("userId", validationsMessages.incorrectUserId).notEmpty().escape().trim().isAlphanumeric(),
		param("secret", validationsMessages.incorrectSecret).notEmpty().escape().trim().isString(),
		,
	],
	{
		message: validationsMessages.unknownFieldsSpecified,
	}
);
