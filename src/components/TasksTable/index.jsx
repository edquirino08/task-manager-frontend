import React from 'react';
import api from '../../services/Api';

const TasksTable = () => {
    const [tasks, setTasks] = React.useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));

    React.useEffect(() => {
        if (userData) {
            handleListTasks();
        }
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
            <ul>
                <div className="paper">
                    <h3>Pendente</h3>
                    {tasks.map(task => task.status === 0 && (
                        <div className='task-container pending-task' key={task.id}>
                            <p className='task'>{task.task}</p>
                            <p className='category'>({task.category})</p>
                        </div>
                    ))}
                </div>
                <div className="paper">
                    <h3>Em Progresso</h3>
                    {tasks.map(task => task.status === 1 && (
                        <div className='task-container inProgress-task' key={task.id}>
                            <p className='task'>{task.task}</p>
                            <p className='category'>({task.category})</p>
                        </div>
                    ))}
                </div>
                <div className="paper">
                    <h3>Concluída</h3>
                    {tasks.map(task => task.status === 2 && (
                        <div className='task-container done-task' key={task.id}>
                            <p className='task'>{task.task}</p>
                            <p className='category'>({task.category})</p>
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default TasksTable;
