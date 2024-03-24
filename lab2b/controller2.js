// controller1.js
const getEndpoint1 = (req, res) => {
    res.json({ message: "I am endpoint get /endpoint1" });
  };
  
  // controller2.js
  const getEndpoint2 = (req, res) => {
    res.json({ message: "I am endpoint get /endpoint2" });
  };
  
  // controller3.js
  const getEndpoint3 = (req, res) => {
    res.json({ message: "I am endpoint get /endpoint3" });
  };
  
  // controller4.js
  const getEndpoint4 = (req, res) => {
    res.json({ message: `I am endpoint get /endpoint3/${req.params.something}` });
  };
  
  // controller5.js
  const getRoot = (req, res) => {
    res.json({ message: "I am endpoint get /" });
  };
  
  module.exports = {
    getEndpoint1,
    getEndpoint2,
    getEndpoint3,
    getEndpoint4,
    getRoot,
  };