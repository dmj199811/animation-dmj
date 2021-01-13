<template>
  <!-- 贵金属_7 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-top">
        <div class="use-box-top-content">
          <div class="use-box-top-item web1 statusChange"
               data-name='192.168.4.190'>
            <div>应用服务器1</div>
            <div>192.168.4.190</div>
          </div>
          <div class="use-box-top-item web2 statusChange"
               data-name='192.168.4.191'>
            <div>应用服务器2</div>
            <div>192.168.4.191</div>
          </div>
          <div class="use-box-top-item web3 statusChange"
               data-name='192.168.4.192'>
            <div>应用服务器3</div>
            <div>192.168.4.192</div>
          </div>
          <div class="use-box-top-item web4 statusChange"
               data-name='192.168.4.193'>
            <div>WEB服务器1</div>
            <div>192.168.4.193</div>
          </div>
          <div class="use-box-top-item web5 statusChange"
               data-name='192.168.4.194'>
            <div>WEB服务器2</div>
            <div>192.168.4.194</div>
          </div>

        </div>
        <!-- 数据库主机 -->
        <div class="db-device">
          <div class="batch batch-pos1 statusChange"
               data-name='192.168.4.195'>
            <div class="batch-item ">
              <div>数据库主机</div>
              <div>192.168.4.195</div>
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
          <div class="layer layer-pos1 statusChange">
            <div class="layer-item">
              <div>应用层</div>
            </div>
          </div>
          <div class="layer layer-pos2 statusChange">
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
      '192.168.4.190': 'E',
      '192.168.4.191': 'W',
      '192.168.4.192': 'E',
      '192.168.4.193': 'W',
      '192.168.4.194': 'E',
      '192.168.4.195': 'W',
      '192.168.4.196': 'E',
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
      let arrList1 = ['192.168.4.190', '192.168.4.191', '192.168.4.192', '192.168.4.193', '192.168.4.194']
      let arrList2 = ['192.168.4.195', '192.168.4.196']
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
  top: 152px;
  left: 150px;
}
.use-box-top-content .web2 {
  position: absolute;
  top: 152px;
  left: 380px;
}
.use-box-top-content .web3 {
  position: absolute;
  top: 152px;
  left: 620px;
}
.use-box-top-content .web4 {
  position: absolute;
  top: 152px;
  left: 870px;
}
.use-box-top-content .web5 {
  position: absolute;
  top: 152px;
  left: 1090px;
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
  font-size: 24px;
  letter-spacing: 3px;
  writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
  writing-mode: tb-lr; /*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
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