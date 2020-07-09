<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <div id="nav" class="flex">
      <router-link to="/" class="nav_item flex-col center">
        <div><i class="iconfont icon-shumiao"></i></div>
        <p>墙世界</p>
      </router-link>
      <router-link to="/user" class="nav_item flex-col center">
        <div><i class="iconfont icon-hua"></i></div>
        <p>我的世界</p>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg:#f3f9f1;
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: $bg;
}
#nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: #161823;
}
#content {
  padding-bottom: 100px;
  box-sizing: border-box;
}
.router-link-exact-active {
  color: #9ed900;
}
.flex {
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.center {
  justify-content: center;
  align-items: center;
}
.nav_item {
  flex: 1;
  padding: 10px 0;
}
</style>
