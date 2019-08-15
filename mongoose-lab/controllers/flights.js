var Flight = require("../models/flight");

module.exports = {
  flightList: flightList,
  newFlights
};

function flightList(req, res) {
  res.render("flights/flightList");
}
