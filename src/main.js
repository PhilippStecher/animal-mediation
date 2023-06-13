import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config';

//! Primevue
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import Button from "primevue/button"



const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('Button', Button);

app.mount('#app')