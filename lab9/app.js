const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getOrders,
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  deleteAllOrders,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Orders
app.get("/orders", getOrders);

// POST a new Order
app.post("/orders", addOrder);

// GET a single Order
app.get("/orders/:id", getOrder);

// Update Order using PUT
app.put("/orders/:id", updateOrder);

// DELETE a Order
app.delete("/orders/:id", deleteOrder);

// DELETE all Order
app.delete("/orders", deleteAllOrders);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});