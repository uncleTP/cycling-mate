// dao/reportedIssueDao.js

const reportedIssueModel = require('../models/reportedIssue');

// Example method to get all reported issues for a specific route
function getIssuesByRouteId(routeId) {
  // Simulating fetching reported issues for the route
  return [
    {
      issueId: 'ABCDE', // Sample issue ID with 5 letters
      routeId: routeId,
      type: 'pothole',
      description: 'Large pothole near the bridge.',
      location: '48.2082, 16.3738',
      severity: 'high',
      status: 'reported',
      dateReported: '2025-05-01T12:00:00Z'
    }
  ];
}

// Example method to add a new reported issue
function addIssue(issueData) {
  const newIssue = {
    issueId: generateIssueId(), // Simulate issue ID generation
    routeId: issueData.routeId,
    type: issueData.type,
    description: issueData.description,
    location: issueData.location,
    severity: issueData.severity,
    status: issueData.status || 'reported',
    dateReported: issueData.dateReported || new Date().toISOString()
  };

  // In a real app, I'd store this in a database or memory
  return newIssue;
}

// Helper to simulate generating a 5-letter issue ID
function generateIssueId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

module.exports = {
  getIssuesByRouteId,
  addIssue
};