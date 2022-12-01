const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config({path:'./config.env'});
// app.use(express.static("public"));

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("connection successful");
}).catch((err) => console.log(err));


app.use(require('./router/auth'));
app.use(require('./router/appointment'));



app.listen(8000, function() {
  console.log("Server started on port 8000");
});