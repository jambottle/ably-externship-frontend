import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'w3-css/w3.css';

createApp(App).use(store).use(router).mount('#app');
