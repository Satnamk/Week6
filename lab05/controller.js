const Goal = require("./model");

// get all Goals
const getGoals = async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
};

// Add one Goal
const addGoal = async (req, res) => {
  const { title, description, targetDate, achieved } = req.body;

  const newGoal = new Goal({ title, description, targetDate, achieved });
  await newGoal.save();
  res.status(200).json(newGoal);
};

// Get Goal by ID
const getGoal = async (req, res) => {
  const { id } = req.params;
console.log(req.params);
  const goal = await Goal.findById(id);
  if (!goal) {
    return res.status(404).json({ message: "Goal not found" });
  }
  res.status(200).json(goal);
};

// Delete Goal by ID
const deleteGoal = async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findByIdAndDelete({ _id: id });
  if (!goal) {
    return res.status(404).json({ message: "Goal not found" });
  }
  res.status(200).json({ message: "Goal deleted successfully" });
};

// Delete all Books
const deleteAllGoals = async (req, res) => {
  const result = await Goal.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Goal by ID
const updateGoal = async (req, res) => {
  const { id } = req.params;
  const updatedGoal = req.body;
  console.log( req.body );
  // console.log( req );

  const goal = await Goal.findOneAndUpdate({ _id: id }, updatedGoal);
  if (!goal) {
    return res.status(404).json({ message: "Goal not found" });
  }
  res.status(200).json(goal);
};

module.exports = {
  getGoals,
  addGoal,
  getGoal,
  deleteGoal,
  deleteAllGoals,
  updateGoal,
};