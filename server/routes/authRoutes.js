const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../utils/validation');

const router = express.Router();

// User registration route
router.post('/register', validateRegistration, register);

// User login route
router.post('/login', validateLogin, login);

module.exports = router;