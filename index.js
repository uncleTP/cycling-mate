const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app. get('/api/routes', (req, res) => {
  res. json([
  {
  routeId: "route001", name: "River Side Trail",
  description: "A scenic route along the river, perfect for beginners.", distance: 12.5, surfaceType: "asphalt", difficultyLevel: "easy", popularityScore: 4
  },
  {
  routeId: "route002", name: "Mountain Climb",
  description: "A challenging mountain route with steep climbs and great views.", distance: 25.0, surfaceType: "dirt", difficultyLevel: "hard", popularityScore: 5
  }
  ]);
  })