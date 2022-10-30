const express = require("express");
const { connection } = require("./config/db.js");
const { signUpModal } = require("./models/signup.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dashboard", (req, res) => {
const token = req.headers.authorization.split(" ")[1]
// console.log(token)
  try{var decoded = jwt.verify(token, 'abc12345');
      console.log(decoded)
  res.send(`welcome ${decoded.email} DAshboard Page`)}
  catch(err){
    console.log(err)
    res.send("PLease login again")
  }
});

app.post("/signup", async (req, res) => {
  const {email, password} = req.body;
      bcrypt.hash(password, 4, function(err, hash) {
      if(err){
        res.send("something went wrong, try gaian later")
      }else{
        const signupData = new signUpModal({email, password:hash});
        signupData.save();
        res.send("registered successfully"); 
      }

  });
    
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPass = await signUpModal.findOne({email})
 
  bcrypt.compare(password, hashedPass.password, function(err, result) {
    if (result) {
      const token = jwt.sign({email:email}, "abc12345" , { expiresIn: '7h' });
      res.send(`logged in with ${email} `);
    } else {
      res.send("Failed");
    }
});
  
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log("Listening to port no 8000");
});
