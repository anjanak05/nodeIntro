const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const signUpModal = mongoose.model("signup", signupSchema);

module.exports={signUpModal}