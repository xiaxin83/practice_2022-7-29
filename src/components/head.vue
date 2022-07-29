<template>
  <el-row style="height: 80px">
    <el-col :span="4" class="logo">
      <img src="@/assets/logo.png" />
      <span style="font-size: 15px">练习</span>
    </el-col>
    <el-col :span="8">
      <Breadcrumb></Breadcrumb>
    </el-col>
    <el-col :span="12" :offset="1">
      <el-dropdown style="float: right">
        <span class="el-dropdown-link" style="color: #ffffff">
          user001
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting"
            >设置默认密级</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-close" @click.native="loginOut"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb/index.vue";
export default {
  name: "StriveHead",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      isCollapse: true,
    };
  },

  mounted() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      // 清空token
      window.localStorage.clear();
      // 跳转页面
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-family: "微软雅黑";
    font-weight: bold;
    text-shadow: 0 0 5px #000000;
    display: flex;
    align-items: center;
  }

  .logo img {
    margin: 0 5px 0 0;
    width: 35px;
    height: 35px;
  }
}
</style>
