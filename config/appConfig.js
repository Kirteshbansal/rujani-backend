require("dotenv").config();

// config.js
exports.config = {
	app: {
		port: process.env.PORT,
		env: process.env.NODE_ENV,
		origin: process.env.DEV_ORIGIN,
	},
	db: {
		databaseURL: process.env.MONGODB_URL,
		password: process.env.MONGODB_USER_PASSWORD,
		username: process.env.MONGODB_USER_NAME,
	},
	auth: {
		accessTokenSecret: process.env.jwtSecret_KEY,
		accessTokenExpiresIn: process.env.jwtExpiresIn,
		saltRounds: process.env.SALT_ROUND,
		refreshTokenSecret: process.env.refreshTokenSecret,
		refreshTokenExpiresIn: process.env.refreshTokenExpiresIn,
	},
};
