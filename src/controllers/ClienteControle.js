const express = require("express");

const UserModel = require('../models/clienteModel');
const { error } = require("console");

const router = express.Router();
//Metodo para incluir novos clientes
router.post('/cliente', async (req, res)=>{
    const {cpf} = req.body;
    //--Valida se CPF ja existe na base de dados
    if (await UserModel.findOne({cpf})){
        return res.status(400).json({message: "Cpf Ja cadastrado"});
    }
    const newCliente = new UserModel(req.body);
    await newCliente.save();
    res.status(200).json({message:"Cliente includo com sucesso",newCliente});
})
//--Metodo para retornar toda lista de produto
router.get('/cliente', async(req, res)=>{
    const newCliente =  await UserModel.find() 
    res.status(200).json({newCliente});
})
//--Metodo para atualizar os dados de um cliente
router.put('/cliente/:id', async (req, res) => {
    const newCliente = await UserModel.findByIdAndUpdate(req.params.id,{
      endereco : req.body.endereco,
      estado   : req.body.estado,
    })
    return res.status(200).json({message:'Cliente Atualizado com sucesso!!'});
})
//--Metodo para detelar um determinado cliente
router.delete('/cliente/:id', async (req, res) => {
    const newCliente = await UserModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'Cliente deletado com sucesso'})
})
//--Metodo para retonar a quantidade de clientes existentes
router.get('/cliente/count', async (req, res) => {
    const nCont = await UserModel.countDocuments({});
    res.status(200).json({message:`Numero total de registros ${nCont}`})
})
//--Metodo para retornar um determinado cliente
router.get('/cliente/:id', async (req, res) => {
    const newCliente = await UserModel.findById(req.params.id)
    res.status(200).json({message:newCliente})
})
//--Metodo para retornar um determinado cliente pelo nome
router.get('/cliente/nome/:id', async (req, res) => {
    //const newCliente = await UserModel.findById(req.params.id)
    const newCliente = await UserModel.find({ nome: { $in: req.params.id } });
    res.status(200).json({message:newCliente})
})

module.exports = router;