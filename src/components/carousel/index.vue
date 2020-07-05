<template>
  <div id="carousel">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/carousel.css");
#carousel {
  height: 400px;
  background-image: url('../../assets/bg.jpg');
  background-size: 100% 400px;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>