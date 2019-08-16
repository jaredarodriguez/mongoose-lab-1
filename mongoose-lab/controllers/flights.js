const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render("flights/index", { title: "Flights", flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Flights" });
}

//!this takes the output of the form and submits it to the database
function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
}
