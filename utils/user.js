const defaultUserAddress = {
	addr1: "",
	addr2: "",
	zip_code: null,
	city: "",
	country: "",
	state: "",
	first_name: "",
	last_name: "",
};

const getUserAddress = (address) => {
	const {
		_id: id,
		addr1 = "",
		addr2 = "",
		zip_code = null,
		city = "",
		country = "",
		state = "",
		first_name = "",
		last_name = "",
	} = address;
	return { id, addr1, addr2, state, city, country, zip_code, first_name, last_name };
};

const getUserDetails = async (user) => {
	let address = defaultUserAddress;
	if (user.address) {
		// eslint-disable-next-line prefer-const
		let addressData = await user.populate("address");
		address = getUserAddress(addressData.toObject()?.address);
	}
	return {
		// eslint-disable-next-line no-underscore-dangle
		id: user?._id,
		firstName: user.first_name,
		lastName: user.last_name,
		email: user.email,
		phone: user.phone || null,
		address,
	};
};

module.exports = { getUserAddress, getUserDetails };
