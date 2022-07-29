// 二次封装axios ，拦截器等
import axios from "axios";
import config from "./config";
import qs from "qs";
import Cookies from "js-cookie";
import router from "@/router";

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const service = axios.create({
      baseURl: config.baseURL,
      headers: {},
      transformRequest: [function (data) {}],
    });
  });
}

// request 拦截器
service.interceptors.request.use(
  (config) => {
    const token = Cookies.get("markToken");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    //cvs
    if (res.type === "application/csv") {
      return Promise.resolve(res);
    }
    // if the custom code is not 200, it is judged as an error.
    if (res.status !== 200) {
      // userinfo special handle
      if (res.status === undefined && Object.keys(res).length > 0) {
        return Promise.resolve(res);
      }
      //其他错误 other error
      Message({
        message: res.msg || "请求失败，请稍后重试",
        type: "error",
        duration: 5 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        res.status === 50008 ||
        res.status === 50012 ||
        res.status === 50014
      ) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout",
          {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning",
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.log("err", error); // for debug
    const resData = error.response && error.response.data;
    const message =
      resData && resData.msg ? resData.msg : "请求失败，请稍后重试";

    Message({
      message: message,
      type: "error",
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);
