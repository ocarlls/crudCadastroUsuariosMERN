const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())
const UsuarioModel = require("./models/Usuario");
//Conectando ao banco de dados Mongo
mongoose.connect("mongodb+srv://ocarlls:03122020@crud.rzbzlye.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true
})

app.post("/insert", async (req, res)=>{
    const email = req.body.email
    const senha = req.body.password
    const usuario = new UsuarioModel({
        email: email,
        senha: senha
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