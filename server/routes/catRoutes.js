const { Router } = require("express");
const {
  createCategory,
  deleteCategory,
} = require("../controller/categoryController");

const router = Router();

router.route("/category/create").post(createCategory);
router.route("/category/delete").delete(deleteCategory);

module.exports = router;
