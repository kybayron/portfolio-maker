import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GAuth from 'vue3-google-oauth2'
const gauthOption = {
  clientId: '332965169213-b6i26eob3o35tjhl74aq5bqp1vehpm78.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
createApp(App).use(GAuth, gauthOption)
createApp(App).use(router).mount('#app')
