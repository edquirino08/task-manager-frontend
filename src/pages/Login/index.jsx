import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import './login.css';

const Login = () => {
  const { signin, signed } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [errorContent, setErrorContent] = useState('');
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
    const response = await signin(email, password);
    if (response.access) {
      const userData = response.data;
      navigate('/dashboard', { state: { userData } });
    } else {
      switch (response.error) {
        case '0':
          setErrorContent('Erro ao processar sua requisição.');
          break;

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
        <a onClick={() => navigate('/signup')}
          style={{ cursor: 'pointer' }}
        >Criar nova conta</a>
      </form >
    </div >
  );
};

export default Login;
