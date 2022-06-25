import apiAxios from './axios';
const prefix = '/posts'
export const getPosts = () => apiAxios.get(prefix);
export const getPost = (id) => apiAxios.get(`${prefix}/${id}`);
export const createPost = (data) => apiAxios.post(prefix, data);
export const updatePost = (id,data) => apiAxios.put(`${prefix}/${id}`, data);
export const deletePost = (id) => apiAxios.delete(`${prefix}/${id}`);