<template>
  <el-button type="danger" @click="delData(id, list)" size="mini">
    删除
  </el-button>
</template>

<script>
export default {
  name: "StriveDel",
  props: {
    id: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},

  methods: {
    delData(id, rows) {
      rows.splice(id, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
