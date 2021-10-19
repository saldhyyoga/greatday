const express = require("express");
const router = express.Router();
const controller = require("../controller/auth");

router.post("/sign-in", controller.signin);

module.exports = router;
