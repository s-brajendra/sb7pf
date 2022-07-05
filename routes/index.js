const express = require('express'); // (5)
const router = express.Router();// (5)


//(7)
// for controller/home_controller.js file, we aquired this file here 
const homeControler =  require('../controllers/home_controller.js');

router.get('/',homeControler.home); // we are passing function of homeConrtroller i.e home, we exported it from  controller/homeController.js file




//(8) making this parent for all the requests that will come from user route as it should be
router.use('/user',  require('./users.js'));





module.exports = router; // (5) exporting router so that we can use it in main index.js file 