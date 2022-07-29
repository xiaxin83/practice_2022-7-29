<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
      {{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
export default {
  name: "StriveIndex",

  data() {
    return {
      breadList: [],
    };
  },
  watch: {
    $route(val) {
      // 调用获取路由数组
      this.getBreadList(val);
    },
  },

  mounted() {
    this.getBreadList(this.$route);
  },

  methods: {
    getBreadList(val) {
      let matched = val.matched.filter((item) => item.meta && item.meta.title);
      this.breadList = matched;
    },
  },
};
</script>

<style lang="scss" scoped></style>
