<template>
  <div class="box">
    <div class="use-box">
      <div class="use-box-bg">


        <div class="deal-server pos1">
            <div class="deal-server-item">
              <div>CTS01服务器</div>
              <div>192.169.0.70</div>
            </div>
        </div>
        <div class="deal-server pos2">
          <div class="deal-server-item">
            <div>CTS02服务器</div>
            <div>192.169.0.71</div>
          </div>
        </div>
        <div class="deal-server pos3">
            <div class="deal-server-item">
              <div>ICS01服务器</div>
              <div>192.169.0.72</div>
            </div>
          </div>
        <div class="deal-server pos4">
            <div class="deal-server-item">
              <div>ICS02服务器</div>
              <div>192.169.0.73</div>
            </div>
          </div>
        <div class="deal-server pos5">
            <div class="deal-server-item">
              <div>DPS01服务器</div>
              <div>192.169.0.74</div>
            </div>
        </div>
        <div class="deal-server pos6">
            <div class="deal-server-item">
              <div>DPS02服务器</div>
              <div>192.169.0.75</div>
            </div>
        </div>
        <div class="deal-server pos7">
            <div class="deal-server-item">
              <div>TSP01服务器</div>
              <div>192.169.0.175</div>
            </div>
        </div>
        <div class="deal-server pos8">
            <div class="deal-server-item">
              <div>TSP02服务器</div>
              <div>192.169.0.176</div>
            </div>
        </div>

        <!-- 数据库主机 -->
        <div class="db-device">
          <div class="batch batch-pos1">
            <div class="batch-item ">
              <div>数据库主机</div>
              <div>192.169.0.78</div>
            </div>
          </div>
          <div class="batch batch-pos2">
            <div class="batch-item ">
              <div>数据库备机</div>
              <div>192.169.0.79</div>
            </div>
          </div>
          <div class="batch batch-pos3">
            <div class="batch-item ">
              <div>KMS主机</div>
              <div>192.169.0.76</div>
            </div>
          </div>
          <div class="batch batch-pos4">
            <div class="batch-item ">
              <div>KMS备机</div>
              <div>192.169.0.77</div>
            </div>
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
          <div class="layer1 layer-pos3">
            <div class="layer-item1">
              <div>加密服务层</div>
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
}
.use-box div {
  box-sizing: border-box;
}

.use-box-bg {
  width:  100%;
  height: 100%;
  background-image: url(./img/bg-line1.png);
  background-size: 100% 100%;
  position: relative;
}
.deal-server {
  width:  150px;
  height: 70px;
  background-image: url(./img/leftBlue.png);
  background-size: 100% 100%;
  overflow: hidden;

  
}

.deal-server-item {
  // width:192px;
  // height:60px;
  font-size:16px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  color:rgba(255,255,255,1);
  line-height:25px;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 10px;
  margin-left: -5px;
}

.deal-server-item > div:nth-child(2) {
  letter-spacing: 1px;
}
.pos1 {
  position: absolute;
  top: 78px;
  left: 160px;
}
.pos2 {
  position: absolute;
  top: 300px;
  left: 160px;
}
.pos3 {
  position: absolute;
  top: 78px;
  left: 370px;
}
.pos4 {
  position: absolute;
  top: 300px;
  left: 370px;
}
.pos5 {
  position: absolute;
  top: 78px;
  left: 580px;
}
.pos6 {
  position: absolute;
  top: 300px;
  left: 580px;
}
.pos7 {
  position: absolute;
  top: 78px;
  left: 790px;
}
.pos8 {
  position: absolute;
  top: 300px;
  left: 790px;
}

.batch {
  width:  200px;
  height: 110px;
  background-image: url(./img/rightBlue.png);
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
  top: 541px;
  left: 225px;
}
.batch-pos2 {
  position: absolute;
  top: 541px;
  left: 672px;
}
.batch-pos3 {
  position: absolute;
  top: 267px;
  left: 1189px;
}
.batch-pos4 {
  position: absolute;
  top: 531px;
  left: 1189px;
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
  writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
  margin-left: 20px;
}

.layer1 {
  width:  205px;
  height: 40px;
  background-image: url(./img/layerBlue.png);
  background-size: 100% 100%;
  overflow: hidden;
}

.layer-item1 {
  font-size:20px;
  font-family:Adobe Heiti Std;
  font-weight:normal;
  color:rgba(255,255,255,1);
  line-height:25px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 8px;
}
.layer-pos1 {
  position: absolute;
  top: 148px;
  left: 80px;
}
.layer-pos2 {
  position: absolute;
  top: 512px;
  left: 80px;
}
.layer-pos3 {
  position: absolute;
  top: 92px;
  left: 1200px;
}


</style>