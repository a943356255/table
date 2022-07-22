<template>
  <div>
    <!-- <Home></Home> -->
    <MyTable
      :columns="this.columns"
      :table="this.table"
      :conditions="this.conditions"
      :columnsName="this.columnsName"
      v-slot="value"
    >
      <el-button size="small" @click.native="change(value.index)"
        >编辑</el-button
      >
      <el-button size="small" type="danger" @click.native="del(value.index)"
        >删除</el-button
      >
      <el-button size="small" @click.native="add()">添加</el-button>
    </MyTable>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import MyTable from "./components/MyTable.vue";
export default {
  name: "App",
  components: { Home, MyTable },
  data() {
    return {
      columns: {
        id: "id",
        account: "account",
        password: "password",
        college: "college",
        // category1_id: "category1_id",
        // category2_id: "category2_id",
        // category3_id: "category3_id",
        // name: "name",
        // trademark: "trademark",
        // key_words: "key_words",
        // price: "price",
      },
      conditions: {
        // id: "1",
      },
      columnsName: {
        id: "主键",
        account: "账号",
        password: "密码",
        college: "学院",
        // category1_id: "分类1",
        // category2_id: "分类2",
        // category3_id: "分类3",
        // name: "商品名称",
        // trademark: "品牌",
        // key_words: "关键字",
        // price: "价格",
      },
      table: "user",
    };
  },
  methods: {
    change(index) {
      this.$bus.$emit("edit", index);
    },
    del(index) {
      this.$bus.$emit("del", index);
    },
    add() {
      this.$bus.$emit("add");
    },
  },
};
</script>

<style>
</style>
