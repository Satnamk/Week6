const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
  });

module.exports = mongoose.model('Review', reviewSchema);