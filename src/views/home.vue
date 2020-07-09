<template>
  <div id="home">
    <Message></Message>
    <Carousel></Carousel>
    <Content ref="wall"></Content>
    <div class="send">
      <Wall @refresh="handleRefresh"></Wall>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/carousel/index.vue";
import Message from "@/components/message/index.vue";
import Content from "@/components/content/content.vue";
import Wall from "@/components/wall/wall.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Message,
    Content,
    Wall
  },
  methods: {
    handleRefresh() {
      this.$refs.wall.getDatas();
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  background: #f3f9f1;
}
.send {
  position: absolute;
  top: 380px;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
