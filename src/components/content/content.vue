<template>
  <div>
    <!-- 留言列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="item" v-for="(item,index) of datas" :key="item._id">
        <div class="flex between">
          <p><span class="bold" v-if="index<=4">Top</span>{{index+1}}：<span class="red">{{item.wallName}}</span></p>
          <van-button plain @click="handleAgree(item._id)">赞10</van-button>
        </div>
        <p class="indent gray pad-t-b-10">{{item.message | handleWords}}</p>
      </div>
    </van-list>

    <!-- 查看更多 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      loading: false,
      finished: false
    };
  },
  created() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      const { data: res } = await this.$http.get("/");
      this.datas = res;
      this.loading = false;
    },
    handleAgree(id) {
      console.log(id)
    },
    // 下滑加载更多
    onLoad() {
      this.getDatas();
      this.loading = false;
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