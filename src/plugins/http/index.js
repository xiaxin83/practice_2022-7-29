将axios封装成插件;
import apiList from "./interface";
const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return apiList;
      },
    },
  });
};
