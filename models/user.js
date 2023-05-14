const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userDataSchema = new Schema(
	{
		first_name: {
			required: true,
			type: String,
		},
		last_name: {
			required: true,
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		phone: {
			type: Number,
			required: false,
		},
		refreshToken: {
			type: String,
			required: false,
		},
		cartItems: [
			{
				type: Number,
				required: false,
			},
		],
		address: {
			type: Schema.Types.ObjectId,
			ref: "address",
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = model("user", userDataSchema);
