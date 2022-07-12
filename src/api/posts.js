import axios from 'axios';

const Axios = axios.create({ baseURL: 'http://localhost:5000' });

export const getPosts = async () => {
  try {
    return (await Axios.get('/posts')).data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPostById = async id => {
  try {
    return (await Axios.get(`/posts/${id}`)).data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const createPost = async data => {
  return Axios.post('/posts', data);
};

export const updatePost = async (id, data) => {
  return Axios.put(`/posts/${id}`, data);
};

export const deletePost = async id => {
  return Axios.delete(`/posts/${id}`);
};
