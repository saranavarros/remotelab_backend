const express = require("express");
const routes = express.Router();
const Code = require("./models/code");

const CodeController = require("./controllers/CodeController");



//routes.get('/', (req, res) => {
//res.render("program")
//});

routes.get("/program", (request, response) => response.render("program"));



routes.post("/", function (req, res) {
    let newCode = new Code({
        codigo: req.body.codigo,
    });
    if(!newCode){
        alert("Você esqueceu de escrever seu código!");
        return res.status(400).json({error: "Missing text."})
        
    }
    try{
        newCode.save();
        res.redirect('/program');
            

    }catch(err){
        res.status(400).json({error: err.message });
    }

}) //salvar no db codigo

module.exports = routes;


