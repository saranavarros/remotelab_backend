const {response} = require("express");
const Code = require("../models/code");

module.exports = {
   async index(request, response){
        try{
            const codes = await Code.find();
            return response.status(200).json({codes});
        } catch(err){
            response.status(500).json({error: err.message});
        }
    },


    async store(request, response){
        let newCode = new Code({
                    codigo: req.body.codigo,
              });
               newCode.save();
               res.redirect('/');
        if(!newCode){
            alert("Você esqueceu de escrever seu código!");
            return response.status(400).json({error: "Missing text."})
            
        }

        try{
            await Code.create(newCode);
            return response.status(201).json({message: "Code added succesfully"});

        }catch(err){
            response.status(400).json({error: err.message });
        }

    },
};

//body eh o corpo da requisição
//gerenciar as atividades do cliente