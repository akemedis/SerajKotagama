import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

const app = createApp(App)
app.use(router)
app.mount('#app')
