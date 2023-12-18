const { Router } = require("express");
const { createTrans, getTransSum } = require("../controller/transController");
const { getTrans } = require("../controller/transController");

const router = Router();

router.route("/transaction/create").post(createTrans);
router.route("/transaction").get(getTrans);
router.route("/transaction/sum").post(getTransSum);

module.exports = router;
