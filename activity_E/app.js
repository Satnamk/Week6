const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getRecipes,
  addRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  deleteAllRecipes,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Recipes
app.get("/recipes", getRecipes);

// POST a new Recipe
app.post("/recipes", addRecipe);

// GET a single Recipe
app.get("/recipes/:id", getRecipe);

// Update Recipe using PUT
app.put("/recipes/:id", updateRecipe);

// DELETE a Recipe
app.delete("/recipes/:id", deleteRecipe);

// DELETE all Recipe
app.delete("/recipes", deleteAllRecipes);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});