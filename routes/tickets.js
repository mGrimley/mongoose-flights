const express = require('express')
const router = express.Router()
const ticketCtrl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new', ticketCtrl.new)

module.exports = router