const express = require("express");
const router = express.Router();
const controller = require("../controller/visitor");

router.post("/visitor/add", controller.addVisitor);
router.get("/visitor-today", controller.visitorToday);
router.get("/visitors", controller.listVisitorToday);

module.exports = router;
