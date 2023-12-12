import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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


    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_bd'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return 'Já tem uma conta com esse E-mail';
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem('users_bd', JSON.stringify(newUser));

        return;
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