<template>
<!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-top">
        <div class="use-box-top-content">
          <div class="use-box-top-item web1">
            <div>应用服务器1</div>
            <div>192.166.130.206</div>
          </div>
          <div class="use-box-top-item web2">
            <div>应用服务器2</div>
            <div>192.166.130.207</div>
          </div>
          <div class="use-box-top-item web3">
            <div>应用服务器3</div>
            <div>192.166.130.208</div>
          </div>
          <div class="use-box-top-item web4">
            <div>数据库服务器A</div>
            <div>192.166.130.202</div>
          </div>
          <div class="use-box-top-item web5">
            <div>数据库服务器B</div>
            <div>192.166.130.203</div>
          </div>
          <div class="use-box-top-item web6">
            <div>监控主服务器1</div>
            <div>192.166.130.204</div>
          </div>
          <div class="use-box-top-item web7">
            <div>监控主服务器2</div>
            <div>192.166.130.205</div>
          </div>
      
        </div>

                <!-- 层 -->
        <div class="layer-all">
          <div class="layer layer-pos1">
            <div class="layer-item">
              <div>应用层</div>
            </div>
          </div>
          <div class="layer layer-pos2">
            <div class="layer-item">
              <div>数据库层</div>
            </div>
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
<style lang="less" scoped>
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
  height: 95px;
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
  top: 176px;
  left: 130px;
}
.use-box-top-content .web2 {
  position: absolute;
  top: 176px;
  left: 356px;
}
.use-box-top-content .web3 {
  position: absolute;
  top: 176px;
  left: 580px;
}
.use-box-top-content .web4 {
  position: absolute;
  top: 452px;
  left: 125px;
}
.use-box-top-content .web5 {
  position: absolute;
  top: 452px;
  left: 367px;
}
.use-box-top-content .web6 {
  position: absolute;
  top: 452px;
  left: 770px;
}
.use-box-top-content .web7 {
  position: absolute;
  top: 452px;
  left: 367px;
}


.batch {
  width:  200px;
  height: 110px;
  background-image: url(./img/db-blue.png);
  background-size: 100% 100%;
  overflow: hidden;
}

.batch-item {
  width:192px;
  height:60px;
  font-size:16px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  color:rgba(255,255,255,1);
  line-height:25px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 30px;
  margin-left: 10px;
}

.batch-pos1 {
  position: absolute;
  top: 481px;
  left: 343px;
}
.batch-pos2 {
  position: absolute;
  top: 481px;
  left: 1066px;
}
.layer {
  background-image: url(./img/side-blue.png);
  background-size: 100% 100%;
  width: 64px;
  height: 168px;
  display: flex;
  text-align: center;
}

.layer-item {
  line-height: 24px;
  font-size:24px;
  letter-spacing: 3px;
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
  margin-left: 15px;
}


.layer-pos1 {
  position: absolute;
  top: 108px;
  left: 120px;
}

.layer-pos2 {
  position: absolute;
  top: 445px;
  left: 180px;
}

</style>