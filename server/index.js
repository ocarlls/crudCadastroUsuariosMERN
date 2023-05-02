import express from 'express';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
import {router} from './routes/userRoutes.js'
import { Usuario } from "./models/Usuario.js";
app.use(express.json())
app.use(cors())
app.use(router)

//Conectando ao banco de dados Mongo
mongoose.connect("mongodb+srv://ocarlls:03122020@crud.rzbzlye.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true
})

app.post('/insert', async (req, res)=>{
    const email = req.body.email
    const senha = req.body.password
    const nome = req.body.nome
    const usuario = new UsuarioModel({
        nome: nome,
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
// a partir da versão 7.0.0 do mongoose, não sao mais aceitas
// funções callback dentro de seus métodos
// devemos utilizar funções assícronas com try/catch
app.get('/read', async(req, res) => {
    try {
        const usuarios = await UsuarioModel.find()
        res.status(200).send(usuarios)
    } catch (err) {
        res.send(err)
    }
})


app.put('/update', async (req, res)=>{
    const novoNome = req.body.novoNome
    const id = req.body.id
    
    try {
        const usuarios = await UsuarioModel.findById(id)
        usuarios.nome = novoNome
        await usuarios.save();
    } catch (err) {
        res.send(err)
    }
})

app.delete('/delete/:id', async(req, res)=>{
    const ObjectId = mongoose.Types.ObjectId;
    id = ObjectId(req.params.id);

    res.status(200).send(id)
    await UsuarioModel.findByIdAndDelete({ _id: id }).then(console.log('funcionou'))
    .catch(console.error());
})

app.listen(3001, ()=>{
    console.log('Server rodando na porta 3001...');
})