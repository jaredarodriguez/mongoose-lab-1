var express = require("express");
var router = express.Router();
var flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/flightList", flightsCtrl.flightList);

module.exports = router;
