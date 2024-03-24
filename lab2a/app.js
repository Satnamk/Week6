const express = require("express");
const app = express();

const { getRoot } = require('./controller1'); // getRoot is imported

app.get('/', getRoot); // getRoot is used as a callback

const port = 3001;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});