import { createApp } from 'vue/dist/vue.esm-bundler'
import GlobalComponents from './components'
import store from './store'
import router from './router'
import "./assets/scss/main.scss";
import vClickOutside from "click-outside-vue3"


const app = createApp({})
app.use(GlobalComponents)
app.use(store)
app.use(router)
app.use(vClickOutside)

app.mount('#app')
