import { createApp } from 'vue'
import mitt from 'mitt'

import DudesApp from './DudesApp.vue'
import './assets/css/app.css'

window.eventBus = mitt()

createApp(DudesApp).mount('#app')
