const express = require("express");
const router = express.Router();

const visitor = require("./visitor");

router.use(visitor);

module.exports = router;
