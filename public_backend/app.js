const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const studentRoute = require("./routes/studentsRoutes");
const updateRoute = require("./routes/blogRoutes");
const contactRoute = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/student", studentRoute);
app.use("/api/updates", updateRoute);
app.use("/api/contact", contactRoute);

module.exports = app;
