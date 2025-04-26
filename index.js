const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const authRoutes = require("./authRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
