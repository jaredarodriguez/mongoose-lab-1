var express = require("express");
var router = express.Router();
var ticketsCtrl = require("../controllers/tickets");

router.post("/tickets/:id", ticketsCtrl.create);
router.get("/flights/:id/tickets/new/", ticketsCtrl.new);

// router.post('/flights/:id/tickets', ticketsCtrl.addToTicket);

module.exports = router;
