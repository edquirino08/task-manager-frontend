import { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import { useLocation } from 'react-router-dom';
import DashboardComponent from '../components/Dashboard';
import api from '../services/Api';

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state && location.state.userData;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.post('/listTasks', { session_token: userData.session_token });
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchTasks();
  }, []);



  return (
    <div className="dashboard">

      <DashboardComponent userData={userData} />
    </div>
  );
}

export default Dashboard;
