import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

export const useAxios = (url, config = {}) => {
  const response = ref({});
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const total = ref(0);
  const instance = ref(null);
  const params = unref(config.params) || {};

  const execute = () => {
    loading.value = true;
    data.value = null;
    error.value = null;
    instance.value = axios(url, {
      ...config,
      params,
    })
      .then(res => {
        response.value = res;
        data.value = res.data;
        total.value = Number(res.headers['x-total-count'] || 0);
      })
      .catch(err => {
        console.error(err);
        error.value = err;
        total.value = 0;
        data.value = [];
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params)) {
    watchEffect(execute);
  } else {
    execute();
  }

  return {
    data,
    error,
    loading,
    total,
    response,
    instance,
  };
};
