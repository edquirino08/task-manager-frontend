import React from 'react';
import LogoImg from '../../img/teste.png';
import './signup.css';

const Signup = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }


    return (
        <div className='paper-container'>
            <img src={LogoImg} alt='Logo' className='logo' />
            <form >
                <p className='title'>
                    Seja bem-vindo! Preencha o formulário abaixo e crie sua conta.
                </p>
                <label htmlFor='name' className='inputLabel' >Nome</label>
                <input className='nameInput' type='name'
                    value={name}
                    onChange={handleNameChange} />
                <label htmlFor='email' className='inputLabel' >Email</label>
                <input className='mailInput' type='email'
                    value={email}
                    onChange={handleEmailChange} />

                <label htmlFor='password' className='inputLabel'>Senha</label>
                <input className='passwordInput' type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange} />
            </form >
        </div>
    );
};

export default Signup;