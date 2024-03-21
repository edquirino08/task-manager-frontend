import axios from 'axios';

const api = axios.create({
    baseURL: 'https://task-manager-backend-five.vercel.app/api',
    // baseURL: 'http://localhost:3000/api',
});

export default api;
