const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getReviews,
  addReview,
  getReview,
  updateReview,
  deleteReview,
  deleteAllReviews,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Reviews
app.get("/reviews", getReviews);

// POST a new Review
app.post("/reviews", addReview);

// GET a single Review
app.get("/reviews/:id", getReview);

// Update Review using PUT
app.put("/reviews/:id", updateReview);

// DELETE a Review
app.delete("/reviews/:id", deleteReview);

// DELETE all Review
app.delete("/reviews", deleteAllReviews);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});