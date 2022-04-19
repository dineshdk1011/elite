var express = require("express");
var router = express.Router();

const categoryController = require("../controller/category.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", categoryController.create);
router.put("/update", categoryController.update);
router.post("/view", categoryController.view);
router.get("/viewall", categoryController.viewall);
router.delete("/destroy", categoryController.destroy);

module.exports = router;
