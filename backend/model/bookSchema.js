const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    "title": { type: String },
    "author": { type: String },
    "genre": { type: String },
    "id": { type: String }
}, {
    collection: "Books"
})

module.exports = mongoose.model("bookSchema",bookSchema);