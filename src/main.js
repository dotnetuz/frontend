import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import SmartHr from "@/SmartHr";

import VueToastr from "vue-toastr";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { API_BASE_URL } from "@/const";
import "vue-loaders/dist/vue-loaders.css";
import VueLoaders from "vue-loaders";

import("./global.scss");

const smartHrCoreOptions = {
  axiosOptions: {
    baseURL: API_BASE_URL,
  },
};

Vue.use(SmartHr, smartHrCoreOptions);
Vue.use(VueLoaders);
Vue.use(VueToastr);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const loader = `
<div style="color: red;">
  <vue-loaders-ball-beat color="currentColor" scale="1"></vue-loaders-ball-beat>
</div>
`;

Vue.config.productionTip = false;

new Vue({
  loader,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
