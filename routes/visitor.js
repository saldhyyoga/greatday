const express = require("express");
const router = express.Router();
const controller = require("../controller/visitor");
const middleware = require("../middleware");

router.post("/visitor/add", controller.addVisitor);
router.get("/visitor-today", controller.visitorToday);
router.get("/visitors", controller.listVisitorToday);
router.get("/visitor/find", middleware.admin, controller.findVisitor);

module.exports = router;
