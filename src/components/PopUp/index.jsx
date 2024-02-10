// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './popup.css';

// eslint-disable-next-line react/prop-types
const Popup = ({ email }) => {
    const navigate = useNavigate();

    const handleClosePopup = () => {
        navigate('/login');
    };

    return (
        <div className="popup-background">
            <div className="popup-content">
                <h1 className='popup-heading'>Verificação de E-mail</h1>
                <p>Foi enviado um e-mail para <strong>{email}</strong>.</p>
                <p>Por favor, verifique seu e-mail para confirmar sua conta.</p>
                <p>Após a verificação, você poderá fazer login.</p>
                <button onClick={handleClosePopup}>Fazer Login</button>
            </div>
        </div>
    );
};

export default Popup;
