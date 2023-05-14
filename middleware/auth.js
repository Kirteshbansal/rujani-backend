/* eslint-disable no-unused-vars */
const { verifyAccessToken, verifyRefreshToken } = require("../utils/token");
const UserModel = require("../models/user");

module.exports = async (req, res, next) => {
	try {
		const { accessToken, refreshToken } = req.cookies;
		const decodedToken = verifyAccessToken(accessToken);

		if (decodedToken?.isValid) {
			const user = await UserModel.findById(decodedToken?.details?.id);
			if (!user) {
				throw new Error("User is not authorized");
			}
			next();
		} else {
			throw new Error("User is not authorized");
		}
	} catch (err) {
		res.status(403).json({
			message: err?.message || err.toString(),
			status: false,
		});
	}
};
