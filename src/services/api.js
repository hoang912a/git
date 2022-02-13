import axios from "axios";
// URL...........
const url = {
  // baseUrl: "https://reqres.in",
  baseUrl: "http://localhost:8001",
  login: "/signin",
  signup: "/signup",
};
// Instance...................
const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((request) => {
  // console.log("da ket noi api");
  return request;
});

instance.interceptors.response.use(
  (response) => {
    // setTimeout(() => {
    //   store.dispatch(hideLoading());
    // }, 1000);
    // store.dispatch(showLoading());
    return response;
  },
  (error) => {
    // setTimeout(() => {
    //   store.dispatch(hideLoading());
    // }, 1000);
    if (!error.response) {
      window.location.href = "/no-internet";
    } else {
      switch (error.response.status) {
        case 401:
          // window.location.href = "/login";
          break;
        case 403:
          window.location.href = "/no-perission";
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);
const api = {
  instance,
  url,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  promise: axios.all,
  spreads: axios.spreads,
};
export default api;
