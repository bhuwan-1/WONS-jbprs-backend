const express = require('express');
const router = express.Router();
const {sessionMiddleware,} = require('../../helpers/session.js')
const {register, login, logout} = require('../../controllers/auth/authController.js');

router.use(sessionMiddleware)
// router.post('/login', login);
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

module.exports = router