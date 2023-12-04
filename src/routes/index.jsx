import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Login />
}

const index = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default index