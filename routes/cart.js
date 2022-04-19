var express = require("express");
var router = express.Router();

const cartController = require("../controller/cart.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", cartController.create);
router.put("/update", cartController.update);
router.post("/view", cartController.view);
router.get("/viewall", cartController.viewall);
router.delete("/destroy", cartController.destroy);
router.post("/destroynew", cartController.destroynew);

module.exports = router;
