const Flight = require('../models/flight')

module.exports = {
    index,
    new: newMovie,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newMovie(req, res) {
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