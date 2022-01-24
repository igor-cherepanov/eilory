import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./router/router";
import store from './store'
import axios from "./plugins/axios";
import VueAxios from 'vue-cli-plugin-axios'

const app = createApp(App)

app
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .mount('#app')
