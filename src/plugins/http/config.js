// axios的默认配置
export default {
  method: "get",
  // 基础url前缀
  baseURL: process.env.VUE_APP_BASE_API,
  //   请求头信息
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  //   参数
  data: {},
  timeout: 10000,
  //   携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: "JSON",
};

// config.js      ====>     axios的默认配置
// api.js 　　   ====>     二次封装axios，拦截器等
// interface.js  ====>     请求接口文件
// index.js       ====>     将axios封装成插件
