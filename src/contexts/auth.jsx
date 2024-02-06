import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import api from '../services/api';

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
            const access = await api.post('/login', { email, password });
            const token = access.data.token;
            const userData = { email, token };
            localStorage.setItem('user_token', JSON.stringify(userData));
            setUser(userData);
            return access.data;
        } catch {
            return false;
        }
    };


    const signup = async (name, email, telephone, password) => {
        try {
            console.log('email:', email);
            console.log('password:', password);
            console.log('name:', name);
            console.log('phone:', telephone);
            await api.post('/signup', { email, password, nameUser: name, telephone });
            return true;
        } catch (err) {
            console.log(err);
            return false;
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