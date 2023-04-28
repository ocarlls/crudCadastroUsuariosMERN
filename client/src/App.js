import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import ListUsers from "./components/ListUsers";

// No react temos uma função javascript que retorna html, esse HTML 
// é exportados  para o index.js, onde é repassado para o id root
// e renderizado.
function App() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[nome, setNome] = useState("")
  const insereUsuario = () => {
    Axios.post("http://localhost:3001/insert", {nome: nome, email: email, password: password})
  }
  // tudo do componente react deve ser renderizado em uma div só, aqui foi tudo feito dentro
  // da div App
  return (
    <div className="App">
      <div className='container'>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='form-login'>
              <span className='login-form-title'>Bem-Vindo!!</span>
              <div className='wrap-input'>
                <input className={nome !== "" ? 'has-val input' : 'input'} type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                <span className='focus-input' data-placeholder='Nome'></span>
              </div>
              <div className='wrap-input'>
                <input className={email !== "" ? 'has-val input' : 'input'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <span className='focus-input' data-placeholder='Email'></span>
              </div>
              <div className='wrap-input'>
                <input className={password !== "" ? 'has-val input' : 'input'} type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <span className='focus-input' data-placeholder='Password'></span>
              </div>
              <div className='container-login-form-btn'>
                <button className='login-from-btn' onClick={insereUsuario} href='/'>Cadastrar-se</button>
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
