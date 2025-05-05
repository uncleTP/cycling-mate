const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const issuesRoutes = require("./routes/issues");

// Use the routes
app.use("/api/issues", issuesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});