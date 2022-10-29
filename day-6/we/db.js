const mongoose = require("mongoose");

let connection = mongoose.connect("mongodb://127.0.0.1:27017/web19")

let movieSchema = mongoose.Schema({
  age :Number,
backdropPath: String,
backdropURLs:Object,
cast: Array,
countries: Array,
genres: Array,
imdbID: String,
imdbRating: Number,
imdbVoteCount: Number,
originalTitle: String,
overview:String,
posterPath: String,
posterURLs: Object
})


let movieModel = mongoose.model("movie", movieSchema)

module.exports={
  connection, movieModel
}



