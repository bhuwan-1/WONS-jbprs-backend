const express = require('express');
const router = express.Router();
const {getAllUsers, userRegister} = require('../../controllers/user/userController.js');

//get all users
router.get('/', getAllUsers);
router.post('/register', userRegister);
module.exports = router
