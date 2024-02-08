import React from 'react';
import { useNavigate } from 'react-router-dom';
import './popup.css';

const Popup = () => {

    const navigate = useNavigate();

    const handleClosePopup = () => {
        navigate('/login');
    };

    return (
        <div className="popup-background">
            <div className="popup-content">
                <p className='popup-body'>Cadastro concluído com sucesso!</p>
                <button onClick={handleClosePopup}>Realizar Login</button>
            </div>
        </div>
    );
};

export default Popup;
