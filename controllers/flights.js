const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}

function create(req, res) {
    req.body.flightNo = parseInt(req.body.flightNo)

    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights/new')
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log('CONSOLE LOG: ', req.params.id)
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Details', flight, tickets})
        })
    })
}