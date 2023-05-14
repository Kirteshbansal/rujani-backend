require("dotenv").config();

// config
exports.config = {
	app: {
		port: process.env.PORT,
		env: process.env.NODE_ENV,
		origin: process.env.NODE_ENV === "development" ? process.env.DEV_ORIGIN : process.env.PROD_ORIGIN,
		appProdFEUrl: process.env.PROD_APP_URL,
		appDevFEUrl: process.env.DEV_APP_URL,
		appFEUrl: process.env.NODE_ENV === "development" ? process.env.DEV_APP_URL : process.env.PROD_APP_URL,
	},
	db: {
		databaseURL: process.env.MONGODB_URL,
		password: process.env.MONGODB_USER_PASSWORD,
		username: process.env.MONGODB_USER_NAME,
	},
	auth: {
		accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
		accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
		saltRounds: +process.env.SALT_ROUND,
		refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
		refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
	},
	email: {
		appEmail: process.env.EMAIL,
		emailPassword: process.env.EMAIL_PASSWORD,
		emailAppPassword: process.env.EMAIL_APP_PASSWORD,
		emailPort: process.env.EMAIL_PORT,
		emailHost: process.env.EMAIL_HOST,
		emailService: process.env.EMAIL_SERVICE,
	},
};
