const express = require('express');
const router = express.Router();
const {getAllUsers, getUser, updateUser, deleteUser} = require('../../controllers/user/userController.js');

//get all users
router.get('/', getAllUsers);
router.get('/:cid', getUser )
router.put('/:cid', updateUser) 
router.delete('/:cid', deleteUser)

module.exports = router
