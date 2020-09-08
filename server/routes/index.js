const express = require("express");
const message = require("./message");
const router = express.Router();

router.use("/messages", message);

module.exports = router;
