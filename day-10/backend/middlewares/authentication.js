const jwt = require("jsonwebtoken");
require("dotenv").config()

const authentication = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
      
      var decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.body.user_id = decoded.user_id
       
      next()
    } catch (err) {
      console.log(err);
      res.send({"msg": "PLease login again"});
    }
  };

  module.exports={authentication}