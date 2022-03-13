import { setSmartHrApiClient } from "@/core/core";
import CreateHttpClient from "@/core/http/CreateHttpClient";
import { API_BASE_URL } from "@/const";
import { registerComponents } from "@/SmartHrComponents";

/**
 *
 * @param Vue
 */

function extendVuePrototype(Vue) {
  const $api = CreateHttpClient({ baseURL: API_BASE_URL });

  setSmartHrApiClient($api);

  Vue.prototype.$api = $api;
}

const SmartHrCore = {
  /**
   *
   * @param Vue
   * @param {SmartHrOptions} options
   */
  install(Vue, options) {
    registerComponents(Vue);

    extendVuePrototype(Vue, options);
  },
};

export default SmartHrCore;
