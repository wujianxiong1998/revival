<template>
  <div>
    <div class="item flex" v-for="item of datas" :key="item._id">
      <p>{{item.name}}</p>
      <div class="btn" @click="handleDel(item._id)">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: []
    };
  },
  created() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      const {data:res} = await this.$http.get("/");
      this.datas = res
    },
    async handleDel(id) {
      const {data:res} = await this.$http.post('/delete', {'_id': id})
      console.log(res)
      this.getDatas()
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 20px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  .btn {
    padding: 5px;
    background: #ccc;
  }
}
.flex {
  display: flex;
}
</style>