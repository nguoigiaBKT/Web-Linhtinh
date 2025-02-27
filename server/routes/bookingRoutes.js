const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authenticate } = require('../middleware/auth');

// Create a new booking
router.post('/', authenticate, bookingController.createBooking);

// Get all bookings for a user
router.get('/user/:userId', authenticate, bookingController.getUserBookings);

// Update booking status
router.patch('/:bookingId', authenticate, bookingController.updateBookingStatus);

// Get booking details by booking ID
router.get('/:bookingId', authenticate, bookingController.getBookingDetails);

module.exports = router;