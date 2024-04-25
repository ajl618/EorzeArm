import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './index.css'
import PrimeVue from 'primevue/config';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia);
app.use(PrimeVue);
app.use(router)

import 'primevue/resources/themes/saga-blue/theme.css'       //tema
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //iconoss

app.mount('#app')
