const categoryModel = require("../models/category");
const productModel = require("../models/product");

// Get all categories
exports.getCategories = async (req, res) => {
	try {
		const allCategories = await categoryModel.find().sort({ id: 1 });

		if (!allCategories.length) {
			res.status(404).send("Categories not found");
		}

		res.json({ data: allCategories, status: true, message: "Successfully  fetched all categories" });
	} catch (err) {
		res.status(400).json({ status: false, message: "Failed to fetch categories" });
	}
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
	try {
		let productsList = [];
		const category = await categoryModel.findOne({ id: +req.params.id });
		const { id: categoryId, name: categoryName, products } = category.toObject();
		try {
			const categoryProductsData = await productModel.find({
				productId: { $in: [...products] },
			});
			productsList = categoryProductsData.map((product) => {
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
		} catch (error) {
			throw new Error(error);
		}
		const categoryData = {
			categoryName,
			categoryId,
			products: productsList,
		};

		res.json({ data: categoryData, status: true });
	} catch (err) {
		res.status(400).json({
			status: false,
			message: "Successfully fetched all products by category",
		});
	}
};
