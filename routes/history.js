var express = require("express");
var router = express.Router();

const historyController = require("../controller/history.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.post("/create", historyController.create);
router.put("/update", historyController.update);
router.post("/view", historyController.view);
router.get("/viewall", historyController.viewall);
router.delete("/destroy", historyController.destroy);

module.exports = router;
