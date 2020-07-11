<template>
  <div>
    <!-- 留言列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="item" v-for="(item,index) of datas" :key="item._id">
        <div class="flex between">
          <p><span class="bold" v-if="index<=4">Top</span>{{index+1}}：<span class="red">{{item.wallName}}</span></p>
          <van-button plain @click="handleAgree(item._id, item.star)">赞{{item.star | filterStar}}</van-button>
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
      this.loading = true
      const { data: res } = await this.$http.get("/");
      this.datas = res;
      if(res.length) {
        this.finished = true
        this.loading = false;
      }
      this.datas = this.datas.sort((a, b) => {
        return b['star'] - a['star']
      })
      this.$store.commit('vuexTopdata', this.datas.slice(0,5))
    },
    async handleAgree(id, star) {
      const { data: res } = await this.$http.post("/star", {
        _id: id,
        star
      });
      this.getDatas();
    },
    // 下滑加载更多
    onLoad() {
      this.getDatas();
      this.loading = false;
      console.log(111)
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