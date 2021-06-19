import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioVehiculo from '/src/components/FormularioVehiculo/index.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Home'},
  { path: "/vehicles", component: FormularioVehiculo}
]

const router = new VueRouter({
  routes
})

export default router
