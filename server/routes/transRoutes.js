const { Router } = require("express");
const {
  createTrans,
  getTransSum,
  getTransLimit,
  updateCash,
} = require("../controller/transController");
const { getTrans } = require("../controller/transController");

const router = Router();

router.route("/transaction/create").post(createTrans);
router.route("/transaction").post(getTrans);
router.route("/transaction/limit").post(getTransLimit);
router.route("/transaction/sum").post(getTransSum);
router.route("/transaction/updateCash").post(updateCash);

module.exports = router;
