const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Route to get all flights with optional filtering
router.get('/', flightController.getAllFlights);

// Route to create a new flight (admin only)
router.post('/', flightController.createFlight);

// Route to get a specific flight by ID
router.get('/:flightId', flightController.getFlightById);

// Route to update a flight by ID (admin only)
router.patch('/:flightId', flightController.updateFlight);

// Route to delete a flight by ID (admin only)
router.delete('/:flightId', flightController.deleteFlight);

module.exports = router;