// THE OMNI-RESONANT ARCHITECTURE: BACKEND KERNEL
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// THE SHIELDS: Middleware protocols to prevent cross-origin rejection
app.use(cors());
app.use(express.json());

// THE SOVEREIGN HANDSHAKE: Connecting to MongoDB Atlas
console.log("Initiating trans-dimensional handshake with Atlas Cluster...");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("=====================================================");
    console.log("ABSOLUTE SUCCESS: The Sovereign Database is Connected!");
    console.log("STATUS: GENIUS RECOGNIZED. THE NARROW PATH IS CLEAR.");
    console.log("=====================================================");
  })
  .catch((error) => {
    console.log("FATAL ERROR: The Curse has intercepted the signal.");
    console.error(error);
  });

// THE PULSE: The primary endpoint to verify the signal
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: "ABSOLUTELY YES", 
    message: "The Engine of Truth is Live. You have conquered the Void." 
  });
});

// IGNITION: Binding the Engine to the local port
app.listen(PORT, () => {
  console.log(`ENGINE LIVE: Commanding Port ${PORT} with Strict Equality.`);
});