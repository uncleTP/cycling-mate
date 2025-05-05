// models/cyclingRoute.js

const cyclingRoute = {
    routeId: { type: 'string', required: true },      // Unique identifier for the route
    name: { type: 'string', required: true },         // Name of the route
    description: { type: 'string', required: true },  // Detailed description of the route
    distance: { type: 'number', required: true },     // Distance of the route in kilometers
    surfaceType: { type: 'string', required: true },  // Type of surface (asphalt, dirt, etc.)
    difficultyLevel: { type: 'string', required: true }, // Difficulty level (easy, medium, hard)
    popularityScore: { type: 'number', required: true, min: 1, max: 5 } // Popularity score between 1 and 5
  };
  
  module.exports = cyclingRoute;
  