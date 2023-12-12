import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoImg from '../../img/teste.png';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (signed) {
      navigate('/dashboard');
    }
  }, [signed, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signin(email, password);
    if (res) {
      navigate('/dashboard');
    }

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
