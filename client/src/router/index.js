import Vue from "vue";
import VueRouter from "vue-router";

import FormularioRegistro from "/src/components/FormRegistro/Registro.vue";
import FormularioLogin from "/src/components/FormLogin/Login.vue";
import FormularioVehiculo from "/src/components/FormularioVehiculo/index.vue";
import List from "/src/components/ListVehiculo/List.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home" },
  { path: "/registro", component: FormularioRegistro },
  { path: "/login", component: FormularioLogin },
  { path: "/vehicles", component: FormularioVehiculo },
  { path: "/list-vehicles", component: List },
];

const router = new VueRouter({
  routes,
});

export default router;
