var express = require("express");
var router = express.Router();

const userController = require("../controller/user.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", userController.create);
router.put("/update", userController.update);
router.post("/view", userController.view);
router.get("/viewall", userController.viewall);
router.delete("/destroy", userController.destroy);
router.post("/viewRef", userController.viewbyRef);
router.post("/viewrect", userController.viewrect);



module.exports = router;
