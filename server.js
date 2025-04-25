const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
