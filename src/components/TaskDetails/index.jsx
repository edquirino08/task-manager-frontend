import React from 'react';
import './taskdetails.css';
import TextArea from '../TextArea';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt';
import api from '../../services/Api';
import LoadingSpinner from '../LoadingSpinner';

// eslint-disable-next-line react/prop-types
const TaskDetails = ({ taskDetail, onClose }) => {

    const popUpRef = React.useRef(null);
    const task = taskDetail;
    const idTask = task.id;
    const [description, setDescription] = React.useState(task.description);
    const [priority, setPriority] = React.useState(task.priority);
    const [status, setStatus] = React.useState(task.status);
    const dateCreate = format(new Date(task.date_create), 'dd/MM/yyyy HH:mm');
    const statusDate = format(new Date(task.status_date), 'dd/MM/yyyy HH:mm');
    const dateEnd = task.date_end == undefined ? 'Sem vencimento' : format(new Date(task.date_end), 'dd/MM/yyyy HH:mm');
    const [selectedDateTime, setSelectedDateTime] = React.useState(task.date_end == undefined ? null : task.date_end);
    const [showError, setShowError] = React.useState(true);
    const [error, setError] = React.useState('');
    const [isReloading, setIsReloading] = React.useState(false);

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

    const handleChangeDescription = (value) => {
        setShowError(false);
        setDescription(value);
    }

    const handleChangePriority = (e) => {
        setShowError(false);
        setPriority(e.target.value);
    };

    const handleChangeStatus = (e) => {
        setShowError(false);
        setStatus(e.target.value);
    };

    const handleChangeDateTime = (date) => {
        setShowError(false);
        setSelectedDateTime(date);
    };

    const handleEditTask = async () => {
        setIsReloading(true);
        const task = {
            id: idTask,
            description: description,
            status: status,
            priority: priority,
            date_end: selectedDateTime
        }

        try {
            await api.put('/editTask', task);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            setIsReloading(false);
            setShowError(true);
            setError('Erro ao editar tarefa.')
        }


    };


    return (
        <div className='task-details-container'>
            <div className='task-details-content' ref={popUpRef}>
                <h2>Detalhes da tarefa</h2>
                <p className='subtitle'>Modifique os dados abaixo para editar sua tarefa.</p>
                <label className='label-name'>Nome</label>
                <input
                    placeholder={task.task}
                    disabled={true}
                    className='task-name' />

                <label className='label-description'>Descrição</label>
                <TextArea
                    value={description == undefined ? 'Sem descrição' : description}
                    onChange={handleChangeDescription}
                    maxLength={255}
                    className='text-area' />
                <div className="select-container">
                    <label className='priority-label'> Prioridade</label>
                    <select
                        onChange={handleChangePriority}
                        value={priority}
                        className='priority'
                    >
                        <option value={0}>Sem prioridade</option>
                        <option value={1}>Baixa</option>
                        <option value={2}>Média</option>
                        <option value={3}>Alta</option>
                    </select>

                    <label className='priority-label'> Status</label>
                    <select
                        onChange={handleChangeStatus}
                        value={status}
                        className='priority'
                    >
                        <option value={0}>Pendente</option>
                        <option value={1}>Em andamento</option>
                        <option value={2}>Concluída</option>
                    </select>
                </div>

                <label className='label-date'>Data criação</label>
                <input
                    placeholder={dateCreate}
                    disabled={true}
                />

                <label className='label-date'>Última modificação</label>
                <input
                    placeholder={statusDate}
                    disabled={true}
                />

                <label className='label-date'>Vencimento</label>
                <DatePicker
                    selected={selectedDateTime}
                    onChange={handleChangeDateTime}
                    dateFormat="dd/MM/yyyy HH:mm"
                    placeholderText={dateEnd}
                    locale={pt}
                    showTimeInput
                    timeInputLabel="Hora:"
                    className='date-picker'
                />

                <div className='buttons-container'>
                    <button className='cancel' onClick={handleClose}>Cancelar</button>
                    <button className='cancel' onClick={handleEditTask}>Salvar</button>
                    {isReloading && <LoadingSpinner />}
                </div>

                {showError && <a className='edit-error'>{error}</a>}

            </div>
        </div>
    );
};

export default TaskDetails;
