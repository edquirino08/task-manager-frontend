import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../img/teste.png';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import './signup.css';

const Signup = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isButtonClickable, setIsButtonClickable] = React.useState(false);

    React.useEffect(() => {
        setIsButtonClickable(email.trim() !== '' && password.trim() !== '');
    }, [email, password]);

    const navigate = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='paper-container'>
            <form>
                <img src={LogoImg} alt='Logo' className='logo' />
                <p className='title'>
                    Seja bem-vindo! Preencha o formulário abaixo e crie sua conta.
                </p>
                <div className='inputContainer'>
                    <Input className='nameInput' type='name' value={name} onChange={handleNameChange} placeholder='Nome' />
                </div>
                <div className='inputContainer'>
                    <Input className='mailInput' type='email' value={email} onChange={handleEmailChange} placeholder='Email' />
                </div>
                <div className='inputContainer'>
                    <Input className='phoneInput' type='tel' value={phone} onChange={handlePhoneChange} placeholder='Telefone' />
                </div>
                <div className='inputContainer'>
                    <PasswordInput className='passwordInput' value={password} onChange={handlePasswordChange} placeholder='Senha' />
                </div>
                <Button
                    value={'Cadastrar'}
                    type={'submit'}
                    disabled={!isButtonClickable}
                />
                <a onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                >Voltar para login</a>
            </form>
        </div>
    );
};

export default Signup;
