/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './textarea.css';

const TextArea = ({ value, onChange, maxLength }) => {
    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= maxLength) {
            onChange(inputValue);
        }
    };

    return (
        <div className="textarea-container">
            <div className="textarea-wrapper">
                <textarea
                    className="textarea-field"
                    value={value}
                    onChange={handleChange}
                    maxLength={maxLength}
                    placeholder="Digite a descrição da tarefa (opcional)"
                />
            </div>
            <div className="character-count">
                {value.length}/{maxLength} caracteres
            </div>
        </div>
    );
};

export default TextArea;
