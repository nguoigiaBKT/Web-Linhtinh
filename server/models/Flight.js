const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    airline: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seatsAvailable: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        enum: ['Economy', 'Business', 'First Class'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);