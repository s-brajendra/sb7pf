const User = require('../models/user');

module.exports.profile = function(req, res){
    res.end('<h1>user profile</h1>');
}


module.exports.signIn = function(req,res){
    return res.render('signin');
}

module.exports.signUp = function(req,res){
    return res.render('signup');
}





module.exports.create = function(req,res){

    // User.create(req.body,function(err,user){
    //     if(err){console.log(err)}
    //     else{console.log(user);}
    // });
    console.log(req.body);

    // checking if 2 passsword are equal
    if(req.body.password !=req.body.confirmPassword){
        return res.redirect('back'); 
        console.log("1");
    }

    // checking if email already exist
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user');}
    
        // if user not present 
        if(!user) {
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating user')} // if error occured
                return res.redirect('http://127.0.0.1:8000/user/sign-in'); // else redirect to sign in page
                console.log("2");
            })
        }
        else{
            console.log("errror a gya")
            return res.redirect('back');
            console.log("3");
        }


    });
}



module.exports.session = function(req,res){

    const pass = req.body.password;
    const emai = req.body.email;
    
    console.log(pass,emai);
    User.findOne({email:emai},function(err,user){

        if(err){console.log('error in find user');
           return  res.redirect('back');  
           console.log("1");      
    }

        if(!user){
            alert("user not found 1st login");
            return  res.redirect('back');
            console.log("2");

        }

        else{
            return res.redirect('profile');
            console.log(user.email);
            console.log("3");
        }


    })
}

