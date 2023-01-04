import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import nav from './components/nav.vue'
app.component('sk-nav', nav)
createApp(App).use(router).mount('#app')
