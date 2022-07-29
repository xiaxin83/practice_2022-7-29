<template>
  <el-table :data="tabelData" style="width: 100%">
    <el-table-column type="index" width="50" label="序号"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="sex" label="性别"></el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="scope">
        <editbutton
          :id="scope.$index"
          :scope="scope.row"
          :tabelData="tableData"
        />
        <delbutton :tabelData="tableData" />

        <!-- {{ scope.row }} -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import delbutton from "./Button/del.vue";
import editbutton from "./Button/edit.vue";

export default {
  name: "StriveLabel",
  components: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    delbutton,
    editbutton,
  },
  data() {
    return {
      tabelData: [],
    };
  },
  watch: {},

  mounted() {
    console.log(this.list);
  },
  updated() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
