var express = require("express");
var router = express.Router();

const swatchController = require("../controller/swatch.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", swatchController.create);
router.put("/update", swatchController.update);
router.post("/view", swatchController.view);
router.post("/viewnew", swatchController.viewnew);
router.get("/viewall", swatchController.viewall);
router.delete("/destroy", swatchController.destroy);

module.exports = router;
