<template>
  <!-- 互联网统一认证系统（身份认证）_8 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-top">
        <div class="use-box-top-content">
          <div class="use-box-top-item web1 statusChange"
               data-name='168.1.44.172'>
            <div>WEBLOGIC应用A</div>
            <div>168.1.44.172</div>
          </div>
          <div class="use-box-top-item web2 statusChange"
               data-name='168.1.44.173'>
            <div>WEBLOGIC应用B</div>
            <div>168.1.44.173</div>
          </div>
          <div class="use-box-top-item web3 statusChange"
               data-name='168.1.44.174'>
            <div>WEBLOGIC应用C</div>
            <div>168.1.44.174</div>
          </div>
          <div class="use-box-top-item web4 statusChange"
               data-name='168.1.44.175'>
            <div>WEBLOGIC应用D</div>
            <div>168.1.44.175</div>
          </div>
          <div class="use-box-top-item web5 statusChange"
               data-name='168.1.44.106'>
            <div>WEBLOGIC应用E</div>
            <div>168.1.44.106</div>
          </div>
          <div class="use-box-top-item web6 statusChange"
               data-name='168.1.44.128'>
            <div>WEBLOGIC应用F</div>
            <div>168.1.44.128</div>
          </div>
          <div class="use-box-top-item web7 statusChange"
               data-name='168.1.44.252'>
            <div>WEBLOGIC应用G</div>
            <div>168.1.44.252</div>
          </div>
          <div class="use-box-top-item web8 statusChange"
               data-name='168.1.44.253'>
            <div>WEBLOGIC应用H</div>
            <div>168.1.44.253</div>
          </div>

        </div>
        <!-- 数据库主机 -->
        <div class="db-device">
          <div class="batch batch-pos1  statusChange"
               data-name='192.169.4.195'>
            <div class="batch-item ">
              <div>数据库主机</div>
              <div>192.169.4.195</div>
            </div>
          </div>
          <div class="batch batch-pos2 statusChange"
               data-name='192.168.4.196'>
            <div class="batch-item ">
              <div>数据库备机</div>
              <div>192.168.4.196</div>
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
              <div>批处理层</div>
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
      '168.1.44.172': 'E',
      '168.1.44.173': 'E',
      '168.1.44.174': 'W',
      '168.1.44.175': 'W',
      '168.1.44.106': 'E',
      '168.1.44.128': 'W',
      '168.1.44.252': 'E',
      '168.1.44.253': 'W',
      '192.169.4.195': 'E',
      '192.168.4.196': 'W',
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
      let arr2 = document.getElementsByClassName('statusChange')
      let arrList1 = ['168.1.44.172', '168.1.44.173', '168.1.44.174', '168.1.44.175', '168.1.44.106', '168.1.44.128', '168.1.44.252', '168.1.44.253']
      let arrList2 = ['192.169.4.195', '192.168.4.196']
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-warning')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg2-warning')
          }
        } else if (data[arr2[i].dataset.name] == 'E') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-error')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg2-error')
          }
        }
      }
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
  height: 86px;
  line-height: 25px;
  background-image: url(./img/leftBlue.png);
  background-size: 100% 100%;
  font-size: 16px;
  letter-spacing: 3px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding-top: 20px;
  margin-left: 60px;
}

.use-box-top-content .web1 {
  position: absolute;
  top: 65px;
  left: 150px;
}
.use-box-top-content .web2 {
  position: absolute;
  top: 65px;
  left: 400px;
}
.use-box-top-content .web3 {
  position: absolute;
  top: 65px;
  left: 820px;
}
.use-box-top-content .web4 {
  position: absolute;
  top: 65px;
  left: 1070px;
}
.use-box-top-content .web5 {
  position: absolute;
  top: 279px;
  left: 150px;
}
.use-box-top-content .web6 {
  position: absolute;
  top: 279px;
  left: 400px;
}
.use-box-top-content .web7 {
  position: absolute;
  top: 279px;
  left: 820px;
}
.use-box-top-content .web8 {
  position: absolute;
  top: 279px;
  left: 1070px;
}

.batch {
  width: 200px;
  height: 110px;
  background-image: url(./img/db-blue.png);
  background-size: 100% 100%;
  overflow: hidden;
}

.batch-item {
  width: 192px;
  height: 60px;
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 30px;
  margin-left: 10px;
}

.batch-pos1 {
  position: absolute;
  top: 541px;
  left: 448px;
}
.batch-pos2 {
  position: absolute;
  top: 541px;
  left: 891px;
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
  font-size: 24px;
  letter-spacing: 3px;
  writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
  margin-left: 15px;
}

.layer-pos1 {
  position: absolute;
  top: 148px;
  left: 120px;
}

.layer-pos2 {
  position: absolute;
  top: 515px;
  left: 180px;
}
.bg1-error {
  background: url(./img/leftRed.png);
  background-size: 100% 100%;
}
.bg1-warning {
  background: url(./img/leftYellow.png);
  background-size: 100% 100%;
}
.bg2-error {
  background: url(./img/db-red.png);
  background-size: 100% 100%;
}
.bg2-warning {
  background: url(./img/db-yellow.png);
  background-size: 100% 100%;
}
</style>