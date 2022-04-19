var express = require("express");
var router = express.Router();

const treeviewcontroller = require("../controller/viewtree.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/tree/:id", treeviewcontroller.view);


module.exports = router;
