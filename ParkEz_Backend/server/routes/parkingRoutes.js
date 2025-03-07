const express = require("express");
const router = express.Router();
const SensorReading = require("../models/SensorReadings"); // Import the model

// GET available parking slots based on sensor distances
router.get("/slots", async (req, res) => {
    try {
        // Fetch the most recent sensor data
        const latestReading = await SensorReading.findOne().sort({ timestamp: -1 });

        if (!latestReading) {
            return res.status(404).json({ message: "No sensor data found" });
        }

        // Process the 6 sensor readings
        const sensorSlots = latestReading.distances.map((sensor) => ({
            slotNumber: sensor.sensor_id,
            isOccupied: sensor.distance > 0 // If distance > 0, slot is occupied
        }));

        // Add 2 extra slots as 'Under Construction'
        while (sensorSlots.length < 6) {
            sensorSlots.push({
                slotNumber: sensorSlots.length + 1,
                isOccupied: true // Mark as occupied to avoid confusion
            });
        }

        const totalSlots = [
            ...sensorSlots,
            { slotNumber: 7, isOccupied: true, status: "Under Construction" },
            { slotNumber: 8, isOccupied: true, status: "Under Construction" }
        ];

        res.json(totalSlots);
    } catch (error) {
        console.error("Error fetching parking slots:", error);
        res.status(500).json({ error: "Failed to fetch parking slots" });
    }
});

module.exports = router;
