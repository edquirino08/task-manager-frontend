/* eslint-disable react/prop-types */
import React from 'react';
import './changepass.css';
import LoadingSpinner from '../LoadingSpinner';
import api from '../../services/Api';
import { useNavigate } from 'react-router-dom';

const ChangePassPopUp = ({ onClose }) => {
    const [email, setEmail] = React.useState('');
    const [loadPage, setLoadPage] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [errorMessageChangePass, setErrorMessageChangePass] = React.useState(false);
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setErrorMessageChangePass(false);
    };

    const handleChangePass = async () => {
        setLoadPage(true);
        try {
            await api.post('/sendNewPassword', { email: email });
            setLoadPage(false);
            navigate('/login');
        } catch (err) {
            setLoadPage(false);
            const { error } = err.response.data;
            if (error === '1') {
                setErrorMessage('Erro! Email não cadastrado.');
            } else if (error === '2') {
                setErrorMessage('Erro! E-mail não verificado.');
            } else {
                setErrorMessage('Não foi possível processar sua requisição. Por favor, entre em contato com o Suporte.');
            }
            setErrorMessageChangePass(true);
        }
    };

    const handleClickOutside = (e) => {
        if (!e.target.closest('.pop-up-content')) {
            onClose();
        }
    };

    const isEmailInvalid = !emailRegex.test(email);

    return (
        <div className='pop-up-container' onClick={handleClickOutside}>
            <div className='pop-up-content'>
                <h2>Receber nova senha</h2>
                <p>Preencha o campo abaixo com seu e-mail para receber sua nova senha.</p>
                <input
                    className='mail-put'
                    placeholder='Digite seu e-mail...'
                    onChange={handleChangeEmail} />

                {loadPage && <LoadingSpinner />}
                {errorMessageChangePass && <a className='error-message'>{errorMessage}</a>}
                <button className='pass-button'
                    onClick={handleChangePass}
                    disabled={isEmailInvalid}>Enviar senha</button>
            </div>
        </div>
    );
};

export default ChangePassPopUp;
