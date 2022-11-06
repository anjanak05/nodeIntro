const { Router } = require("express");
const notesRouter = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { notesModal } = require("../models/notes.model");
const {authentication} = require("../middlewares/authentication.js")

notesRouter.get("/", authentication, async (req, res) => {
  let result = await notesModal.find({ Email: req.body.email });
    res.send({result});
  
});

notesRouter.post("/create", authentication ,async (req, res) => {
  
    let data = req.body;
    let result = new notesModal(data);
    await result.save();
    res.send({result});
  
});

notesRouter.patch("/:notesTitle", authentication ,async (req, res) => {
   
    const notesTitleData = req.params.notesTitle;
    console.log(req.body, notesTitleData);
    // let result = await notesModal.updateOne(
    //   { Email: req.body.email },
    //   { $set: data }
    // );

    // res.send(result);
  
});

notesRouter.delete("/:notesTitle", authentication ,async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    let emailId = decoded.email;
    let result = await notesModal.deleteOne({
      id: req.params.notesTitle,
      Email: emailId,
    });
    res.send({"msg":"notes Deleted"});
  } catch (err) {
    console.log(err);
    res.send({"msg":"PLease login again"});
  }
});

module.exports = { notesRouter };
