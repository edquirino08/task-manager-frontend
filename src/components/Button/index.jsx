import React from 'react';
import './button.css';

const index = ({ value, type, placeholder, onChange, disabled }) => {
    return (
        <div className='button-container'>
            <div className='button-wrapper'>
                <input
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    className='button-field'
                    style={{ opacity: disabled ? 0.7 : 1,  cursor: disabled ? 'default' : 'pointer'}}
                />
            </div>
        </div>
    )
}

export default index