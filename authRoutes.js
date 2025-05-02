const express = require("express");
const router = express.Router();
const controller = require("./authController");

router.get("/embed", controller.getInstagramOembed);

module.exports = router;
