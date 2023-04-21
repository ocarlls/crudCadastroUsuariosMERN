const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://ocarlls:03122020@crud.rzbzlye.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})


app.listen(3001, ()=>{
    console.log('Server rodando na porta 3001...');
})