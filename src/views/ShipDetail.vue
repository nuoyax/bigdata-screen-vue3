<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const tableData = ref<Record<string, any>>([]);
    onMounted(async() => {
   await   axios
        .get("/api/admin/boatValue", {
          params: {},
        })
        .then(({ data }) => {
          //执行成功后代码处理
          console.log(data);
          tableData.value = data;
        });
    });
    return {
      tableData,
    };
  },
});
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="船舶名" width="180" />
    <el-table-column prop="totalIncome" label="收入总额" width="180" />
    <el-table-column prop="avgIncome" label="平均收入" />
    <el-table-column prop="company" label="公司" />
    <el-table-column prop="hangci" label="航次" />
  </el-table>
</template>
