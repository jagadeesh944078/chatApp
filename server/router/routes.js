const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
//const loginController=require('../controller/login.controller')

router.post('/registration', userController.registration);
router.post('/login',userController.login);
module.exports = router;
