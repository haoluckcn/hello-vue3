import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

/* 导入公共的样式 */
import './assets/reset.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
