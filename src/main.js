import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import element from "./plugins/element";
import normlize from "normalize.css";
import { formatDate } from "@/utils/commom";

Vue.use(element, normlize);
Vue.prototype.$formatDate = formatDate;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
