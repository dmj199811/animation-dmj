<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box">
      <span class="img-title1"
            data-num='0'>
        页面1
      </span>
      <span class="img-title1"
            data-num='1'>
        页面2
      </span>
      <div class="img-out-box">
        <div class="img-box box1">
          <div class="inter-out-box">
            <div class="inter-model-box inter-box1 zbStatusChange"
                 data-name='192.169.7.219'>
              <span>WEBLOGIC应用A</span><br><span>192.169.7.219</span>
            </div>
            <div class="inter-model-box inter-box2 zbStatusChange"
                 data-name='192.169.7.220'>
              <span>WEBLOGIC应用B</span><br><span>192.169.7.220</span>
            </div>
            <div class="inter-model-box inter-box3 zbStatusChange"
                 data-name='192.169.7.221'>
              <span>WEBLOGIC应用C</span><br><span>192.169.7.221</span>
            </div>
            <div class="inter-model-box inter-box4 zbStatusChange"
                 data-name='192.169.7.222'>
              <span>WEBLOGIC应用D</span><br><span>192.169.7.222</span>
            </div>
            <div class="inter-model-box inter-box5 zbStatusChange"
                 data-name='16.7.96.157'>
              <span>WEBLOGIC应用E</span><br><span>16.7.96.157</span>
            </div>
            <div class="inter-model-box inter-box6 zbStatusChange"
                 data-name='16.7.96.158'>
              <span>WEBLOGIC应用F</span><br><span>16.7.96.158</span>
            </div>
            <div class="inter-model-box inter-box7 zbStatusChange"
                 data-name='16.7.96.159'>
              <span>WEBLOGIC应用G</span><br><span>16.7.96.159</span>
            </div>
            <div class="inter-model-box inter-box8 zbStatusChange"
                 data-name='16.7.96.160'>
              <span>WEBLOGIC应用H</span><br><span>16.7.96.160</span>
            </div>
            <div class="inter-box9 zbStatusChange"
                 data-name='16.7.96.161'>
              <span>数据库主机</span><br><span>
                16.7.96.161
              </span>
            </div>
            <div class="inter-title1">
              应用层
            </div>
            <div class="inter-title2">
              数据库层
            </div>
          </div>
        </div>
        <div class="img-box box2">
          我是页面2 alkdjfalskdjfas;dlkfjasl;dfkjasdl;kj
        </div>
        <div class="img-box box3">
          我是页面三 12341341234123402394850192342123412
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
    let a = {
      '192.169.7.219': 'W',
      '192.169.7.220': 'E',
      '192.169.7.221': 'W',
      '192.169.7.222': 'W',
      '16.7.96.157': 'W',
      '16.7.96.158': 'W',
      '16.7.96.159': 'W',
      '16.7.96.160': 'W',
      '16.7.96.161': 'N',
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
      let arrList1 = ['192.169.7.219', '192.169.7.220', '192.169.7.221', '192.169.7.222', '16.7.96.157', '16.7.96.158', '16.7.96.159', '16.7.96.160']
      let arrList2 = ['16.7.96.161']
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg1-warning')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg2-warning')
          }
        } else if (data[arr2[i].dataset.name] == 'E') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg1-error')
          } else if (arrList2.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg2-error')
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
.inter-out-box {
  position: absolute;
  top: 0px;
  left: 80px;
  height: 605px;
  width: 1290px;
  background: url(./img/bg.png);
  background-size: 100% 100%;
  .inter-model-box {
    position: absolute;
    background: url(./img/leftBlue.png);
    background-size: 100% 100%;
    height: 91px;
    width: 183px;
    padding-top: 20px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
  .inter-model-box > span:first-child {
    font-weight: bold;
  }
  .inter-box1 {
    top: 25px;
    left: 140px;
  }
  .inter-box2 {
    top: 25px;
    left: 383px;
  }
  .inter-box3 {
    top: 25px;
    left: 804px;
  }
  .inter-box4 {
    top: 25px;
    left: 1047px;
  }
  .inter-box5 {
    top: 228px;
    left: 140px;
  }
  .inter-box6 {
    top: 228px;
    left: 383px;
  }
  .inter-box7 {
    top: 228px;
    left: 804px;
  }
  .inter-box8 {
    top: 228px;
    left: 1047px;
  }
  .inter-box9 {
    position: absolute;
    top: 456px;
    left: 602px;
    height: 121px;
    width: 179px;
    background: url(./img/rightBlue.png);
    background-size: 100% 100%;
    padding-top: 32px;
    box-sizing: border-box;
    text-align: center;
  }
  .inter-box9 > span:first-child {
    font-weight: bold;
  }
  .inter-title1 {
    position: absolute;
    top: 105px;
    left: 40px;
    width: 56px;
    height: 108px;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
    padding-top: 20px;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    color: #9dc9ff;
  }
  .inter-title2 {
    position: absolute;
    top: 467px;
    left: 101px;
    width: 56px;
    height: 108px;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
    padding-top: 14px;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 18px;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
    color: #9dc9ff;
  }
  .core-bg1-error {
    background: url(./img/leftRed.png);
    background-size: 100% 100%;
  }
  .core-bg1-warning {
    background: url(./img/leftYellow.png);
    background-size: 100% 100%;
  }
  .core-bg2-error {
    background: url(./img/rightRed.png);
    background-size: 100% 100%;
  }
  .core-bg2-warning {
    background: url(./img/rightYellow.png);
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
  height: 607px;
  width: 1500px;
  display: inline-block;
  position: relative;
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