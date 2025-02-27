const Review = require('../models/Review');

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const { userId, content, rating } = req.body;
        const newReview = new Review({
            userId,
            content,
            rating,
            createdAt: new Date()
        });
        await newReview.save();
        res.status(201).json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error: error.message });
    }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('userId', 'username email');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
};

// Get reviews by user ID
exports.getReviewsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const reviews = await Review.find({ userId }).populate('userId', 'username email');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
};