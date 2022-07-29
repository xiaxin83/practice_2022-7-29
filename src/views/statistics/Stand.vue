<template>
  <div class="node">
    <!-- form表单 -->
    <el-form label-width="80px" label-position="top" inline>
      <el-form-item label="添加" size="mini">
        <el-input
          style="width: 200px; margin-right: 10px"
          placeholder="请输入姓名"
          v-model="userInfo.name"
        ></el-input>
        <el-input
          style="width: 200px; margin-right: 10px"
          v-model="userInfo.sex"
          placeholder="请输入性别"
        ></el-input>
        <el-input
          style="width: 200px; margin-right: 10px"
          v-model="userInfo.address"
          placeholder="请输入地址"
        ></el-input>
        <el-button type="primary" plain @click="addInfo">添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <!-- <Tabel :list="allUserItem"></Tabel> -->
    <el-table :data="allUserItem" style="width: 100%">
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <delVue :id="scope.$index" :list="allUserItem" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import delVue from "@/components/Button/del.vue";
// import editVue from "@/components/Button/edit.vue";
import { setData } from "@/utils/data";
export default {
  name: "StriveIndex",
  components: {
    delVue,
    // editVue
  },
  data() {
    return {
      userInfo: {
        date: this.$formatDate(new Date()),
        name: "",
        sex: "",
        address: "",
      },
      allUserItem: [],
    };
  },

  watch: {
    allUserItem: {
      handler(value) {
        setData(JSON.stringify(value));
      },
      deep: true,
    },
  },

  methods: {
    addInfo() {
      this.saveData({
        date: this.$formatDate(new Date()),
        name: this.userInfo.name,
        sex: this.userInfo.sex,
        address: this.userInfo.address,
      });
    },
    saveData(value) {
      this.allUserItem.unshift(value);
      console.log(this.allUserItem);
    },
  },
};
</script>

<style lang="scss" scoped></style>
