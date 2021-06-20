import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioRegistro from '/src/components/FormRegistro/Registro.vue';
import FormularioLogin from '/src/components/FormLogin/Login.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Home'},
  { path: "/registro", component: FormularioRegistro},
  { path: "/login", component: FormularioLogin}
]

const router = new VueRouter({
  routes
})

export default router
