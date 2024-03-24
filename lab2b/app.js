const express = require("express");
const app = express();
const port = 3001;

// Import controllers
const { getEndpoint1 } = require("./controller2");
const { getEndpoint2 } = require("./controller2");
const { getEndpoint3 } = require("./controller2");
const { getEndpoint4 } = require("./controller2");
const { getRoot } = require("./controller2");

// Define routes
app.get("/", getRoot);
app.get("/endpoint1", getEndpoint1);
app.get("/endpoint2", getEndpoint2);
app.get("/endpoint3", getEndpoint3);
app.get("/endpoint3/:something", getEndpoint4);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});