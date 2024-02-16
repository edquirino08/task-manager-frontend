import React from 'react';
import api from '../../services/Api';

const TasksTable = ({ token }) => {

    const handleListTasks = async () => {
        console.log('olha o token', token);
        api.defaults.headers.common['token'] = token;
        const tasks = await api.get('/listTasks');
        console.log(tasks.data);
    };

    return (
        <div>
            <button onClick={handleListTasks}>Listar Tarefas</button>
        </div>
    );
};

export default TasksTable;
