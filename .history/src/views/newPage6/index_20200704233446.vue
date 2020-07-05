<template>
<!-- 互联网统一认证系统（身份认证）_8 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-top">
        <div class="use-box-top-content">
          <div class="use-box-top-item web1">
            <div>WEBLOGIC应用A</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web2">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web3">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web4">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web5">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web6">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web7">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web8">
            <div>WEBLOGIC</div>
            <div>168.1.44.172</div>
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
  background-image: url(./img/bg-line.png);
  background-size: 97% 100%;
  position: relative;
}
.use-box div {
  box-sizing: border-box;
}
.use-box-top {

}

.use-box-top-content {

}

.use-box-top-item {
  width: 203px;
  height: 86px;
  line-height:25px;
  background-image: url(./img/leftBlue.png);
  background-size: 100% 100%;
  font-size:16px;
  letter-spacing: 3px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  color:rgba(255,255,255,1);
  text-align: center;
  padding-top: 20px;
  margin-left: 60px;

}

.use-box-top-content .web1 {
  position: absolute;
  top: 65px;
  left: 150px;
}

</style>