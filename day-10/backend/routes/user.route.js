let { Router } = require("express");
const userRouter = Router();
const { signUpModal } = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require("dotenv").config()

userRouter.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;

    const isUser = await signUpModal.findOne({email:email})
    if(isUser){
        res.send({"msg":"user already present"})
    }else{
        bcrypt.hash(password,  4, function(err, hash) {
            if(err){
              res.send({"msg":"something went wrong, try gaian later"})
            }else{
              const signupData = new signUpModal({name:name,  email, password:hash});
              signupData.save();
              res.send({"msg":"registered successfully"}); 
            }
      
        });
    }
        
      
  });
  
  userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const hashedPass = await signUpModal.findOne({email})
   user_id =hashedPass._id;
 
    bcrypt.compare(password, hashedPass.password, function(err, result) {
      if (result) {
        const token = jwt.sign({user_id}, process.env.SECRET_KEY , { expiresIn: '7h' });
        res.send({"msg":`logged in with ${email}`,
        "token": `${token} `});
      } else {
        res.send({"msg":"Failed"});
      }
  });
    
  });

  module.exports={userRouter}