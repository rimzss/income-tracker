const { Router } = require("express");
const { signup, signin, getUser } = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("").post(getUser);

module.exports = router;
