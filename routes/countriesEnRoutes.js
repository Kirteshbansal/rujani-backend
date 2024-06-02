const express = require("express");
const { searchENCountries } = require("../controllers/countries-en");

const router = express.Router();

router.get("/countries/search", searchENCountries);

module.exports = router;
