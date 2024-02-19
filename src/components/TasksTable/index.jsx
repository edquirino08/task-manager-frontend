import React from 'react';
import api from '../../services/Api';
import Search from '../Search';
import './taskstable.css';
import { BsCircleFill } from 'react-icons/bs';
import { format } from 'date-fns';

const TasksTable = () => {
    const [tasks, setTasks] = React.useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        if (userData) {
            handleListTasks();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        console.log('Olha as tasks', tasks);
    }, [tasks]);

    const handleListTasks = async () => {
        try {
            api.defaults.headers.common['token'] = userData.token;
            const response = await api.get('/listTasks');
            setTasks(response.data.tasks);
        } catch (error) {
            console.log('Erro ao listar tarefas:', error);
        }
    };

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <div className="tasks-container">
                <div className="paper-pending">
                    <h3>
                        Pendente
                        <BsCircleFill style={{ color: '#f5e664', fontSize: '10px', marginLeft: '5px' }} />
                    </h3>
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 0 && (
                        <div className='pending-task' key={task.id}>
                            <div className='task-content'>
                                <div>
                                    <p className='task'>{task.task}</p>
                                    <p className='category'>({task.category})</p>
                                </div>
                                <div className="dates-container">
                                    <div>
                                        <p className='date-create'>Criação: {format(new Date(task.date_create), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                    <div>
                                        <p className='date-mod'>Última mod: {format(new Date(task.status_date), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="paper-in-progress">
                    <h3>
                        Em Progresso
                        <BsCircleFill style={{ color: '#0e96f1', fontSize: '10px', marginLeft: '5px' }} />
                    </h3>
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 1 && (
                        <div className='in-progress-task' key={task.id}>
                            <div className='task-content'>
                                <div>
                                    <p className='task'>{task.task}</p>
                                    <p className='category'>({task.category})</p>
                                </div>
                                <div className="dates-container">
                                    <div>
                                        <p className='date-create'>Criação: {format(new Date(task.date_create), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                    <div>
                                        <p className='date-mod'>Última mod: {format(new Date(task.status_date), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="paper-done-task">
                    <h3>
                        Concluída
                        <BsCircleFill style={{ color: '#70e070', fontSize: '10px', marginLeft: '5px' }} />
                    </h3>
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 2 && (
                        <div className='done-task' key={task.id}>
                            <div className='task-content'>
                                <div>
                                    <p className='task'>{task.task}</p>
                                    <p className='category'>({task.category})</p>
                                </div>
                                <div className="dates-container">
                                    <div>
                                        <p className='date-create'>Criação: {format(new Date(task.date_create), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                    <div>
                                        <p className='date-mod'>Última mod: {format(new Date(task.status_date), 'dd/MM/yyyy HH:mm')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TasksTable;
