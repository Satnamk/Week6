const getRoot = (req, res) => {
    res.json({ message: "I am endpoint get /" });
  };
  
  module.exports = { getRoot };