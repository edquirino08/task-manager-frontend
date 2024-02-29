import React from 'react';
import './taskdetails.css';
import TextArea from '../TextArea';

// eslint-disable-next-line react/prop-types
const TaskDetails = ({ taskDetail, onClose }) => {

    const popUpRef = React.useRef(null);
    const task = taskDetail;

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
        console.log('Olha os detalhes da tarefa', taskDetail);
        onClose();
    };

    const handleChangeDescription = () => {

    }

    return (
        <div className='task-details-container'>
            <div className='task-details-content' ref={popUpRef}>
                <h2>Detalhes da tarefa</h2>
                <p className='subtitle'>Modifique os dados abaixo para editar sua tarefa.</p>
                <input placeholder={task.task} disabled={true} className='task-name'></input>
                <TextArea
                    value={task.description == undefined ? 'Sem descrição' : task.description}
                    onChange={handleChangeDescription}
                    maxLength={255}
                    className='text-area' />


                <div className='buttons-container'>
                    <button className='cancel' onClick={handleClose}>Cancelar</button>
                </div>

            </div>
        </div>
    );
};

export default TaskDetails;
