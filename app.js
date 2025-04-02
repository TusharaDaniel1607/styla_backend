require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const designerRoutes = require("./routes/designerRoutes"); // Import Designer Routes
const swaggerDocs = require("./config/swagger"); // Import Swagger

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", designerRoutes); // Add Designer Routes

swaggerDocs(app); // Initialize Swagger  

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
