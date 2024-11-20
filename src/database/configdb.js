const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:LSiLYWE7s0QUFU67@cluster0.ng8zg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco de dados!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do banco de dados!');
  });

mongoose.Promise = global.Promise; 
  
module.exports = mongoose;