const Payment = require("./model");

// get all Payments
const getPayments = async (req, res) => {
  const payments = await Payment.find({});
  res.status(200).json(payments);
};

// Add one Payment
const addPayment = async (req, res) => {
  const { amount, method, status } = req.body;

  const newPayment = new Payment({ amount, method, status });
  await newPayment.save();
  res.status(201).json(newPayment);
};

// Get Payment by ID
const getPayment = async (req, res) => {
  const { id } = req.params;

  const payment = await Payment.findById(id);
  if (!payment) {
    return res.status(404).json({ message: "Payment not found" });
  }
  res.status(200).json(payment);
};

// Delete Payment by ID
const deletePayment = async (req, res) => {
  const { id } = req.params;

  const payment = await Payment.findByIdAndDelete({ _id: id });
  if (!payment) {
    return res.status(404).json({ message: "Payment not found" });
  }
  res.status(200).json({ message: "Payment deleted successfully" });
};

// Delete all Books
const deleteAllPayments = async (req, res) => {
  const result = await Payment.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Payment by ID
const updatePayment = async (req, res) => {
  const { id } = req.params;
  const updatedPayment = req.body;
  const payment = await Payment.findOneAndUpdate({ _id: id }, updatedPayment);
  if (!payment) {
    return res.status(404).json({ message: "Payment not found" });
  }
  res.status(200).json(payment);
};

module.exports = {
  getPayments,
  addPayment,
  getPayment,
  deletePayment,
  deleteAllPayments,
  updatePayment,
};