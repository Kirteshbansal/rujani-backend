const express = require("express");
const { getCategories, getProductsByCategory } = require("../controllers/category");

const router = express.Router();

router.get("/categories", getCategories);
router.get("/category/:id", getProductsByCategory);

module.exports = router;
