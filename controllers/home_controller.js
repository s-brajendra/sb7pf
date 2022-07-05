
const { findLastKey } = require('lodash');
const User = require('../models/user');
//(7)
// this is page contains all html pass this to routes/index.js which will pass it to index.js main file

// it is some random exported funtion 
// module.exports.home = function(req,res ){
//     return res.end('<h1>everything seems set</h1>')
// }


//(10) whatever is response render this 
module.exports.home = function(req,res){

console.log(req.cookies);    //(13)
res.cookie('my cookie',64);    //(13)


    return res.render('home',{
        title:"home anything"
    });
} 




