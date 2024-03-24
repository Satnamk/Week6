const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
  });

const Pet = mongoose.model("Pet", petSchema);

// Get all Pets
const getPets = async (req, res) => {
  const pets = await Pet.find({});
  res.status(200).json(pets);
};

// Add one Pet
const addPet = async (req, res) => {
  const { name, species, age } = req.body;
  const newPet = new Pet({ name, species, age  });
  await newPet.save();
  res.status(201).json(newPet);
};

// Delete Pet by ID
const deletePet = async (req, res) => {
  const { id } = req.params;

  const pet = await Pet.findByIdAndDelete({ _id: id });
  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }
  res.status(200).json({ message: "Pet deleted successfully" });
};

// Delete all Pets
const deleteAllPets = async (req, res) => {
  const result = await Pet.deleteMany({}); 
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} pets successfully` });
};

// Update Pet by ID
const updatePet = async (req, res) => {
  const { id } = req.params;
  const updatedPet = req.body;
  const pet = await Pet.findOneAndUpdate({ _id: id }, updatedPet);
  if (!pet) {
    return res.status(404).json({ message: "Pet not found" });
  }
  res.status(200).json(pet);
};

module.exports = { getPets, addPet, deletePet, deleteAllPets, updatePet, };
