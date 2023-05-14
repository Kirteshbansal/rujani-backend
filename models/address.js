const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const addressSchema = new Schema(
	{
		first_name: {
			required: [true, "Please enter firstName"],
			type: String,
		},
		last_name: {
			required: [true, "Please enter lastName"],
			type: String,
		},
		addr1: {
			type: String,
			required: true,
		},
		addr2: {
			type: String,
			required: false,
		},
		state: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		zip_code: {
			type: Number,
			required: true,
		},
		country: {
			type: String,
			required: true,
			default: "India",
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: false,
			unique: true,
		},
	},
	{ timestamps: true }
);

module.exports = model("address", addressSchema);
