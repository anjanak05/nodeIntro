const express = require("express");
const { connection } = require("./config/db.js");
const { signUpModal } = require("./models/signup.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

const authentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = jwt.verify(token, "abc12345");
    req.body.email = decoded.email
    next();
  } catch (err) {
    console.log(err);
    res.send("PLease login again");
  }
};

const authorization = async(req, res, next) => {
    const emailAuthorization = req.body.email
    let user = await signUpModal.findOne({email: emailAuthorization})
    console.log(user.role)
    if(user.role==="seller") {
 
      next();
    } else  {
         res.send("PLease login again");
    }
  };

app.get("/products", authentication ,(req, res) => {
  res.send(`welcome ${req.body.email} DAshboard Page`);
});

app.get("/products/create", authentication , authorization,  (req, res) => {
    res.send(`welcome to seller Page`);
  });
  

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 4, function (err, hash) {
    if (err) {
      res.send("something went wrong, try gaian later");
    } else {
      const signupData = new signUpModal({ email, password: hash });
      signupData.save();
      res.send("registered successfully");
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPass = await signUpModal.findOne({ email });

  bcrypt.compare(password, hashedPass.password, function (err, result) {
    if (result) {
      const token = jwt.sign({ email: email }, "abc12345", { expiresIn: "7h" });
      res.send(`logged in with ${email} and ${token}`);
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
