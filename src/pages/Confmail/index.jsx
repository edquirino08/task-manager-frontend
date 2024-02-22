import LogoImg from '../../img/teste.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api';
import React from 'react';
import './confmail.css';


const Confmail = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                await api.get('/verifyEmail', {
                    params: {
                        token: token
                    }
                });
                setMessage('Verificação de e-mail concluída!');
            } catch (error) {
                setMessage('Erro ao confirmar e-mail. Entre em contato com o suporte.');
            }
        };
        fetchUserData();
    }, [token]);

    return (
        <div className='container'>
            <form>
                <img src={LogoImg} alt='Logo' className='logo' />
                <p>{message}</p>
                <a onClick={() => navigate('/login')}
                    style={{ cursor: 'pointer' }}
                >Voltar para login</a>
            </form>
        </div>
    )
}

export default Confmail;