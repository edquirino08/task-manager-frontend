import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoImg from '../../img/teste.png';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (signed) {
      navigate('/dashboard');
    }
  }, [signed, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(false);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signin(email, password);
    if (res) {
      navigate('/dashboard');
    } else {
      setLoginError(true);
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
        <input className='passwordInput' type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange} />

        <div className='showPasswordContainer'>
          <input type='checkbox' id='showPasswordCheckbox' onClick={togglePasswordVisibility} />
          <label htmlFor='showPasswordCheckbox' className='inputLabelShowPassword'>Mostrar senha</label>
        </div>

        <button className='loginButton'>Entrar</button>
      </form>
      {loginError && <a className='login-error'>Erro! Verifique suas credenciais.</a>}
      <a href='/signup'>Criar uma conta</a>
      <a href='/esqueceu-a-senha'>Esqueceu a senha?</a>
    </div >
  );
}

export default Login;
