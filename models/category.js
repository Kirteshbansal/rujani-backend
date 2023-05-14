const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const categorySchema = new Schema({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = model("category", categorySchema);
