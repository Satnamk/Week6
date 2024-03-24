const Recipe = require("./model");

// get all Recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(200).json(recipes);
};

// Add one Recipe
const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, cookingTime } = req.body;

  const newRecipe = new Recipe({ title, ingredients, instructions, cookingTime });
  await newRecipe.save();
  res.status(201).json(newRecipe);
};

// Get Recipe by ID
const getRecipe = async (req, res) => {
  const { id } = req.params;

  const recipe = await Recipe.findById(id);
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.status(200).json(recipe);
};

// Delete Recipe by ID
const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  const recipe = await Recipe.findByIdAndDelete({ _id: id });
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.status(200).json({ message: "Recipe deleted successfully" });
};

// Delete all Recipes
const deleteAllRecipes = async (req, res) => {
  const result = await Recipe.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Recipe by ID
const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const updatedRecipe = req.body;
  const recipe = await Recipe.findOneAndUpdate({ _id: id }, updatedRecipe);
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.status(200).json(recipe);
};

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe,
  deleteRecipe,
  deleteAllRecipes,
  updateRecipe,
};