import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isButtonClickable, setIsButtonClickable] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (signed) {
      navigate('/dashboard');
    }
  }, [signed, navigate]);

  useEffect(() => {
    setIsButtonClickable(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

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
    const userData = await signin(email, password);
    if (userData) {
      navigate('/dashboard', { state: { userData } });
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
        <Button
          value={'Entrar'}
          type={'submit'}
          disabled={!isButtonClickable}
          className='login-button'
        />
        <a onClick={() => navigate('/signup')}
          style={{ cursor: 'pointer' }}
        >Criar nova conta</a>
      </form >
    </div >
  );
};

export default Login;
