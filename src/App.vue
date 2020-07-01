<template>
  <div id="app">
    <div id="nav"
         v-if="this.$store.state.pageShow">
      <router-link to="/">echars</router-link> |
      <router-link to="/xlsx-example">excel解析</router-link> |
      <router-link to="/svg-example1">svg动效1</router-link> |
      <router-link to="/svg-example2">svg动效2</router-link> |
      <router-link to="/work-message">图片粘滞效果</router-link> |
      <router-link to="/work-page2">移动盒子高度自适应</router-link> |
      <router-link to="/work-page3">兴业新页面</router-link>|
      <router-link to="/work-page4">兴业新页面2</router-link>|
      <router-link to="/work-page5">兴业新页面3</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
