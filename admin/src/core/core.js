/*** @type {AxiosInstance}*/
export let $api = null;
export function setSmartHrApiClient(client) {
  $api = client;
  window.$api = $api;
}
