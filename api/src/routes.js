const express = require("express");
const routes = express.Router();
const Code = require("./models/code");

const CodeController = require("./controllers/CodeController");



//routes.get('/', (req, res) => {
//res.render("program")
//});

routes.get("/", (request, response) => response.render("program"));



routes.get("/codes", CodeController.index); //pagina
routes.post("/", function (req, res) {
    let newCode = new Code({
        codigo: req.body.codigo,
    });
    
    newCode.save();
    res.redirect('/');


}) //salvar no db codigo

module.exports = routes;


