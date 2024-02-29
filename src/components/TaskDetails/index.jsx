import React from 'react';
import './taskdetails.css';

// eslint-disable-next-line react/prop-types
const TaskDetails = ({ taskDetail, onClose }) => {
    
    const popUpRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [onClose]);

    const handleClose = () => {
        onClose();
    };

    return (
        <div className='task-details-container'>
            <div className='task-details-content' ref={popUpRef}>
                <button onClick={handleClose}>Button</button>
            </div>
        </div>
    );
};

export default TaskDetails;