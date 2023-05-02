import mongoose from 'mongoose';

// Definindo o model das informações de um usuario
// a "tabela" que será criada
const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
});

//Definindo a collection "Database" que irá armazenar usuario
export const Usuario = mongoose.model("UserInfos", UsuarioSchema)