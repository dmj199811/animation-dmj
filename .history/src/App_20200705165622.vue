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
      <router-link to="/work-page5">核心系统关联关系图</router-link> |
      <router-link to="/work-page6">内部节点管关系图-理财图</router-link> |
      <router-link to="/work-page7">内部节点管关系图-IC借记卡</router-link> |
      <router-link to="/work-page8">互联网统一认证系统（身份认证）_8</router-link> |
      <router-link to="/work-page9">贵金属_7</router-link> |
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
