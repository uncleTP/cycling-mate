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