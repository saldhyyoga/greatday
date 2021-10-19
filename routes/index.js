const express = require("express");
const router = express.Router();

const auth = require("./auth");
const visitor = require("./visitor");

router.use(auth);
router.use(visitor);

module.exports = router;
