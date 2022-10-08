const Flight = require('../models/flight')

module.exports = {
    index,
    new: newMovie,
}

function index(req, res) {
    // Flight.find({}, function(err, flights) {
    //     res.render('flights/index', {title: 'All Flights', flights})
    // })
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function newMovie(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
}