require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase();

const port = 3040;

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(port, () =>{
    console.log(`Backend started at http://localhost:${port}`);
});
