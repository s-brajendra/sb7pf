//(0) npm init
//(1) inculding imp packages and defining locat port
const express = require('express');
const port = process.env.PORT || 8000;

 
const expressLayouts = require('express-ejs-layouts');
//(13)
const cookieParser = require('cookie-parser');


// (12)adding mongoose to main file


const db = require('./config/mongoose');


// (2) npm install express
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));





app.use(cookieParser());  // (13)
app.use(express.static('assets'));

//(9) setting up view engine
app.set('view engine','ejs');
app.set('views','./views'); // here we have set views as /views folder so everytime when we render ejs file 
// we dont need to specifiy relative path just give file name (10)





//(6)
// middleware function 
// connecting routes/index.js's router to this file follow express.Router documentation
// telling this file that all further get/post request will be sent by routes/index.js file and will we passed to this file
app.use('/', require('./routes/index.js')); // redirect to "/" path







// server intialization 
// (4) 
app.listen(port,function (err){
    if(err){
        console.log(`server could not start`);
    }
    else(console.log(`server is started at port ${port}`));
});