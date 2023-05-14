const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth");
const {
	registerUserValidation,
	addUserAddressValidation,
	updateUserAddressValidation,
	validateRequest,
	loginValidation,
	updateUserInfoValidation,
	recoverPasswordValidation,
	changePasswordValidation,
} = require("../middleware/validations");

const {
	updateCartItems,
	registerUser,
	updateUserInfo,
	loginUser,
	addUserAddress,
	updateUserAddress,
	changeUserPassword,
	// logoutUser,
	recoverUserPassword,
} = require("../controllers/user");

router.post("/user/register", registerUserValidation, validateRequest, registerUser);
router.post("/user/login", loginValidation, validateRequest, loginUser);
// router.get("/user/logout", logoutUser);

router.put("/user/updateUserInfo/:userId", updateUserInfoValidation, validateRequest, authMiddleware, updateUserInfo);
router.post("/user/addUserAddress/:userId", addUserAddressValidation, validateRequest, authMiddleware, addUserAddress);
router.put(
	"/user/updateUserAddress/:userId",
	updateUserAddressValidation,
	validateRequest,
	authMiddleware,
	updateUserAddress
);

router.put("/user/changePassword/:userId/:secret", changePasswordValidation, validateRequest, changeUserPassword);
router.put("/user/recoverPasswordLink", recoverPasswordValidation, validateRequest, recoverUserPassword);
router.post("/user/updateCartItems", updateCartItems);

module.exports = router;
