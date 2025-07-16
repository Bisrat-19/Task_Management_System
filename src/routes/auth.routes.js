const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth.middleware');
const { signup, login, profile } = require('../controllers/auth.controller');
const { signupValidationRules, loginValidationRules, validate } = require('../utils/validator');

router.post('/signup', signupValidationRules(), validate, signup);
router.post('/login', loginValidationRules(), validate, login);
router.get('/profile', authMiddleware, profile);

module.exports = router;
