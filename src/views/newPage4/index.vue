<template>
  <!-- 内部节点管关系图-理财图 -->
  <div class="box">
    <div class="use-box">
      <div class="use-box-bg">
        <!-- 交易服务器 -->
        <div class="deal">
          <div class="deal-server pos1 statusChange"
               data-name='192.168.18.120'>
            <div class="deal-server-item">
              <div>交易服务器TSS2</div>
              <div>192.168.18.120</div>
            </div>
          </div>
          <div class="deal-server pos2 statusChange"
               data-name='192.168.18.122'>
            <div class="deal-server-item">
              <div>交易服务器TSS2</div>
              <div>192.168.18.122</div>
            </div>
          </div>
          <div class="deal-server pos3 statusChange"
               data-name='192.168.18.121'>
            <div class="deal-server-item">
              <div>交易服务器TSS4</div>
              <div>192.168.18.121</div>
            </div>
          </div>
          <div class="deal-server pos4 statusChange"
               data-name='192.168.18.123'>
            <div class="deal-server-item">
              <div>交易服务器TSS4</div>
              <div>192.168.18.123</div>
            </div>
          </div>
          <!-- 管理服务器 -->
          <div>
            <div class="deal-server pos5 statusChange"
                 data-name='192.168.18.119'>
              <div class="deal-server-item">
                <div>管理服务器MSS2</div>
                <div>192.168.18.119</div>
              </div>
            </div>
            <div class="deal-server pos6 statusChange"
                 data-name='192.168.18.118'>
              <div class="deal-server-item">
                <div>管理服务器MSS1</div>
                <div>192.168.18.118</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 批量服务器 -->
        <div class="batch-server">
          <div class="batch batch-pos1  statusChange"
               data-name='192.169.16.10'>
            <div class="batch-item ">
              <div>批量服务器BH01</div>
              <div>192.169.16.10</div>
            </div>
          </div>
          <div class="batch batch-pos2 statusChange"
               data-name='192.169.16.11'>
            <div class="batch-item ">
              <div>批量服务器BH02</div>
              <div>192.169.16.11</div>
            </div>
          </div>
        </div>

        <!-- 数据库主机 -->
        <div class="db-device">
          <div class="batch batch-pos3 statusChange"
               data-name='192.169.16.9'>
            <div class="batch-item ">
              <div>数据库主机</div>
              <div>192.169.16.9</div>
            </div>
          </div>
          <div class="batch batch-pos4 statusChange"
               data-name='192.169.16.8'>
            <div class="batch-item ">
              <div>数据库备机</div>
              <div>192.169.16.8</div>
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
          <div class="layer layer-pos3">
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
      '192.168.18.120': 'W',
      '192.168.18.122': 'E',
      '192.168.18.121': 'E',
      '192.168.18.123': 'W',
      '192.168.18.119': 'E',
      '192.168.18.118': 'W',
      '192.169.16.10': 'W',
      '192.169.16.11': 'E',
      '192.169.16.9': 'E',
      '192.169.16.8': 'W'
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
      let arrList1 = ['192.168.18.120', '192.168.18.122', '192.168.18.121', '192.168.18.123', '192.168.18.119', '192.168.18.118']
      let arrList2 = ['192.169.16.10', '192.169.16.11', '192.169.16.8', '192.169.16.9']
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
}
.use-box div {
  box-sizing: border-box;
}

.use-box-bg {
  width: 100%;
  height: 100%;
  background-image: url(./img/line1.png);
  background-size: 100% 100%;
  position: relative;
}

.deal-server {
  width: 180px;
  height: 70px;
  background-image: url(./img/leftBlue.png);
  background-size: 100% 100%;
  overflow: hidden;
}

.deal-server-item {
  width: 192px;
  height: 60px;
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 10px;
  margin-left: -5px;
}

.pos1 {
  position: absolute;
  top: 58px;
  left: 290px;
}

.pos2 {
  position: absolute;
  top: 209px;
  left: 290px;
}

.pos3 {
  position: absolute;
  top: 58px;
  left: 500px;
}

.pos4 {
  position: absolute;
  top: 209px;
  left: 500px;
}

.pos5 {
  position: absolute;
  top: 58px;
  left: 800px;
}

.pos6 {
  position: absolute;
  top: 209px;
  left: 800px;
}

.batch {
  width: 200px;
  height: 110px;
  background-image: url(./img/rightBlue.png);
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
  top: 34px;
  left: 1070px;
}
.batch-pos2 {
  position: absolute;
  top: 210px;
  left: 1070px;
}
.batch-pos3 {
  position: absolute;
  top: 518px;
  left: 504px;
}

.batch-pos4 {
  position: absolute;
  top: 518px;
  left: 812px;
}

.layer {
  width: 205px;
  height: 40px;
  background-image: url(./img/layerBlue.png);
  background-size: 100% 100%;
  overflow: hidden;
}

.layer-item {
  font-size: 20px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  letter-spacing: 3px;
  text-align: center;
  margin-top: 8px;
}

.layer-pos1 {
  position: absolute;
  top: 358px;
  left: 500px;
}

.layer-pos2 {
  position: absolute;
  top: 358px;
  left: 1065px;
}

.layer-pos3 {
  position: absolute;
  top: 638px;
  left: 650px;
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
  background: url(./img/rightRed.png);
  background-size: 100% 100%;
}
.bg2-warning {
  background: url(./img/rightYellow.png);
  background-size: 100% 100%;
}
</style>