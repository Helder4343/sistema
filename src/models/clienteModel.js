const mongoose = require('../database/configdb');

const clienteSchema = new mongoose.Schema({
    nome: String,
    estado: String,
    endereco: String,
    cpf: String,
  });

const Cliente = mongoose.model('Cliente', clienteSchema);
  
module.exports = Cliente;
  