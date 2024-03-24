const Event = require("./model");

// get all Events
const getEvents = async (req, res) => {
  const orders = await Event.find({});
  res.status(200).json(orders);
};

// Add one Event
const addEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  const newEvent = new Event({ title, description, date, location });
  await newEvent.save();
  res.status(201).json(newEvent);
};

// Get Event by ID
const getEvent = async (req, res) => {
  const { id } = req.params;

  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.status(200).json(event);
};

// Delete Event by ID
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  const event = await Event.findByIdAndDelete({ _id: id });
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.status(200).json({ message: "Event deleted successfully" });
};

// Delete all Books
const deleteAllEvents = async (req, res) => {
  const result = await Event.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update Event by ID
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updatedEvent = req.body;
  const event = await Event.findOneAndUpdate({ _id: id }, updatedEvent);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.status(200).json(event);
};


module.exports = {
  getEvents,
  addEvent,
  getEvent,
  deleteEvent,
  deleteAllEvents,
  updateEvent,
};