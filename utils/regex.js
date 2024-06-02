function containsSubstring(query, searchString) {
	return new RegExp(query, "i").test(searchString);
}

module.exports = {
	containsSubstring,
};
