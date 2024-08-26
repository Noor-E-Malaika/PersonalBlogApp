const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

//routes object
const router = express.Router();

//get all users GET
router.get('/all-users', getAllUsers );

//create users POST
router.post('/register', registerController);

//login POST
router.post('/login', loginController);

module.exports = router;