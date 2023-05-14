const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	productId: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	desc: {
		type: String,
	},
	manufactured_date: {
		type: Date,
	},
	stock: {
		type: Number,
	},
	categoryIdS: {
		type: Array,
		required: true,
	},
	mediaUrl_1: {
		type: String,
		required: true,
	},
	mediaUrl_2: {
		type: String,
		required: true,
	},
	taste: {
		type: String,
		required: false,
	},
	recommended_time: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("product", productSchema);
