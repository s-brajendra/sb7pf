//(11) install mongoose create config create this intializing file
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL);



//(11) go connection in db  
const db = mongoose.connection;

db.on('error',console.error.bind(console,"can't connect db"));
db.once('open',function(){
    console.log(`db connected`);
});