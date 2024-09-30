import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/admin/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if ()
    // check if cancelled
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
      return Promise.reject();
    }
    console.log(error);
    if (error.response.status === 401) {
      console.log("Unauthorized");
      // logout()
    }
    return Promise.reject(error.response.data.error);
  }
);

export default instance;
