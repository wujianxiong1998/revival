<template>
  <div id="wall">
    <div class="btn">
      <van-button type="primary" plain size="large" round @click="openWall">发送墙</van-button>
    </div>

    <!-- 遮罩层 -->
    <div class="pop" v-if="showPop">
      <!-- 输入姓名 -->
      <van-field v-model="form.wallName" label="给" colon />
      <!-- 输入 -->
      <van-field
        v-model="form.message"
        autosize
        label="留言"
        type="textarea"
        maxlength="300"
        placeholder="请输入留言"
        show-word-limit
        clearable
        colon
        autofocus
      />
      <div class="bottom flex between">
        <div class="flex1 flex center">
          <van-button plain type="default" size="large" @click="closeWall">关闭</van-button>
        </div>
        <div class="flex1 flex center">
          <van-button plain type="primary" size="large" @click="sendMessage">发送</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPop: false,
      form: {
        // 留言
        message: "",
        // 遮罩姓名输入
        wallName: ""
      }
    };
  },
  methods: {
    // 打开发送墙
    openWall() {
      this.showPop = true;
    },
    closeWall() {
      this.showPop = false;
    },
    // 发送
    async sendMessage() {
      const { data: res } = await this.$http.post("/send", {
        wallName: this.form.wallName,
        message: this.form.message
      });
      if (res == "OK") {
        this.showPop = false;
        this.$emit('refresh')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/comon.css");
@import url('../../assets/css/vant_reset.css');
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

.pop {
  box-sizing: border-box;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  margin: 0 10%;
  height: 600px;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 0 100px 10px #4c8dae;
  border-radius: 10px;
}

.bottom {
  width: 90%;
  position: absolute;
  bottom: 20px;
  div {
    margin: 0 5%;
  }
}

.van-cell {
  margin-top: 10px;
}
</style>