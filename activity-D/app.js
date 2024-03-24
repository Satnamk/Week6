const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getPayments,
  addPayment,
  getPayment,
  updatePayment,
  deletePayment,
  deleteAllPayments,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Payments
app.get("/payments", getPayments);

// POST a new Payment
app.post("/payments", addPayment);

// GET a single Payment
app.get("/payments/:id", getPayment);

// Update Payment using PUT
app.put("/payments/:id", updatePayment);

// DELETE a Payment
app.delete("/payments/:id", deletePayment);

// DELETE all Payment
app.delete("/payments", deleteAllPayments);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});