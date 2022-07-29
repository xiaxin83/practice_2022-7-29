<template>
  <el-button type="text" @click="edit(id)" size="mini"> 编辑 </el-button>
</template>

<script>
export default {
  name: "StriveEdit",
  props: {
    scope: {
      tpye: Object,
      default: () => {
        return {};
      },
    },
    id: {
      tpye: String,
      default: () => {
        return "";
      },
    },
    tabelData: {
      tpye: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    edit() {},
  },
};
</script>

<style lang="scss" scoped></style>
