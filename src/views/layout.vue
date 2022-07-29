<template>
  <el-container>
    <el-header style="height: 80px; z-index: 1; width: 100%" :style="topBg">
      <Head />
    </el-header>
    <el-container style="height: 100%">
      <el-aside style="width: 200px">
        <el-row class="tac">
          <el-col :span="24">
            <Nav></Nav>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Head from "@/components/head.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "StriveLayout",
  components: {
    Head,
    Nav,
  },
  data() {
    return {
      topBg: {
        background: "#001529",
        height: "80px",
        fontSize: "32px",
        color: "#ffffff",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #333744;
  height: 100vh;
}
</style>
