const express = require("express");
const router = express.Router();
const db = require("../database").db;
const multer = require("multer");
const storage = multer.memoryStorage();


module.exports = router;