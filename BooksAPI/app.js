//Packages requires
const express = require("express");
const logger = require("morgan");
//Routes requires
const booksRouter = require("./routes/booksRouter");
//Detenv file configuration
require("dotenv").config({ path: "./config/.env" });
//Database MongoDB Connection
require("./config/Mongodb");
const app = express();
// Config Uses
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running !");
});
// Routes uses with /api/books/ endpoint
app.use("/api/books/", booksRouter);
