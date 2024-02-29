import React from 'react';
import api from '../../services/Api';
import Search from '../Search';
import './taskstable.css';
import { format } from 'date-fns';
import NewTask from '../NewTask';
import TaskDetails from '../TaskDetails';

const TasksTable = () => {
    const [tasks, setTasks] = React.useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [search, setSearch] = React.useState('');
    const [newTask, setNewTask] = React.useState(false);
    const [openTask, setOpenTask] = React.useState(false);
    const [taskDetail, setTaskDetail] = React.useState(null);


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
            console.log('Olha as tasks:', tasks)
            setTasks(response.data.tasks);
        } catch (error) {
            console.log('Erro ao listar tarefas:', error);
        }
    };

    const handleOpenNewTask = () => {
        setNewTask(true);
    };

    const handleClosePopup = () => {
        setNewTask(false);
    };

    const handeleOpenTask = (task) => {
        setTaskDetail(task);
        setOpenTask(true);
        console.log('Olha as tarefas:', taskDetail);

    };

    const handleCloseTask = () => {
        setOpenTask(false);
    };

    return (
        <div>
            <div className="search-and-button-container">
                <Search search={search} setSearch={setSearch} />
                <button className='button-add-task' onClick={handleOpenNewTask}> Nova Tarefa</button>
                {newTask && <NewTask onClose={handleClosePopup} />}
            </div>
            <div className="tasks-container">
                <div className="paper-pending">
                    <h3>
                        Pendente
                    </h3>
                    {openTask && <TaskDetails taskDetail={taskDetail} onClose={handleCloseTask} />}
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 0 && (
                        <div className='pending-task' key={task.id}>
                            <div className='task-content'
                                onClick={() => handeleOpenTask(task)}>
                                <div>
                                    <p className='task'>{task.task}</p>
                                </div>
                                <div>
                                    <p className='date-end'>Vencimento: {task.date_end == null ? "Sem vencimento" : format(new Date(task.date_end), 'dd/MM/yyyy HH:mm')}</p>
                                </div>

                                <div >
                                    <p className='task-priority'>Prioridade: {task.priority == 0 ? "Sem prioridade" : task.priority == 1 ? "Baixa" : task.priority == 2 ? "Media" : "Alta"} </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="paper-in-progress">
                    <h3>
                        Em Progresso
                    </h3>
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 1 && (
                        <div className='in-progress-task' key={task.id}>
                            {openTask && <TaskDetails />}
                            <div className='task-content'>
                                <div>
                                    <p className='task'>{task.task}</p>
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
                    </h3>
                    {tasks.filter(task => task.task.toLowerCase().includes(search.toLowerCase())).map(task => task.status === 2 && (
                        <div className='done-task' key={task.id}>
                            {openTask && <TaskDetails />}
                            <div className='task-content'>
                                <div>
                                    <p className='task'>{task.task}</p>
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
