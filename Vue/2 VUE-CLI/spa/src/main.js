import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Vue from 'vue'   // in Vue 2
//import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store).use(router).mount('#app')
App.use(VueAxios, axios)