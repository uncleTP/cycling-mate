const express = require("express");
const router = express.Router();
const app = express();
const cors = require('cors');
const cyclingRouteDao = require("../dao/cyclingRouteDao");
const reportedIssueDao = require('../dao/reportedIssueDao');
const req = require("express/lib/request");

// 1. GET all cycling routes
router.get("/routes", (req, res) => {
  const routes = cyclingRouteDao.getAllRoutes(); // Fetch data from DAO

  if (routes.length === 0) {
    return res.status(404).json({ error: "No routes found." });
  }

  res.json(routes); // Send routes data as JSON response
});

// 2. GET reported issues for a specific route
router.get('/routes/:routeId/issues', (req, res) => {
  const routeId = req.params.routeId;

  const route = cyclingRouteDao.findRouteById(routeId);
  if (!route) {
    return res.status(404).json({
      error: "routeNotFound",
      message: `No route found with ID ${routeId}.`
    });
  }

  const issues = reportedIssueDao.getIssuesByRouteId(routeId);
  res.json({ routeId, issues });
});

// 3. POST a new issue report
router.post('/issues', (req, res) => {
  const issueData = req.body;

  // Optionally: validate issueData here

  const newIssue = reportedIssueDao.addIssue(issueData);
  res.status(201).json({
    message: "Issue reported successfully.",
    issue: newIssue
  });
});

// 4. GET popularity insights
router.get('/routes/popularity-insights', (req, res) => {
  const routes = cyclingRouteDao.getAllRoutes();

  if (routes.length === 0) {
    return res.status(404).json({
      error: "noRoutesAvailable",
      message: "No cycling routes are available to analyze popularity."
    });
  }

  const averagePopularity =
    routes.reduce((sum, route) => sum + (route.popularityScore || 0), 0) /
    routes.length;

  const popularRoutes = routes.filter(route => route.popularityScore >= averagePopularity);

  res.json({
    averagePopularity: averagePopularity.toFixed(2),
    popularRoutes
  });
});

app.use(cors());
module.exports = router;