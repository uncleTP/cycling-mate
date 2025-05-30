const cyclingRoutes = [
  {
    routeId: "route001",
    name: "River Side Trail",
    description: "A scenic route along the river, perfect for beginners.",
    distance: 12.5,
    surfaceType: "Asphalt",
    difficultyLevel: "Easy",
    popularityScore: 4,  // this is the value used in popularity insights
  },
  {
    routeId: "route002",
    name: "Mountain Climb",
    description: "A challenging mountain route with steep climbs and great views.",
    distance: 25,
    surfaceType: "Dirt",
    difficultyLevel: "Hard",
    popularityScore: 5,
  },
];

const getAllRoutes = () => {
  return cyclingRoutes;
};

module.exports = { getAllRoutes };
