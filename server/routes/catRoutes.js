const { Router } = require("express");
const {
  createCategory,
  deleteCategory,
  getCategory,
} = require("../controller/categoryController");

const router = Router();

router.route("/category/create").post(createCategory);
router.route("/category/delete").delete(deleteCategory);
router.route("/category").post(getCategory);
router.route("/transition").get();

module.exports = router;
