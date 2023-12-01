const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

router.route("/upload").post(imageUpload.single("image"), upload);
router.route("/").get();

module.exports = router;
