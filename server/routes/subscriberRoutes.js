const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

// Route to add a new subscriber
router.post('/', subscriberController.addSubscriber);

// Route to get all subscribers (optional, if needed)
router.get('/', subscriberController.getAllSubscribers);

module.exports = router;