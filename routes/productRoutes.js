const express = require("express");
const { getProducts, getProductById } = require("../controllers/product");

const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

module.exports = router;
