import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoImg from '../../img/teste.png';
import './login.css';

const Login = () => {
  const { signin } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = signin(email, password);
    console.log('res', res);

  }


  return (
    <div className='paper-container'>
      <img src={LogoImg} alt='Logo' className='logo' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' className='inputLabel' >Email</label>
        <input className='mailInput' type='email'
          value={email}
          onChange={handleEmailChange} />

        <label htmlFor='password' className='inputLabel'>Senha</label>
        <input className='passwordInput' type='password'
          value={password}
          onChange={handlePasswordChange} />

        <button className='loginButton'>Entrar</button>
      </form>

      <a href='/cadastro'>Criar uma conta</a>
      <a href='/esqueceu-a-senha'>Esqueceu a senha?</a>
    </div >
  );
}

export default Login;
