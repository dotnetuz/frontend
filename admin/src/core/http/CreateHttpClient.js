import Axios from "axios";

/**
 * @param {AxiosRequestConfig|{}} options
 */
export default function (options) {
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
