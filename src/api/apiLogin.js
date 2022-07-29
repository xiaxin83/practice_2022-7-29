function apiLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "lbj" && password == "123456") {
        resolve(true);
      } else {
        reject("用户名或密码错误");
      }
    }, 2000);
  });
}
export default apiLogin;
