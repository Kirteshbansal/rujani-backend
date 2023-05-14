const jwt = require("jsonwebtoken");
const { config } = require("../config/appConfig");

const {
	auth: { accessTokenSecret, accessTokenExpiresIn, refreshTokenExpiresIn, refreshTokenSecret },
} = config;
/*
 * payload = {id, email, name}
 */
const generateTokens = async (payload) => {
	try {
		const accessToken = jwt.sign(payload, accessTokenSecret, { expiresIn: accessTokenExpiresIn });
		const refreshToken = jwt.sign(payload, refreshTokenSecret, { expiresIn: refreshTokenExpiresIn });
		return Promise.resolve({ accessToken, refreshToken });
	} catch (err) {
		return Promise.reject(err);
	}
};

const verifyAccessToken = (token) => {
	try {
		const decodedToken = jwt.verify(`${token}`, accessTokenSecret, (err, decoded) => {
			if (err) {
				return { details: {}, isValid: false };
			}
			return { details: decoded, isValid: true };
		});
		return decodedToken;
	} catch (err) {
		throw new Error(err);
	}
};

const verifyRefreshToken = (token) => {
	try {
		const decodedToken = jwt.verify(token, accessTokenSecret, (err, decoded) => {
			if (err) {
				return { details: {}, isValid: false };
			}
			return { details: decoded, isValid: true };
		});
		return decodedToken;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	generateTokens,
	verifyAccessToken,
	verifyRefreshToken,
};
