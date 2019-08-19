var Flight = require("../models/flight");
var Ticket = require("../models/ticket");

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, tickets) {
    res.render("tickets/new", { title: "Add Ticket", tickets });
  });
}

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, tickets) {
    console.log(req.body);
    res.redirect(`/flights/${req.params.id}`);
  });
}
// function create(req, res) {
//   var ticket = new Ticket({
//     seat: req.body.seat,
//     price: req.body.price,
//     flight: req.params.id
//   });
//   ticket.save(function(err) {
//     if (err) {
//       console.log(err.message);
//     } else {
//       res.redirect("/flights/" + req.params.id);
//     }
//   });
// }
