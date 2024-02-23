import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import LoadingSpinner from '../../components/LoadingSpinner';
import ChangePassPopUp from '../../components/ChangePassPopUp';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [errorContent, setErrorContent] = useState('');
  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopUpPassowrd, setShowPopUpPassword] = useState(false);

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
    setLoading(true);
    e.preventDefault();
    const response = await signin(email, password);
    if (response.access) {
      localStorage.setItem('userData', JSON.stringify(response.data));
      navigate('/dashboard');
    } else {
      setLoading(false);
      switch (response.error) {
        case '1':
        case '2':
          setErrorContent('Credenciais inválidas.');
          break;

        case '3':
          setErrorContent('Verificação de e-mail pendente.');
          break;
      }
      setLoginError(true);
    }
  };

  const handleForgotPassword = () => {
    setShowPopUpPassword(true);
  };

  const handleClosePopUp = () => {
    setShowPopUpPassword(false);
  }

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
        {loginError && <a className='login-error'>{errorContent}</a>}
        <Button
          value={'Entrar'}
          type={'submit'}
          disabled={!isButtonClickable}
          className='login-button'
        />
        {loading && <LoadingSpinner />}
        <a onClick={() => navigate('/signup')}
          style={{ cursor: 'pointer' }}
        >Criar nova conta</a>

        {showPopUpPassowrd && <ChangePassPopUp onClose={handleClosePopUp} />}
        <a onClick={handleForgotPassword}
          style={{ cursor: 'pointer' }}
        >Esqueceu a senha?</a>
      </form >
    </div >
  );
};

export default Login;
