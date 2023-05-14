const productModel = require("../models/product");
const { isEmpty } = require("../utils/common");

// Get all products
exports.getProducts = async (req, res) => {
	try {
		const productsData = await productModel.find().sort({ productId: 1 });

		if (!productsData.length) {
			res.status(404).send("Products not found");
		}

		const products = productsData.map((product) => {
			const {
				productId: product_id,
				mediaUrl_1,
				mediaUrl_2,
				recommended_time: recommendedTime,
				...rest
			} = product.toObject();
			return {
				product_id,
				recommendedTime,
				media: [
					{
						url: mediaUrl_1,
						resource_id: product_id,
					},
					{
						url: mediaUrl_2,
						resource_id: product_id,
					},
				],
				...rest,
			};
		});
		res.json({ data: products, status: true, message: "Successfully fetched all products" });
	} catch (err) {
		res.status(400).json({ status: false, message: "Failed to fetch products" });
	}
};

// Get product by id
exports.getProductById = async (req, res) => {
	try {
		const product = await productModel.findOne({
			productId: +req.params.id,
		});

		if (isEmpty(product)) {
			res.status(404).send("Product not found");
		}

		const {
			productId: id,
			mediaUrl_1: url1,
			mediaUrl_2: url2,
			recommended_time: recommendedTime,
			...rest
		} = product.toObject();

		res.json({
			data: { id, url1, url2, recommendedTime, ...rest },
			status: true,
			message: "Successfully fetched product",
		});
	} catch (err) {
		res.status(400).json({ status: false, message: "Failed to fetch product by Id" });
	}
};
