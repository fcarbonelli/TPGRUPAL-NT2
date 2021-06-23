import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePassword from 'vue-password'

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./form";

import store from './store/store';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  VuePassword,
  render: h => h(App)
}).$mount('#app')
