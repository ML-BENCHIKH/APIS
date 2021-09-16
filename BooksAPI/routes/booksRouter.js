const BooksRouter = require("express").Router();
const BooksModel = require("../Models/booksModel");

BooksRouter.route("/")
  .get((req, res) => {
    BooksModel.find({}, (err, books) => {
      if (err) res.sendStatus(404).json({ msg: "Books not found !!" });
      else res.status(200).json(books);
    });
  })
  .post((req, res) => {
    let book = new BooksModel(req.body);
    book.save();
    res.status(201).json(book);
  });
BooksRouter.route("/:BookId")
  .put((req, res) => {
    BooksModel.findById(req.params.BookId, (err, book) => {
      if (err) {
        res.sendStatus(404).json({ msg: "Book not found !!" });
      } else {
        book.Title = req.body.Title === undefined ? book.Title : req.body.Title;
        book.Author =
          req.body.Author === undefined ? book.Author : req.body.Author;
        book.Category =
          req.body.Category === undefined ? book.Category : req.body.Category;
        book.save();
        res.status(200).json(book);
      }
    });
  })
  .delete((req, res) => {
    BooksModel.findById(req.params.BookId, (req, book) => {
      book.remove((err) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(204).send("Book removed");
        }
      });
    });
  });
module.exports = BooksRouter;
