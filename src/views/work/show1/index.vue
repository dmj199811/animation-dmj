<template>
  <div class='outer-app'>
    <div class="top-banner"> 我是顶部栏目 <br>
      ps：业务场景在于 顶部banner盒模型不知道具体高度 需要主体盒子填充浏览器主体高度
      <el-input placeholder="请输入高度 数字即可"
                v-model="boxHeight"></el-input>
    </div>
    <div class="body-box"
         ref='centerBox'> 我是中间盒子模型 <br>
      思路为获取浏览器视口高度减去上部分盒子高度 通过js设置body盒子高度即可
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxHeight: '',
    }
  },
  mounted () {
    this.$store.dispatch('changePageShow', { pageShow: false })
    let num = +(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - $('.top-banner').height()
    $('.body-box').height(num)
    window.onresize = () => {
      let num1 = +(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - $('.top-banner').height()
      $('.body-box').height(num1)
    }
  },
  beforeDestroy () {
    console.log(3311)
    this.$store.dispatch('changePageShow', { pageShow: true })
  },
  watch: {
    boxHeight (data) {
      $('.top-banner').height(+data)
      let num1 = +(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - $('.top-banner').height()
      $('.body-box').height(num1)
    }
  },
  beforeDestroy () {
    console.log('销毁')
  }
}
</script>
<style lang="less">
.outer-app {
  text-align: center;
  background: #ededed;
  .top-banner {
    height: 100px;
    overflow-y: scroll;
    font-size: 12px;
  }
  .body-box {
    background: teal;
  }
}
</style>