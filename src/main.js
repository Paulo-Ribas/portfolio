import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' // temporario, só para a criação
import { fab } from '@fortawesome/free-brands-svg-icons' // temporario só para a criação
import { MqResponsive, Vue3Mq } from "vue3-mq";
library.add(fas, fab)
//import { faVuejs } from '@fortawesome/free-brands-svg-icons'


const myApp = createApp(App)
myApp.component('Font-awesome-icon', FontAwesomeIcon)
myApp.use(router)
myApp.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 895,
        md: 1024,
        lg: 1440,
        xl: 1920,
        xxl: Infinity
    },
    defaultBreakpoint: "xl"

})
myApp.component('MqResponsive', MqResponsive)
myApp.mount('#app')
