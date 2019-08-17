var Flight = require("../models/flight");

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flights.destination.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/detail/${flight.id}`);
    });
  });
}
