import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signin(email, password);
    if (res) {
      navigate('/dashboard');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <img src={LogoImg} alt='Logo' className='logo' />

        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleEmailChange}
          type='email'
        />
        <PasswordInput
          onChange={handlePasswordChange} />
        {loginError && <a className='login-error'>Erro! Verifique suas credenciais.</a>}
        <button type='submit'>Entrar</button>
      </form >
    </div >
  );
};

export default Login;
