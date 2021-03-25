const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    marca: { type: String, required: true },
});



module.exports = mongoose.model('Item', ItemSchema);