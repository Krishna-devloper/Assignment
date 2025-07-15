import axios from 'axios';
const API_URL = 'http://localhost:5000/api';
export const getUsers = () => axios.get(`${API_URL}/users`);
export const addUser = (name) => axios.post(`${API_URL}/users`, { name });
export const claimPoints = (userId) => axios.post(`${API_URL}/claim/${userId}`);
export const getHistory = () => axios.get(`${API_URL}/history`);