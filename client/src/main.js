import Vue from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(Antd);
/* https://router.vuejs.org/ */
import { router } from "./router";

/* https://www.npmjs.com/package/vue-form */
import "./form";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
