const bcrypt = require("bcrypt");

const {
	config: {
		auth: { saltRounds },
	},
} = require("../config/appConfig");

exports.encryptData = (data) => bcrypt.hashSync(data?.toString(), saltRounds);
exports.compareEncryptedData = (data, dataHash) => bcrypt.compareSync(data?.toString(), dataHash);
