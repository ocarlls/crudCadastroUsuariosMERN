import express from "express";
import { Usuario } from "../models/Usuario.js";
const router = express.Router()


router.get('/', async(req, res)=>{
    try {
        const response = await Usuario.find({})
        res.json(response);
    } catch (err) {
        res.json(err);
    }
    
})

router.post('/insert', async (req, res)=>{
    const user = new Usuario(req.body);
    try {
        const response = await user.save()
        res.json(response);
    } catch (err) {
        res.json(err);
    }
})

router.put('/update', async (req, res)=>{
    const novoNome = req.body.novoNome;
    await Usuario.findById(req.body.id, (err, updatedUser)=>{
        updatedUser.nome = novoNome;
        updatedUser.save();
        res.send("Name Updated!");
    })
})

router.delete('/delete/:id', async (req, res)=>{

})

export {router}