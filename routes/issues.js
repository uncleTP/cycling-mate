const express = require("express");
const router = express.Router();

// Temporary data storage (In-memory storage)
let issues = []; 

// POST route for creating a new issue
router.post("/create", (req, res) => {
  const { routeId, type, description, location, severity, status, dateReported } = req.body;

  // Create a new issue object
  const newIssue = {
    issueId: `ISSUE-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,  // Generate a random issue ID
    routeId,
    type,
    description,
    location,
    severity,
    status,
    dateReported,
  };

  // Save the new issue to the "issues" array
  issues.push(newIssue);

  // Respond with a confirmation
  res.status(201).json({
    message: "Issue successfully created!",
    data: newIssue,
  });
});

module.exports = router;
