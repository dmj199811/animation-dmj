<template>
  <div id="app">
    <div id="nav"
         v-if="this.$store.state.pageShow">
      <!-- <router-link to="/">echars</router-link> | -->
      <router-link to="/xlsx-example">excel解析</router-link> |
      <router-link to="/svg-example1">svg动效1</router-link> |
      <router-link to="/svg-example2">svg动效2</router-link> |
      <router-link to="/work-message">图片粘滞效果</router-link> |
      <router-link to="/work-page2">移动盒子高度自适应</router-link> |
      <router-link to="/work-page3">兴业新页面</router-link>|
      <router-link to="/work-page4">兴业新页面2</router-link>|
      <!-- <router-link to="/work-page5">核心系统关联关系图</router-link> |
      <router-link to="/work-page6">内部节点管关系图-理财图</router-link> |
      <router-link to="/work-page7">内部节点管关系图-IC借记卡</router-link> |
      <router-link to="/work-page8">互联网统一认证系统（身份认证）_8</router-link> |
      <router-link to="/work-page9">贵金属_7</router-link> |
      <router-link to="/work-page10">企业应用集成平台物理部署图_5</router-link> |
      <router-link to="/work-page11">新页面7</router-link> |
      <router-link to="/work-page12">新页面8</router-link> |
      <router-link to="/work-page13">新页面9</router-link> |
      <router-link to="/work-page14">新页面10</router-link> |
      <router-link to="/work-page16">新页面11</router-link> |
      <router-link to="/work-page17">灾备页面 核心系统</router-link> |
      <router-link to="/work-page18">灾备页面 CIF</router-link> |
      <router-link to="/work-page20">灾备页面 互联网统一认证</router-link> |
      <router-link to="/work-newPage19">灾备页面 理财图</router-link> |
      <router-link to="/work-newPage20">灾备页面 贵金属灾备</router-link> |
      <router-link to="/work-newPage21">灾备页面 IC借记卡</router-link> |
      <router-link to="/work-newPage22">灾备页面 企业应用</router-link> |
      <router-link to="/work-loading">加载动态</router-link> | -->
      <router-link to="/resourcePage">资产托管页面</router-link> |
      <router-link to="/internetMoney">网金</router-link> |
      <router-link to="/driveRoom">驾驶舱</router-link>|
      <router-link to="/newMalfunctionScreen">新故障屏</router-link>|
      <router-link to="/displayBoard">展板页面</router-link>|
      <router-link to="/trobuleConfiguration">故障配置页面</router-link>|
      <router-link to="/excel-deal">excel解析配置页面</router-link>|
      <router-link to="/internetMoneyNew">网金屏新版</router-link>|
      <router-link to="/userGroup">用户组配置</router-link>|
      <router-link to="/tuopu">用户组配置</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      status1: true
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>
<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
