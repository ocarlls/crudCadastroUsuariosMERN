const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
const UsuarioModel = require("./models/Usuario");
//Conectando ao banco de dados Mongo
mongoose.connect("mongodb+srv://ocarlls:03122020@crud.rzbzlye.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true
})

app.get('/', async (req, res)=>{
    const usuario = new UsuarioModel({
        nome: 'Carlos',
        login: 'ocarlls',
        email: 'carlin@gmail.com'
    });
    try{
        await usuario.save();
        res.send('Usuario salvo com sucesso...');
    } catch(err){
        console.log('Erro ao salvar ' + err)
    }
})

app.listen(3001, ()=>{
    console.log('Server rodando na porta 3001...');
})