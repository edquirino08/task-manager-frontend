import React, { useRef } from 'react';
import './newtask.css';
import TextArea from '../TextArea';
// eslint-disable-next-line react/prop-types
const NewTask = ({ onClose }) => {
    const [taskName, setTaskName] = React.useState('');
    const popUpRef = useRef(null);
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (popUpRef.current && !popUpRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleChangeName = (e) => {
        setTaskName(e.target.value);
    };

    const handleChangeDescription = (value) => {
        setDescription(value);
    };

    return (
        <div className='new-task-container'>
            <div ref={popUpRef} className='pop-up-content'>
                <div className='title-container'>
                    <h2>Nova Tarefa</h2>
                    <p>Preencha os dados abaixo para criar uma nova tarefa</p>
                </div>
                <input
                    placeholder={'Digite o nome da tarefa'}
                    className='task-name-input'
                    onChange={handleChangeName} />
                <TextArea
                    value={description}
                    onChange={handleChangeDescription}
                    maxLength={255}
                    className='text-area' />
                <input
                    placeholder={'Selecione a prioridade da tarefa'}
                    className='task-name-input'
                    onChange={handleChangeName}
                />
            </div>
        </div>
    )
}

export default NewTask;
