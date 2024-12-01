import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/global.scss'
import globalComponents from '@/plugins/globalComponents'
import App from './App.vue'
import router from './router'

const app = createApp(App)
globalComponents(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
