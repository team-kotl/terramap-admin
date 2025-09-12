const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
