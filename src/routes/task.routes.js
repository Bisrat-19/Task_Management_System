const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/task.controller');

const { taskValidationRules, validate } = require('../utils/validator');

router.use(authMiddleware);

router.post('/', taskValidationRules(), validate, createTask);
router.get('/', getTasks);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
