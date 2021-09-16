const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookModel = new Schema({
  Title: { type: String, required: true },
  Author: { type: String, required: true },
  Category: { type: String, required: true },
});

module.exports = mongoose.model("books", BookModel);
