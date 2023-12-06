const { Router } = require("express");
const { createTrans } = require("../controller/transController");
const { getTrans } = require("../controller/transController");

const router = Router();

router.route("/transaction/create").post(createTrans);
router.route("/transaction").get(getTrans);

module.exports = router;
