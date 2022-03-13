import Axios from "axios";

/**
 * @param {AxiosRequestConfig|{}} options
 */
function asd(options) {
  let instance = Axios.create(options);

  instance.interceptors.request.use((config) => {
    let token = localStorage.getItem("auth_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  return instance;
}

/*** @type {AxiosInstance}*/
export let $api = null;
export function setSmartHrApiClient(client) {
  $api = client;
  window.$api = $api;
}

function extendVuePrototype(Vue) {
  const $api = asd({ baseURL: process.env.VUE_APP_SERVER_URL });

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
    extendVuePrototype(Vue, options);
  },
};

export default SmartHrCore;
