const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CoursesController');

route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:id/edit', courseController.edit);
route.put('/:id', courseController.update);
route.patch('/:id/restore', courseController.restore);
route.delete('/:id', courseController.remove);
route.delete('/:id/destroy', courseController.destroy);

route.get('/:slug', courseController.show);

module.exports = route;
