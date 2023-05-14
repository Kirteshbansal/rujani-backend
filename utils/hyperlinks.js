const {
	config: {
		app: { appFEUrl },
	},
} = require("../config/appConfig");

exports.rujaniTeaURL = appFEUrl;
exports.getRecoverPasswordURL = (userId, secret) => `${appFEUrl}account/reset/${userId}?t=${secret}`;
