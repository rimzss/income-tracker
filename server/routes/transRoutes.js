const { Router } = require("express");
const {
  createTrans,
  getTransSum,
  getTransLimit,
  updateCash,
  monthSum,
  catSum,
} = require("../controller/transController");
const { getTrans } = require("../controller/transController");

const router = Router();

router.route("/transaction/sum/:userId").get(getTransSum);
router.route("/transaction/monthsum/:userId").get(monthSum);
router.route("/transaction/catsum/:userId").get(catSum);
router.route("/transaction/create").post(createTrans);
router.route("/transaction").post(getTrans);
router.route("/transaction/limit").post(getTransLimit);
router.route("/transaction/updateCash").put(updateCash);

module.exports = router;
