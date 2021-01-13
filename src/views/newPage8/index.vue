<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-top">
        <div class="use-box-top-content">
          <div class="use-box-top-item web1 statusChange"
               data-name='192.166.130.206'>
            <div>应用服务器1</div>
            <div>192.166.130.206</div>
          </div>
          <div class="use-box-top-item web2 statusChange"
               data-name='192.166.130.207'>
            <div>应用服务器2</div>
            <div>192.166.130.207</div>
          </div>
          <div class="use-box-top-item web3 statusChange"
               data-name='192.166.130.208'>
            <div>应用服务器3</div>
            <div>192.166.130.208</div>
          </div>
          <div class="use-box-top-item web4 statusChange"
               data-name='192.166.130.202'>
            <div>数据库服务器A</div>
            <div>192.166.130.202</div>
          </div>
          <div class="use-box-top-item web5 statusChange"
               data-name='192.166.130.203'>
            <div>数据库服务器B</div>
            <div>192.166.130.203</div>
          </div>
          <div class="use-box-top-item web6 statusChange"
               data-name='192.166.130.204'>
            <div>监控主服务器1</div>
            <div>192.166.130.204</div>
          </div>
          <div class="use-box-top-item web7 statusChange"
               data-name='192.166.130.205'>
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
          <div class="layer layer-pos3">
            <div class="layer-item">
              <div>监控层</div>
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
      '192.166.130.202': 'W',
      '192.166.130.203': 'E',
      '192.166.130.204': 'E',
      '192.166.130.205': 'W',
      '192.166.130.206': 'E',
      '192.166.130.207': 'W',
      '192.166.130.208': 'W',
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
      let arrList1 = ['192.166.130.202', '192.166.130.203', '192.166.130.204', '192.166.130.205', '192.166.130.206', '192.166.130.207', '192.166.130.208']
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-warning')
          }
        } else if (data[arr2[i].dataset.name] == 'E') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-error')
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
  height: 95px;
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
  top: 449px;
  left: 764px;
}
.use-box-top-content .web7 {
  position: absolute;
  top: 449px;
  left: 1011px;
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
  top: 140px;
  left: 100px;
}
.layer-pos2 {
  position: absolute;
  top: 410px;
  left: 100px;
}
.layer-pos3 {
  position: absolute;
  top: 410px;
  left: 1300px;
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