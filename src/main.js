import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' // temporario, só para a criação
import { fab } from '@fortawesome/free-brands-svg-icons' // temporario só para a criação
library.add(fas, fab)
//import { faVuejs } from '@fortawesome/free-brands-svg-icons'


const myApp = createApp(App)
myApp.component('Font-awesome-icon', FontAwesomeIcon)
myApp.use(router)
myApp.mount('#app')
