<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="rgb(0, 21, 41)"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    default-active="/layout/data/tag"
    style="border-right: none"
  >
    <NavItem
      v-for="v in this.$router.options.routes[1].children"
      :key="v.path"
      :item="v"
      :basePath="v.path"
    ></NavItem>
  </el-menu>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "StriveNav",
  components: {
    NavItem,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
