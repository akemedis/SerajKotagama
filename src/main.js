import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

const app = createApp(App, {
  theme: {
    primary: '#3f51b5',
    secondary: '#FFCDD2',
    accent: '#ff4081',
    danger: '#F44336',
  },
})
app.use(Vuetify)
app.use(router)
app.mount('#app')
