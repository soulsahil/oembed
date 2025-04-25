const express = require("express");
const router = express.Router();
const controller = require("./authController");

router.get("/insta-media", controller.getInstagramOembed);
router.get("/embed", controller.getInstagramMedia);

module.exports = router;
