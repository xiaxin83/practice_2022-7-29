<template>
  <div>
    <el-menu-item :index="basePath" v-if="!item.children">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
    <el-submenu :index="basePath" v-else>
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>

      <NavItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basePath="child.path"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: {
      type: Object,
      default: () => {
        return [];
      },
    },
    basePath: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
