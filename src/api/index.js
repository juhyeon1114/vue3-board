import axios from 'axios';

function createInstance(baseURL, options = {}) {
  const instance = axios.create({
    baseURL,
    ...options,
  });
  return instance;
}

export const postsApi = createInstance(
  `${import.meta.env.VITE_APP_API_URL}/posts`,
);
