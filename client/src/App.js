import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import ListUsers from "./components/ListUsers.js";

// No react temos uma função javascript que retorna html, esse HTML 
// é exportados  para o index.js, onde é repassado para o id root
// e renderizado.
function App() {
  const[usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });
 
  // tudo do componente react deve ser renderizado em uma div só, aqui foi tudo feito dentro
  // da div App

  const handleChange = (event)=>{
    const{name, value} = event.target;
    setUsuario({...usuario, [name]: value});
  }

  const cadastrar = ()=>{
    Axios.post("http://localhost:3001/inserir", {
      usuario
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='form-login'>
              <span className='login-form-title'>Bem-Vindo!!</span>
              <div className='wrap-input'>
                <input id='nome' type='text' name='nome' onChange={handleChange}/>
                <span className='focus-input' data-placeholder='Nome'></span>
              </div>
              <div className='wrap-input'>
                <input id='email' type='email' name='email' onChange={handleChange}/>
                <span className='focus-input' data-placeholder='Email'></span>
              </div>
              <div className='wrap-input'>
                <input id='senha' type='text' name='senha' onChange={handleChange}/>
                <span className='focus-input' data-placeholder='Password'></span>
              </div>
              <div className='container-login-form-btn'>
                <button className='login-from-btn' onClick={cadastrar} href='/'>Cadastrar-se</button>
              </div>
              <div className='text-sign-up-wrap'>
                <span className='txt-sign-up'>Já possui conta?</span>
                <a className='txt-sign-up-2' href='/insert'>Login</a>
              </div>
            </form>
            
          </div>
        </div>
      </div>
      <ListUsers/>
    </div>
  );
}

export default App;
