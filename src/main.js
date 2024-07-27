import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Notiwind from 'notiwind';

const app= createApp(App);

app.use(Notiwind);

app.mount('#app');