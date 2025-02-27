// filepath: /flightly-booking-system/flightly-booking-system/server/controllers/flightController.js
const Flight = require('../models/Flight');

// Create a new flight
exports.createFlight = async (req, res) => {
    try {
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all flights with optional filtering
exports.getFlights = async (req, res) => {
    try {
        const { from, to, departureDate } = req.query;
        const query = {};
        if (from) query.from = from;
        if (to) query.to = to;
        if (departureDate) query.departureDate = new Date(departureDate);

        const flights = await Flight.find(query);
        res.status(200).json(flights);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get flight by ID
exports.getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update flight information
exports.updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        res.status(200).json(flight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a flight
exports.deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id);
        if (!flight) return res.status(404).json({ message: 'Flight not found' });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};