import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  sendMessage: (formData) => api.post('/contact', formData),
};

export const articlesAPI = {
  getArticles: () => api.get('/articles'),
};

export default api;
