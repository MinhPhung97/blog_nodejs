const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/MeController');

route.get('/stored/courses', meController.storeCourses);
route.get('/trash/courses', meController.trashCourses);

module.exports = route;
