import { useState } from 'react';
import './App.css';
// No react temos uma função javascript que retorna html, esse HTML 
// é exportados  para o index.js, onde é repassado para o id root
// e renderizado.
function App() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const insereUsuario = () => {
    console.log(email + password)
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='form-login'>
              <span className='login-form-title'>Bem-Vindo!!</span>
              <div className='wrap-input'>
                <input className={email !== "" ? 'has-val input' : 'input'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <span className='focus-input' data-placeholder='Email'></span>
              </div>
              <div className='wrap-input'>
                <input className={password !== "" ? 'has-val input' : 'input'} type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <span className='focus-input' data-placeholder='Password'></span>
              </div>
              <div className='container-login-form-btn'>
                <button className='login-from-btn' onClick={insereUsuario}>Login</button>
              </div>
              <div className='text-sign-up-wrap'>
                <span className='txt-sign-up'>Não possui conta?</span>
                <a className='txt-sign-up-2' href='#'>Cadastre-se.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
