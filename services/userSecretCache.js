const NodeCache = require("node-cache");
const { convertNumToStr } = require("../utils/common");

const nodeCacheConfig = { stdTTL: 360, checkperiod: 60 };

class CacheUserSecret {
	constructor() {
		this.cache = new NodeCache(nodeCacheConfig);
	}

	setSecret(userId, Secret) {
		this.cache.set(convertNumToStr(userId), Secret, 360);
	}

	getSecret(userId) {
		const val = this.cache.get(convertNumToStr(userId));
		if (val === undefined) {
			return null;
		}
		return val;
	}

	checkUserExist(userId) {
		return this.cache.has(convertNumToStr(userId));
	}

	// return the value as well as deletes the key
	takeOutSecret(userId) {
		return this.cache.take(convertNumToStr(userId));
	}

	deleteSecret(userId) {
		return this.cache.del(convertNumToStr(userId));
	}

	getAllKeys(userId) {
		return this.cache.keys(convertNumToStr(userId));
	}

	clearCache() {
		this.cache.flushAll();
	}
}

const UserSecretCache = new CacheUserSecret();

module.exports = UserSecretCache;
