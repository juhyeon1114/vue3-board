import { postsApi } from '.';

export const getPosts = async params => {
  return await postsApi({
    method: 'GET',
    url: '/',
    params,
  });
};

export const getPostById = async id => {
  try {
    return (await postsApi.get(`/${id}`)).data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const createPost = async data => {
  return postsApi.post('/', data);
};

export const updatePost = async (id, data) => {
  return postsApi.put(`/${id}`, data);
};

export const deletePost = async id => {
  return postsApi.delete(`/${id}`);
};
