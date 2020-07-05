<template>
  <div class="home">
    <Message></Message>
    <Carousel></Carousel>
    <Content></Content>
    <div class="btn">
      <van-button
        type="info"
        plain
        size="large"
        round
        >发送墙</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/carousel/index.vue'
import Message from '@/components/message/index.vue'
import Content from '@/components/content/content.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Message,
    Content
  }
}
</script>
<style lang="scss" scoped>
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    button {
      width: 200px;
    }
  }
</style>
