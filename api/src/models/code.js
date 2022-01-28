const mongoose = require("mongoose");

const codesSchema = {
    codigo: String,
    flag: Number
}

const Codes = mongoose.model("Codes", codesSchema);

module.exports = Codes;

//module.exports = mongoose.model("Code", codeSChema);