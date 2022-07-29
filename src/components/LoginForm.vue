<template>
  <div class="login_container">
    <div class="login_box" ref="loginBoxRef">
      <!-- form表单 -->
      <el-form
        class="login_form"
        :model="loginform"
        :rules="loginRules"
        ref="loginRefForm"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            style="width: 250px"
            size="mini"
            placeholder="请输入用户名"
            v-model="loginform.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            size="mini"
            style="width: 250px"
            type="password"
            v-model="loginform.password"
            prefix-icon="el-icon-refresh"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 登录重置 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import apiLogin from "@/api/apiLogin";
export default {
  name: "StriveLoginForm",

  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur" },
          {
            min: 2,
            max: 4,
            message: "用户名的长度为2-4个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, trigger: "blur" },
          {
            min: 6,
            max: 13,
            message: "密码的长度为6-13个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    async login() {
      const valid = await this.$refs.loginRefForm.validate().catch(() => null);
      if (!valid) return;
      await apiLogin(this.loginform).catch((error) => {
        this.$message({
          message: error,
          type: "warning",
        });
      });
      this.$message({
        message: "登录成功",
        type: "success",
      });
      this.$router.push("/layout");
      localStorage.setItem("token", "loginSuccess");
    },
    reset() {
      this.loginform.username = "";
      this.loginform.password = "";
      this.$refs.loginRefForm.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  .login_box {
    position: absolute;
    width: 450px;
    height: 350px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btns {
    margin-left: 45px;
  }
}
</style>
