import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import axios from 'axios'

const app = createApp(App)

// Configuración global de axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

app.use(pinia)
app.use(router)
app.mount('#app')