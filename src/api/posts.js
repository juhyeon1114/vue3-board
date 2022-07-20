import axios from 'axios';

const Axios = axios.create({ baseURL: 'http://localhost:5000' });

export const getPosts = async params => {
  try {
    const res = await Axios({
      method: 'GET',
      url: '/posts',
      params,
    });
    return res;
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
