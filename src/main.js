import '../src/assets/css/mian.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

const app = createApp(App)

app.use(Viewer)
Viewer.setDefaults({
    title: false,
    toolbar: false,
    navbar: false,
    transition: false,
    zoomable: false,
    fullscreen: false,
    rotatable: false,
    scalable: false,
    keyboard: false,
    movable: false
})

app.use(router)

app.mount('#app')
