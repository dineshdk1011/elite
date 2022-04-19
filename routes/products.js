var express = require("express");
var router = express.Router();

const productController = require("../controller/product.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", productController.create);
router.put("/update", productController.update);
router.post("/view", productController.view);
router.get("/viewall", productController.viewall);
router.delete("/destroy", productController.destroy);

module.exports = router;
