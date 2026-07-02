import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://task-tracker-184z.onrender.com/api/tasks',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;