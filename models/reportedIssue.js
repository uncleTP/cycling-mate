// models/reportedIssue.js

const reportedIssue = {
    issueId: { type: 'string', required: true },         // Unique identifier for the issue
    routeId: { type: 'string', required: true },         // Associated route ID
    type: { type: 'string', required: true },            // Type of issue (e.g., pothole, blocked path)
    description: { type: 'string', required: true },     // Detailed description of the issue
    location: { type: 'string', required: true },        // Location of the issue (e.g., GPS coordinates)
    severity: { type: 'string', required: true },        // Severity of the issue (low, medium, high)
    status: { type: 'string', required: true },          // Current status (reported, in-progress, resolved)
    dateReported: { type: 'string', required: true, format: 'date-time' }  // ISO 8601 timestamp
  };
  
  module.exports = reportedIssue;
  