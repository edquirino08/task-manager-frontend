import React, { useRef } from 'react';
import './newtask.css';
import TextArea from '../TextArea';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
// eslint-disable-next-line react/prop-types
const NewTask = ({ onClose }) => {
    const [taskName, setTaskName] = React.useState('');
    const popUpRef = useRef(null);
    const [description, setDescription] = React.useState('');
    const [priority, setPriority] = React.useState(0);
    const [status, setStatus] = React.useState(-1);
    const [selectedDateTime, setSelectedDateTime] = React.useState(null);


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

    const handleChangePriority = (e) => {
        const newPriority = e.target.value;
        setPriority(newPriority);
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    };

    React.useEffect(() => {
        console.log('Olha a prioridade', priority);
    }, [priority]);


    const handleChangeDateTime = (date) => {
        setSelectedDateTime(date);
    };

    const handleClose = () => {
        onClose();
    }

    return (
        <div className='new-task-container'>
            <div ref={popUpRef} className='pop-up-content'>
                <div className='title-container'>
                    <h2>Nova Tarefa</h2>
                    <p>Preencha os dados abaixo para criar uma nova tarefa</p>
                </div>
                <input
                    placeholder={'Digite o nome da tarefa *'}
                    className='task-name-input'
                    onChange={handleChangeName} />
                <TextArea
                    value={description}
                    onChange={handleChangeDescription}
                    maxLength={255}
                    className='text-area' />
                <select
                    onChange={handleChangePriority}
                    value={priority}
                >
                    <option value={0} disabled hidden>Selecione a prioridade da tarefa (opcional)</option>
                    <option value={0}>Sem prioridade</option>
                    <option value={1}>Baixa</option>
                    <option value={2}>Média</option>
                    <option value={3}>Alta</option>
                </select>

                <select
                    onChange={handleChangeStatus}
                    value={status}
                >
                    <option value={-1} >Selecione a status da tarefa *</option>
                    <option value={0}>Pendente</option>
                    <option value={1}>Em andamento</option>
                    <option value={2}>Concluída</option>
                </select>
                <DatePicker
                    selected={selectedDateTime}
                    onChange={handleChangeDateTime}
                    dateFormat="dd/MM/yyyy HH:mm"
                    placeholderText="Selecione o vencimento da tarefa (opcional)"
                    locale={pt}
                    showTimeInput
                    timeInputLabel="Hora:"
                    className='date-picker'
                />
                <div className='buttons-container'>
                    <button className='cancel' onClick={handleClose}>Cancelar</button>
                    <button className='create-task'>Criar tarefa</button>

                </div>
            </div>
        </div>
    )
}

export default NewTask;
