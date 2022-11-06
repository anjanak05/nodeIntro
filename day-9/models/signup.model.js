const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String,  enum :["customer"], default:"customer" },

});

const signUpModal = mongoose.model("signup", signupSchema);

module.exports={signUpModal}