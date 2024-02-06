import './input.css';
import InputMask from 'react-input-mask';

// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, onChange, mask }) => {
    return (
        <div className='input-container'>
            <div className='input-wrapper'>
                <InputMask
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className='input-field'
                    mask={mask}
                />
            </div>
        </div>
    );
};

export default Input;
