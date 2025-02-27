const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/auth');

// Route to create a new review
router.post('/', authMiddleware, reviewController.createReview);

// Route to get all reviews
router.get('/', reviewController.getAllReviews);

// Route to get a review by ID
router.get('/:id', reviewController.getReviewById);

// Route to update a review by ID
router.patch('/:id', authMiddleware, reviewController.updateReview);

// Route to delete a review by ID
router.delete('/:id', authMiddleware, reviewController.deleteReview);

module.exports = router;