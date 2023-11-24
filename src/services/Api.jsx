import axios from "axios";

const api = axios.create({
    baseURL: 'https://task-manager-backend-five.vercel.app/api/',
});

export default api;
