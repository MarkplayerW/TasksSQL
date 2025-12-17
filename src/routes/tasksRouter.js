const express = require('express');

const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.index);
router.get('/new', tasksController.newForm);
router.post('/new', tasksController.add);
router.get('/edit/:id', tasksController.editForm);
router.post('/edit/:id', tasksController.edit);
router.get('/delete/:id', tasksController.remove);

module.exports = router;