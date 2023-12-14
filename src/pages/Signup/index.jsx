import React from 'react';
import LogoImg from '../../img/teste.png';
import './signup.css';

const Signup = () => {
    return (
        <div className='paper-container'>
            <img src={LogoImg} alt='Logo' className='logo' />
            <p className='title'>
                Seja bem-vindo! Para começar a desfrutar de todas as funcionalidades, preencha o formulário abaixo e crie sua conta.
            </p>
        </div>
    );
};

export default Signup;