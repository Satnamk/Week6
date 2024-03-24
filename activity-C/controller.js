const Feedback = require("./model");

// get all Feedbacks
const getFeedbacks = async (req, res) => {
  const goals = await Feedback.find({});
  res.status(200).json(goals);
};

// Add one Feedback
const addFeedback = async (req, res) => {
  const { sender, message, rating } = req.body;

  const newFeedback = new Feedback({ sender, message, rating });
  await newFeedback.save();
  res.status(201).json(newFeedback);
};

// Get Feedback by ID
const getFeedback = async (req, res) => {
  const { id } = req.params;

  const feedback = await Feedback.findById(id);
  if (!feedback) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.status(200).json(feedback);
};

// Delete Feedback by ID
const deleteFeedback = async (req, res) => {
  const { id } = req.params;

  const feedback = await Feedback.findByIdAndDelete({ _id: id });
  if (!feedback) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.status(200).json({ message: "Feedback deleted successfully" });
};

// Delete all Books
const deleteAllFeedbacks = async (req, res) => {
  const result = await Feedback.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Feedback by ID
const updateFeedback = async (req, res) => {
  const { id } = req.params;
  const updatedFeedback = req.body;
  const feedback = await Feedback.findOneAndUpdate({ _id: id }, updatedFeedback);
  if (!feedback) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.status(200).json(feedback);
};

module.exports = {
  getFeedbacks,
  addFeedback,
  getFeedback,
  deleteFeedback,
  deleteAllFeedbacks,
  updateFeedback,
};