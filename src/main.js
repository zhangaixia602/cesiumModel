import { createApp } from 'vue'
import router from './router';
import App from './App';
import './assets/css/common.css';

createApp(App).use(router).mount('#app')
