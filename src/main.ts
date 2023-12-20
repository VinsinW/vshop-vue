import { createApp } from 'vue'
import App from './App.vue'
import '/@/assets/style.css'
import '/@/assets/reset.scss'
import { router } from "/@/router";

const app = createApp(App)
app.use(router)
app.mount('#app')
