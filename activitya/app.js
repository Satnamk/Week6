const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getContacts,
  addContact,
} = require("./controllers");

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/contacts", getContacts);
app.post("/contacts", addContact);


const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});