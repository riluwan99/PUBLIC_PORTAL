const express = require("express");
const route = express.Router();
const blogControllers = require("../controllers/blogControllers");

route.get("/", blogControllers.getAllBlogs);

module.exports = route;
