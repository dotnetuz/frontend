import Layout from "@/components/layout/Layout.vue";
import Button from "@/components/button/Button";
import Alert from "@/components/alert/Alert";
/**
 * @param Vue
 */

export function registerComponents(Vue) {
  Vue.component("HrLayout", Layout);
  Vue.component("Button", Button);
  Vue.component("Alert", Alert);
}
