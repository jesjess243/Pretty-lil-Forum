// app.js: root
const env = require("dotenv").config();
const express = require("express");
const path = require("node:path");
const pg = require("pg");

const app = express();
const indexRouter = require("./routes/indexRouter");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // express.js

app.use(express.static(__dirname)); // begin serving static files 
app.use(express.urlencoded({ extended: true })); // begin recognizing requests as strings (encoded)
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});