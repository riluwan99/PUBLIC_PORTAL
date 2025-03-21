const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");

router.post("/", studentsController.searchStudent);

module.exports = router;
