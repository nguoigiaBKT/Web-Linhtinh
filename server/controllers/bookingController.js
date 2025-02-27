// filepath: /flightly-booking-system/flightly-booking-system/server/controllers/bookingController.js
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const User = require('../models/User');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { flightId, travelers, totalPrice } = req.body;
        const userId = req.user.id; // Assuming user ID is available in req.user after authentication

        const booking = new Booking({
            userId,
            flightId,
            travelers,
            totalPrice,
            bookingDate: new Date(),
            status: 'Confirmed'
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in req.user after authentication
        const bookings = await Booking.find({ userId }).populate('flightId');

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bookings', error });
    }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { status } = req.body;

        const booking = await Booking.findByIdAndUpdate(bookingId, { status }, { new: true });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking status updated successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking status', error });
    }
};