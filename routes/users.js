const express = require('express'); //(8)
const router = express.Router(); //(8)


// (9) aquired/included controller file in this router file
const userController = require('../controllers/users_controller.js');  

//(9) passed function as a method of userController object that we got from user_controller file 
router.get('/profile',userController.profile); 


router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);



router.post('/create', userController.create);
router.post('/create-session', userController.session);






module.exports = router; // (8) exported for main index