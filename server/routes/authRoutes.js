const { Router } = require("express");
const { signup, signin, getUser, editUser } = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("").post(getUser);
router.route("/edit").put(editUser)

module.exports = router;
