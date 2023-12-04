import React from 'react';
import './login.css'
import LogoImg from '../../img/teste.png'

const Login = () => {
  return (
    <div className='paper-container'>
      <img src={LogoImg} alt='Logo' className='logo' />
      <p>Conteúdo do Paper...</p>
    </div>
  )
}

export default Login