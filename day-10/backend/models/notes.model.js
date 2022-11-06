const mongoose = require("mongoose");
 
const notesSchema = new mongoose.Schema({       
        Email: { type: String, required: true },
   Title: { type: String, required: true },
    Note: { type: String, required: true },


});

const notesModal = mongoose.model("note", notesSchema);

module.exports={notesModal}