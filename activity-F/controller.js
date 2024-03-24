const Review = require("./model");

// get all Reviews
const getReviews = async (req, res) => {
  const reviews = await Review.find({});
  res.status(200).json(reviews);
};

// Add one Review
const addReview = async (req, res) => {
  const { reviewer, rating, comment } = req.body;

  const newReview = new Review({ reviewer, rating, comment });
  await newReview.save();
  res.status(201).json(newReview);
};

// Get Review by ID
const getReview = async (req, res) => {
  const { id } = req.params;

  const review = await Review.findById(id);
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }
  res.status(200).json(review);
};

// Delete Review by ID
const deleteReview = async (req, res) => {
  const { id } = req.params;

  const review = await Review.findByIdAndDelete({ _id: id });
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }
  res.status(200).json({ message: "Review deleted successfully" });
};

// Delete all Reviews
const deleteAllReviews = async (req, res) => {
  const result = await Review.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Review by ID
const updateReview = async (req, res) => {
  const { id } = req.params;
  const updatedReview = req.body;
  const review = await Review.findOneAndUpdate({ _id: id }, updatedReview);
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }
  res.status(200).json(review);
};

module.exports = {
  getReviews,
  addReview,
  getReview,
  deleteReview,
  deleteAllReviews,
  updateReview,
};