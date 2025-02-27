// filepath: /flightly-booking-system/flightly-booking-system/server/controllers/destinationController.js
const Destination = require('../models/Destination');

// Get all destinations
exports.getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving destinations', error });
    }
};

// Get a destination by ID
exports.getDestinationById = async (req, res) => {
    const { id } = req.params;
    try {
        const destination = await Destination.findById(id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving destination', error });
    }
};

// Create a new destination (admin only)
exports.createDestination = async (req, res) => {
    const { name, image, startingPrice, description } = req.body;
    try {
        const newDestination = new Destination({ name, image, startingPrice, description });
        await newDestination.save();
        res.status(201).json(newDestination);
    } catch (error) {
        res.status(500).json({ message: 'Error creating destination', error });
    }
};

// Update a destination (admin only)
exports.updateDestination = async (req, res) => {
    const { id } = req.params;
    const { name, image, startingPrice, description } = req.body;
    try {
        const updatedDestination = await Destination.findByIdAndUpdate(id, { name, image, startingPrice, description }, { new: true });
        if (!updatedDestination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(updatedDestination);
    } catch (error) {
        res.status(500).json({ message: 'Error updating destination', error });
    }
};

// Delete a destination (admin only)
exports.deleteDestination = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDestination = await Destination.findByIdAndDelete(id);
        if (!deletedDestination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting destination', error });
    }
};