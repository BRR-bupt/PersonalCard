import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus, { size: 'large', zIndex: 3000 }).mount('#app')
