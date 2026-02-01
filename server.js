const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// TEMP STORAGE (instead of DB)
let emergencyRequests = [];

// Test route
app.get("/", (req, res) => {
  res.send("✅ JeevanRaksha Backend Running");
});

// Save emergency request
app.post("/request", (req, res) => {
  const data = {
    id: emergencyRequests.length + 1,
    name: req.body.name,
    phone: req.body.phone,
    issue: req.body.issue,
    time: new Date()
  };

  emergencyRequests.push(data);

  res.json({
    message: "Emergency request received",
    data
  });
});

// Get all requests (for demo/admin)
app.get("/requests", (req, res) => {
  res.json(emergencyRequests);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
