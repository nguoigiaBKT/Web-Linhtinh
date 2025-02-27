const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Route to get all destinations
router.get('/', destinationController.getAllDestinations);

// Route to get a specific destination by ID
router.get('/:id', destinationController.getDestinationById);

// Route to create a new destination (admin only)
router.post('/', destinationController.createDestination);

// Route to update an existing destination (admin only)
router.put('/:id', destinationController.updateDestination);

// Route to delete a destination (admin only)
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;