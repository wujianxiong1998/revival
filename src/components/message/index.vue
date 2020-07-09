<template>
  <div id="message">
    <van-notice-bar
      left-icon="volume-o"
      color="#000"
      background="#f3f9f1"
      :text="txt"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: '杨绛：我们曾如此渴望命运的波澜，到最后才发现：人生最曼妙的风景，竟是内心的淡定与从容……我们曾如此期盼外界的认可，到最后才知道：世界是自己的，与他人毫无关系！'
    }
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
@import url('../../assets/css/message.css');
#message {
  padding: 10px 0;
}
</style>