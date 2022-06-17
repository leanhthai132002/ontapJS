import api from './axios';
const prefix = '/posts';
export const getPosts = () => api.get(prefix);

export const getPost = (id) => api.get(`${prefix}/${id}`);

export const deletePost = (id) => api.delete(`${prefix}/${id}`);

export const createPost = (data) => api.post(prefix, data);

export const updatePost = (id, data) => api.put(`${prefix}/${id}`, data);