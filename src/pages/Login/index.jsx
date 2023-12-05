import React from 'react';
import './login.css';
import LogoImg from '../../img/teste.png';

const Login = () => {
  return (
    <div className='paper-container'>
      <img src={LogoImg} alt='Logo' className='logo' />

      <label htmlFor='email' className='inputLabel'>Email</label>
      <input className='mailInput' />

      <label htmlFor='password' className='inputLabel'>Senha</label>
      <input className='passwordInput' />

      <button>Entrar</button>

      <a href='/cadastro'>Criar uma conta</a>
      <a href='/esqueceu-a-senha'>Esqueceu a senha?</a>
    </div>
  );
}

export default Login;
