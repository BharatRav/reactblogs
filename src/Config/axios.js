import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL:"https://193.168.43.81:2016",
//   baseURL: "http://reactblogs.bharat.onrender.com/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: token,
      token: token,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

const errorHandler = (error) => {
  if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return errorHandler(error);
  }
);
export default axiosInstance;
