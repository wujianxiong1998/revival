<template>
  <div id="message">
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="item of $store.state.topdatas" :key="item._id">{{item.message}}--{{item.wallName}}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topdatas: []
    };
  },
  created() {
    console.log(this.topdatas)
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/message.css");
#message {
  padding: 10px 0;
}
 .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>