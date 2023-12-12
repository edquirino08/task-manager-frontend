// index.jsx
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../components/PrivateRoute/privateRoute';

const index = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/dashboard' element={<PrivateRoute Item={Dashboard} />} />
                    <Route path='*' element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default index;
