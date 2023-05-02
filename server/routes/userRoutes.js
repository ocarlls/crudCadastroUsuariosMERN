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
    
})

router.delete('/update', async (req, res)=>{

})

export {router}