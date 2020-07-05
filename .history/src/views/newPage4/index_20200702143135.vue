<template>
  <div class="box">
    <div class="use-box">
      <div class="use-box-bg">
        <div class="deal-server">
          <div class="deal-server-item">
            <span>交易服务器TSS2</span>
            <span>192.168.18.121</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.fullScreen()
    let a = {
      'ATM系统': 'N',
      '网上银行域': 'E',
      'IC借记卡系统': 'N',
      'CFP系统': 'W',
      '电话银行域': 'E',
      '金卡系统': 'N',
      '零售信贷系统': 'W',
      '联机交易转发平台': 'N',
      '核心联机交易平台': 'E',
      'OFEP': 'W',
      '会计辅助管理系统': 'W',
      '业务策略管控平台': 'E',
      '历史检索系统': 'N',
      '企业数据集成平台': 'N',
      '银联数据综合前置系统': 'E',
      '理财卡外包制卡系统': 'W',
      '数据仓库系统': 'E',
      '统一报表系统': 'W',
      '企业CRM系统': 'N'
    }

    this.dataToArray(a)
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
    dataToArray (data) {
      
    }
  }
}
</script>
<style lang="less">
.box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
}
.use-box {
  font-size: 18px;
  width: 1500px;
  box-sizing: border-box;
  height: 720px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
}
.use-box div {
  box-sizing: border-box;
}

.use-box-bg {
  width:  100%;
  height: 100%;
  background-image: url(./img/line.png);
  background-size: 100% 100%;
}

.deal-server {
  width:  240px;
  height: 119px;
  background-image: url(./img/dealBlue.png);
  background-size: 100% 100%;
}

.deal-server-item {
  text-align: center;
  line-height: 0px;
  display: inline-block;
  margin-top: 40px;
}

.deal-server-item span {
  display: inline-block;
  margin-top: 40px;
}

</style>