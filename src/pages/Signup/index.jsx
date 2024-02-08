import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Popup from '../../components/PopUp';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import './signup.css';

const Signup = () => {
    const { signup } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonClickable, setIsButtonClickable] = useState(false);
    const [showErrorSignup, setShowErrorSignup] = useState(false);
    const [errorSignup, setErrorSignup] = useState('');
    const [popUpSuccess, setPopUpSuccess] = useState(false);

    React.useEffect(() => {
        setIsButtonClickable(email.trim() !== '' && password.trim() !== '' && phone.trim() !== '' && name.trim() !== '');
    }, [email, password, phone, name]);

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowErrorSignup(false);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setShowErrorSignup(false);
    }

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value.replace(/[^\d]/g, '');
        setPhone(phoneValue);
        setShowErrorSignup(false);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowErrorSignup(false);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await signup(name, email, phone, password);
        if (response.success) {
            setPopUpSuccess(true);
        } else {
            setShowErrorSignup(true);
            setErrorSignup(response.message);
        }
    };

    return (
        <div className='paper-container'>
            <form onSubmit={handleSignup}>
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
                    <Input className='phoneInput' type='tel' value={phone} onChange={handlePhoneChange} placeholder='Telefone' mask='(99) 99999-9999' />
                </div>
                <div className='inputContainer'>
                    <PasswordInput className='passwordInput' value={password} onChange={handlePasswordChange} placeholder='Senha' />
                </div>
                {showErrorSignup && <a className='error-signup'>{errorSignup}</a>}
                {true && (<Popup />)}
                <Button
                    value={'Cadastrar'}
                    type={'submit'}
                    disabled={!isButtonClickable}
                />
                <a onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Voltar para login</a>
            </form>
        </div>
    );
};

export default Signup;
