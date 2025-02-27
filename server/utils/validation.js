// This file contains utility functions for validating user input.

const { body, validationResult } = require('express-validator');

// Validation for user registration
const validateUserRegistration = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation for user login
const validateUserLogin = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required'),
];

// Validation for flight creation
const validateFlightCreation = [
    body('from')
        .notEmpty().withMessage('Departure location is required'),
    body('to')
        .notEmpty().withMessage('Destination location is required'),
    body('departureDate')
        .notEmpty().withMessage('Departure date is required')
        .isISO8601().withMessage('Invalid date format'),
    body('returnDate')
        .optional()
        .isISO8601().withMessage('Invalid date format'),
    body('airline')
        .notEmpty().withMessage('Airline is required'),
    body('price')
        .isNumeric().withMessage('Price must be a number'),
    body('seatsAvailable')
        .isNumeric().withMessage('Seats available must be a number'),
    body('class')
        .notEmpty().withMessage('Class is required'),
];

// Function to handle validation results
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserRegistration,
    validateUserLogin,
    validateFlightCreation,
    handleValidationErrors,
};