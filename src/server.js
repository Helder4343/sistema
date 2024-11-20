const express = require('express');
const ClienteControle = require('./controllers/ClienteControle');

const app = express();
app.use(express.json());
app.use('/api',ClienteControle)

app.listen(3000,()=>{
    console.log("Aplicação funcionando");
})