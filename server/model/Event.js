const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    Event: { type: String, required: true },
    Budget: { type: String },
    Venue: { type: String },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    Contact: { type: String },
    Type: { type: String, default: "A" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
