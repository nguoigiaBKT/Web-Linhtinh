const Subscriber = require('../models/Subscriber');

// Add a new subscriber
exports.addSubscriber = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the email already exists
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Create a new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Get all subscribers
exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        return res.status(200).json(subscribers);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Remove a subscriber
exports.removeSubscriber = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSubscriber = await Subscriber.findByIdAndDelete(id);
        if (!deletedSubscriber) {
            return res.status(404).json({ message: 'Subscriber not found' });
        }

        return res.status(200).json({ message: 'Subscriber removed successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};