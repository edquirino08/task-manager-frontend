import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import api from '../services/Api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        if (userToken) {
            setUser(JSON.parse(userToken));
        }
    }, [])

    const signin = async (email, password) => {
        try {
            const response = await api.post('/login', { email, password });
            const token = response.data.token;
            const userData = { email, token };
            localStorage.setItem('user_token', JSON.stringify(userData));
            setUser(userData);
            return { access: true, data: response.data };
        } catch (err) {
            let error = '0';
            if (err.response.data.error) {
                error = err.response.data.error;
            }
            return { access: false, error };
        }
    };


    const signup = async (name, email, telephone, password) => {
        try {
            if (!name || !email || !telephone || !password) {
                throw new Error("Todos os campos são obrigatórios.");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error("Email inválido.");
            }
            const phoneRegex = /^\d{11}$/;
            if (!phoneRegex.test(telephone)) {
                throw new Error("Telefone inválido.");
            }

            const response = await api.post('/signup', { email, password, nameUser: name, telephone });
            const { token } = response.data
            return { success: true, token };

        } catch (error) {

            let errorMessage = '';
            if (error.response && error.response.data && error.response.data.error) {
                errorMessage = "E-mail já registrado.";
            } else if (error.message) {
                errorMessage = error.message;
            }
            return { success: false, message: errorMessage };
        }
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};