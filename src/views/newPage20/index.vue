<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box">
      <span class="img-title1"
            data-num='0'>
        页面1
      </span>/
      <span class="img-title1"
            data-num='1'>
        页面2
      </span>
      <div class="img-out-box">
        <div class="img-box box1">
          <div class="metal-box-bg">
            <div class="metal-title1">
              接入层
            </div>
            <div class="metal-title2">
              应用层
            </div>
            <div class="metal-title3">
              数据库层
            </div>
            <div class="metal-box1 metal-box zbStatusChange"
                 data-name='168.1.41.208'>
              <span> 行情走势前置1</span><br />
              <span>168.1.41.208</span>
            </div>
            <div class="metal-box2 metal-box zbStatusChange"
                 data-name='168.1.41.220'>
              <span> 行情走势前置2</span><br />
              <span>168.1.41.220</span>
            </div>
            <div class="metal-box3 metal-box zbStatusChange"
                 data-name='168.1.41.221'>
              <span> 行情走势前置3</span><br />
              <span>168.1.41.221</span>
            </div>

            <div class="metal-box-app metal-box-app1 zbStatusChange"
                 data-name='168.1.13.125'>
              <span> 行情走势应用1</span>
              <span>168.1.13.125

              </span>
            </div>
            <div class="metal-box-app metal-box-app2 zbStatusChange"
                 data-name='168.1.13.126'>
              <span> 行情走势应用2</span>
              <span>168.1.13.126

              </span>
            </div>
            <div class="metal-box-app metal-box-app3 zbStatusChange"
                 data-name='16.1.0.150'>
              <span> 黄金租借应用1</span>
              <span>16.1.0.150</span>
            </div>
            <div class="metal-box-app metal-box-app4 zbStatusChange"
                 data-name='16.1.0.151'>
              <span> 黄金租借应用2</span>
              <span>16.1.0.151</span>
            </div>

            <div class="metal-box-key1 metal-box-key zbStatusChange"
                 data-name='192.165.112.20'>
              <span>报盘机主机</span><br />
              <span>192.165.112.20</span>
            </div>
            <div class="metal-box-key2 metal-box-key zbStatusChange"
                 data-name='168.1.13.150'>
              <span>风险平台主机</span><br />
              <span>168.1.13.150</span>
            </div>

            <div class="metal-box-agency1 metal-box-agency zbStatusChange"
                 data-name='168.1.13.152'>
              <span>三级代理1</span><br />
              <span>168.1.13.152
              </span>
            </div>
            <div class="metal-box-agency2 metal-box-agency zbStatusChange"
                 data-name='168.1.13.153'>
              <span>三级代理2</span><br />
              <span>168.1.13.153
              </span>
            </div>

            <div class="metal-box-deal1 metal-box-deal zbStatusChange"
                 data-name='168.1.13.148'>
              <span>交易平台1</span><br />
              <span>168.1.13.148</span>
            </div>
            <div class="metal-box-deal2 metal-box-deal zbStatusChange"
                 data-name='168.1.13.146'>
              <span>投资平台1</span><br />
              <span>168.1.13.146</span>
            </div>
            <div class="metal-box-deal3 metal-box-deal zbStatusChange"
                 data-name='168.1.13.147'>
              <span>投资平台2</span><br />
              <span>168.1.13.147</span>
            </div>
            <div class="metal-box-deal4 metal-box-deal zbStatusChange"
                 data-name='168.1.13.149'>
              <span>交易平台2</span><br />
              <span>168.1.13.149</span>
            </div>

            <div class="metal-box-data zbStatusChange"
                 data-name='192.169.7.29'>
              数据库主机<br />
              192.169.7.29

            </div>
            <div class="metal-box-data2">
              黄金租借<br />数据库主机
            </div>
          </div>
        </div>
        <!-- <div class="img-box box2">
          我是页面2 alkdjfalskdjfas;dlkfjasl;dfkjasdl;kj
        </div>
        <div class="img-box box3">
          我是页面三 12341341234123402394850192342123412
        </div> -->
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
    let a = {
      '168.1.41.208': 'W',
      '168.1.41.220': 'W',
      '168.1.41.221': 'W',
      '168.1.13.125': 'W',
      '168.1.13.126': 'E',
      '16.1.0.150': 'W',
      '16.1.0.151': 'E',
      '192.165.112.20': 'W',
      '168.1.13.150': 'E',
      '168.1.13.152': 'E',
      '168.1.13.153': 'W',
      '168.1.13.146': 'W',
      '168.1.13.147': 'E',
      '168.1.13.148': 'W',
      '168.1.13.149': 'W',
      '192.169.7.29': 'W',
    }
    this.dataToArrayZb(a)
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    dataToArrayZb (data) {
      let arr2 = document.getElementsByClassName('zbStatusChange')
      let arrList1 = []
      let arrList2 = ['168.1.41.208', '168.1.41.220', '168.1.41.221']
      let arrList3 = ['16.1.0.150', '16.1.0.151', '168.1.13.125', '168.1.13.126']
      let arrList4 = ['168.1.13.146', '168.1.13.147', '168.1.13.148', '168.1.13.149']
      let arrList5 = ['168.1.13.150', '192.165.112.20', '192.169.7.29']
      let arrList6 = ['168.1.13.152', '168.1.13.153']
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-warning')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg2-warning')
          } else if (arrList3.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg3-warning')
          } else if (arrList4.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg4-warning')
          } else if (arrList5.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg5-warning')
          } else if (arrList6.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg6-warning')
          }
        } else if (data[arr2[i].dataset.name] == 'E') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg1-error')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg2-error')
          } else if (arrList3.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg3-error')
          } else if (arrList4.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg4-error')
          } else if (arrList5.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg5-error')
          } else if (arrList6.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('bg6-error')
          }
        }
      }
    },
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
  }
}
</script>
<style lang="less" >
.metal-box-bg {
  position: absolute;
  top: 32px;
  left: 30px;
  width: 1390px;
  height: 594px;
  background: url(./img/bg.png);
  background-size: 100% 100%;
  .metal-title1 {
    position: absolute;
    top: 38px;
    left: 31px;
    box-sizing: border-box;
    width: 38px;
    height: 114px;
    padding-left: 11px;
    font-size: 15px;
    line-height: 18px;
    padding-right: 11px;
    padding-top: 33px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .metal-title2 {
    position: absolute;
    top: 244px;
    left: 31px;
    box-sizing: border-box;
    width: 36px;
    height: 114px;
    padding-left: 11px;

    font-size: 18px;
    line-height: 20px;
    padding-right: 14px;
    padding-top: 33px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .metal-title3 {
    position: absolute;
    top: 470px;
    left: 31px;
    box-sizing: border-box;
    width: 36px;
    height: 114px;
    padding-left: 11px;

    font-size: 18px;
    line-height: 20px;
    padding-right: 14px;
    padding-top: 33px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .metal-box {
    font-size: 14px;
    position: absolute;
    height: 84px;
    width: 118px;
    background: url(./img/blue.png);
    background-size: 100% 100%;
    padding-top: 11px;
    text-align: center;
    box-sizing: border-box;
  }
  .metal-box1 {
    top: 35px;
    left: 925px;
  }
  .metal-box2 {
    top: 35px;
    left: 1085px;
  }
  .metal-box3 {
    top: 35px;
    left: 1245px;
  }

  .metal-box-app {
    font-size: 14px;
    position: absolute;
    height: 39px;
    line-height: 39px;
    width: 220px;
    background: url(./img/box-bg-normal3.png);
    background-size: 100% 100%;
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .metal-box-app1 {
    top: 245px;
    left: 1164px;
  }

  .metal-box-app2 {
    top: 318px;
    left: 1164px;
  }
  .metal-box-app3 {
    top: 251px;
    left: 73px;
  }

  .metal-box-app4 {
    top: 311px;
    left: 73px;
  }

  .metal-box-key {
    font-size: 14px;
    position: absolute;
    height: 60px;
    width: 123px;
    background: url(./img/box-bg-normal5.png);
    background-size: 100% 100%;
    padding-top: 11px;
    text-align: center;
    box-sizing: border-box;
  }

  .metal-box-key1 {
    top: 226.9px;
    left: 973px;
  }
  .metal-box-key2 {
    top: 226.9px;
    left: 665px;
  }

  .metal-box-agency {
    font-size: 14px;
    position: absolute;
    height: 60px;
    width: 148px;
    background: url(./img/box-bg-normal6.png);
    background-size: 100% 100%;
    padding-top: 11px;
    padding-left: 56px;
    text-align: center;
    box-sizing: border-box;
  }

  .metal-box-agency1 {
    top: 227px;
    left: 804px;
  }
  .metal-box-agency2 {
    top: 315px;
    left: 804px;
  }

  .metal-box-deal {
    font-size: 14px;
    position: absolute;
    height: 61px;
    width: 123px;
    background: url(./img/box-bg-normal4.png);
    background-size: 100% 100%;
    padding-top: 11px;

    text-align: center;
    box-sizing: border-box;
  }

  .metal-box-deal1 {
    top: 225px;
    left: 478px;
  }

  .metal-box-deal2 {
    top: 225px;
    left: 337px;
  }

  .metal-box-deal3 {
    top: 315px;
    left: 337px;
  }

  .metal-box-deal4 {
    top: 315px;
    left: 478px;
  }

  .metal-box-data {
    font-size: 14px;
    position: absolute;
    top: 487px;
    left: 450px;
    width: 143px;
    height: 80px;
    background: url(./img/box-bg-normal5.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 18px;
    text-align: center;
  }
  .metal-box-data2 {
    font-size: 14px;
    position: absolute;
    top: 487px;
    left: 80px;
    width: 143px;
    height: 80px;
    background: url(./img/box-bg-normal5.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 18px;
    text-align: center;
  }
  .metal-box span:first-child {
    font-weight: bold;
  }
  .bg1-error {
    background: url(./img/box-bg-error1.png);
    background-size: 100% 100%;
  }
  .bg1-warning {
    background: url(./img/box-bg-warning1.png);
    background-size: 100% 100%;
  }
  .bg2-error {
    background: url(./img/box-bg-error2.png);
    background-size: 100% 100%;
  }
  .bg2-warning {
    background: url(./img/box-bg-warning2.png);
    background-size: 100% 100%;
  }
  .bg3-error {
    background: url(./img/box-bg-error3.png);
    background-size: 100% 100%;
  }
  .bg3-warning {
    background: url(./img/box-bg-warning3.png);
    background-size: 100% 100%;
  }
  .bg4-error {
    background: url(./img/box-bg-error4.png);
    background-size: 100% 100%;
  }
  .bg4-warning {
    background: url(./img/box-bg-warning4.png);
    background-size: 100% 100%;
  }
  .bg5-error {
    background: url(./img/box-bg-error5.png);
    background-size: 100% 100%;
  }
  .bg5-warning {
    background: url(./img/box-bg-warning5.png);
    background-size: 100% 100%;
  }
  .bg6-error {
    background: url(./img/box-bg-error6.png);
    background-size: 100% 100%;
  }
  .bg6-warning {
    background: url(./img/box-bg-warning6.png);
    background-size: 100% 100%;
  }
}
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
  height: 637px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
  position: relative;
  background-size: 100% 100%;
}
.use-box > span:first-child {
  margin-left: 30px;
}
.img-out-box {
  width: 4600px;
}
.img-box {
  vertical-align: top;
  height: 645px;
  width: 1450px;
  display: inline-block;
}
.img-title1 {
  font-size: 24px;
  line-height: 30px;
}
.box2 {
  background-image: linear-gradient(160deg, red, #ededed);
}
.box3 {
  background-image: linear-gradient(160deg, yellow, #ededed);
}
</style>