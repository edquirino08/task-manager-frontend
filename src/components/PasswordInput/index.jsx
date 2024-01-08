import React from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './passwordinput.css';

// eslint-disable-next-line react/prop-types
const PasswordInput = ({ placeholder, value, onChange }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className='input-container'>
            <div className='input-wrapper'>
                <input
                    value={value}
                    type={visible ? 'text' : 'password'}
                    placeholder={placeholder || 'Digite sua senha'}
                    id='password'
                    onChange={onChange}
                    className='input-field'
                />
                <div className='password-icon' onClick={() => setVisible(!visible)}>
                    {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;
