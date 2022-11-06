const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum:["IA"], default:"IA"},

});

const signUpModal = mongoose.model("signup", signupSchema);

module.exports={signUpModal}