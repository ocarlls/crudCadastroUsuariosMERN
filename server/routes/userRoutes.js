import express from "express";
import { Usuario } from "../models/Usuario.js";
const router = express.Router()

router.post('/insert', async (req, res)=>{
    const {nome, email, senha} = req.body;

    const user = await Usuario.findOne({nome})
 
    res.json(user);
})



export {router}