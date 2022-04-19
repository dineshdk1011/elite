var express = require("express");
var router = express.Router();

const galleryController = require("../controller/gallery.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", galleryController.create);
router.put("/update", galleryController.update);
router.post("/view", galleryController.view);
router.post("/viewnew", galleryController.viewnew);
router.get("/viewall", galleryController.viewall);
router.delete("/destroy", galleryController.destroy);

module.exports = router;
