const { randomUUID } = require("crypto");

const generateUUID = () => randomUUID();

const isEmpty = (data) => {
	if (data === null) return true;
	if ((Array.isArray(data) || typeof data === "string") && !data.length) return true;
	// eslint-disable-next-line valid-typeof
	if (typeof data === "Object" && !Object.keys(data).length) return true;
	return false;
};

const convertNumToStr = (val) => (val ? val.toString() : "");

const generateSixDigitCode = () => Math.floor(100000 + Math.random() * 900000);

module.exports = {
	generateUUID,
	generateSixDigitCode,
	isEmpty,
	convertNumToStr,
};
