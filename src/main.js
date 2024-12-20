import { store } from '@/store/index'
import { createApp } from 'vue'
import '../src/assets/scss/main.scss'

import App from './App.vue'
import routers from './routes'
const app = createApp(App)
app.use(routers)
app.use(store)
app.mount('#app')
