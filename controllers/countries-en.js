const data = require("../data/countries-en.json");
const { containsSubstring } = require("../utils/regex");

exports.searchENCountries = async (req, res) => {
	try {
		const { query = "", page = 1, limit = 10 } = req.query;
		if (!query.length) res.status(400).json({ status: false, message: "Incorrect query input" });
		const startIndex = page * limit - limit;
		const endIndex = startIndex + limit;
		let filteredCountries = data.filter((c) => containsSubstring(query, c?.name) && c);
		const totalPages = Math.ceil(filteredCountries.length / limit);
		const totalItems = filteredCountries.length;
		filteredCountries = filteredCountries.slice(startIndex, endIndex);
		const response = { data: filteredCountries || [], page, limit, totalPages, query, totalItems };

		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		res.status(400).json({ status: false, message: "Failed to fetch categories" });
	}
};
