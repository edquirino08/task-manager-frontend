import './input.css';

// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <div className='input-container'>
            <div className='input-wrapper'>
                <input
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className='input-field'
                />
            </div>
        </div>
    );
};

export default Input;
