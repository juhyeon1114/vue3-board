import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import objPlugins from '@/plugins/obj';
import funcPlugins from '@/plugins/func';
import Person from '@/plugins/person';
import GlobalComponents from './plugins/global-components';
import GlobalDirectives from './plugins/global-directives';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
app.use(GlobalComponents);
app.use(GlobalDirectives);
app.use(router);
app.use(objPlugins, { hi: 'hello' });
app.use(funcPlugins);
app.use(Person);
app.mount('#app');

export const app_env = import.meta.env;

// console.log(app_env.MODE);
// console.log(app_env.BASE_URL);
// console.log(app_env.PROD);
// console.log(app_env.DEV);
// console.log(app_env.VITE_APP_API_URL);
// console.log(app_env);
