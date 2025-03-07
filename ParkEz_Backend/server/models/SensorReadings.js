
const mongoose = require("mongoose");

const sensorReadingSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  distances: [
    {
      sensor_id: Number,
      distance: {
        type: Number,
        min: 0,  // Ensure valid range
        max: 400
      }
    }
  ]
});

// Index timestamp for faster queries
sensorReadingSchema.index({ timestamp: 1 });

const SensorReading = mongoose.model("SensorReading", sensorReadingSchema);
module.exports = SensorReading;
