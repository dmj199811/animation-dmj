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
          <div class="money-box-bg">
            <div class="money-title1">
              应用层
            </div>
            <div class="money-title2">
              数据库层
            </div>
            <div class="money-box1 money-box zbStatusChange"
                 data-name='168.1.14.58'>
              <span>交易服务器TSS1</span><br />
              <span>168.1.14.58</span>
            </div>
            <div class="money-box2 money-box zbStatusChange"
                 data-name='168.1.14.59'>
              <span>交易服务器TSS2</span> <br />
              <span>168.1.14.59</span>
            </div>
            <div class="money-box3 money-box zbStatusChange"
                 data-name='168.1.14.56'>
              <span>管理服务器MSS1</span> <br />
              <span>168.1.14.56</span>
            </div>
            <div class="money-box4 money-box zbStatusChange"
                 data-name='168.1.14.62'>
              <span>批量服务器BH01</span> <br />
              <span>168.1.14.62</span>
            </div>

            <div class="money-box5 money-box zbStatusChange"
                 data-name='168.1.14.60'>
              <span>交易服务器TSS3</span><br />
              <span>168.1.14.60</span>
            </div>
            <div class="money-box6 money-box zbStatusChange"
                 data-name='168.1.14.61'>
              <span>交易服务器TSS4</span> <br />
              <span>168.1.14.61</span>
            </div>
            <div class="money-box7 money-box zbStatusChange"
                 data-name='168.1.14.57'>
              <span>管理服务器MSS2</span> <br />
              <span>168.1.14.57</span>
            </div>
            <div class="money-box8 money-box zbStatusChange"
                 data-name='168.1.14.63'>
              <span>批量服务器BH02</span> <br />
              <span>168.1.14.63</span>
            </div>
            <div class="money-title3">
              批处理层
            </div>
            <div class="money-box-data zbStatusChange"
                 data-name='168.1.14.55'>
              数据库主机<br />
              168.1.14.55
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
      '168.1.14.55': 'W',
      '168.1.14.56': 'W',
      '168.1.14.57': 'W',
      '168.1.14.58': 'N',
      '168.1.14.59': 'E',
      '168.1.14.60': 'W',
      '168.1.14.61': 'E',
      '168.1.14.62': 'W',
      '168.1.14.63': 'W',
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
      let arrList1 = ['168.1.14.56', '168.1.14.57', '168.1.14.58',
        '168.1.14.59', '168.1.14.60', '168.1.14.61', '168.1.14.62', '168.1.14.63',]
      let arrList2 = ['168.1.14.55']
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
.money-box-bg {
  position: absolute;
  top: 20px;
  left: 55px;
  width: 1338px;
  height: 605px;
  background: url(./img/bg.png);
  background-size: 100% 100%;
}
.money-box-bg .money-title1 {
  position: absolute;
  top: 105px;
  left: 41px;
  box-sizing: border-box;
  width: 56px;
  height: 158px;
  padding-left: 19px;
  font-size: 18px;
  line-height: 20px;
  padding-right: 14px;
  padding-top: 49px;
  color: #9dc9ff;
  font-weight: bold;
  background: url(./img/side-blue.png);
  background-size: 100% 100%;
}
.money-box-bg .money-title2 {
  position: absolute;
  top: 437px;
  left: 101px;
  box-sizing: border-box;
  width: 56px;
  height: 158px;
  padding-left: 19px;
  font-size: 18px;
  line-height: 20px;
  padding-right: 19px;
  padding-top: 38px;
  color: #9dc9ff;
  font-weight: bold;
  background: url(./img/side-blue.png);
  background-size: 100% 100%;
}
.money-box-bg .money-title3 {
  position: absolute;
  top: 105px;
  right: 37px;
  box-sizing: border-box;
  width: 56px;
  height: 158px;
  padding-left: 19px;
  font-size: 18px;
  line-height: 20px;
  padding-right: 19px;
  padding-top: 38px;
  color: #9dc9ff;
  font-weight: bold;
  background: url(./img/side-blue.png);
  background-size: 100% 100%;
}
.money-box-bg .money-box {
  position: absolute;
  height: 91px;
  width: 183px;
  background: url(./img/leftBlue.png);
  background-size: 100% 100%;
  padding-top: 20px;
  text-align: center;
  box-sizing: border-box;
}
.money-box-bg .money-box1 {
  top: 25px;
  left: 140px;
}
.money-box-bg .money-box2 {
  top: 25px;
  left: 383px;
}
.money-box-bg .money-box3 {
  top: 25px;
  left: 697px;
}
.money-box-bg .money-box4 {
  top: 25px;
  left: 1021px;
}
.money-box-bg .money-box5 {
  top: 228px;
  left: 140px;
}
.money-box-bg .money-box6 {
  top: 228px;
  left: 383px;
}
.money-box-bg .money-box7 {
  top: 228px;
  left: 697px;
}
.money-box-bg .money-box8 {
  top: 228px;
  left: 1021px;
}
.money-box-bg .money-box-data {
  position: absolute;
  top: 454px;
  left: 525px;
  width: 179px;
  height: 121px;
  background: url(./img/rightBlue.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 35px;
  text-align: center;
}
.money-box-bg .money-box span:first-child {
  font-weight: bold;
}
.money-box-bg .core-bg1-error {
  background: url(./img/leftRed.png);
  background-size: 100% 100%;
}
.money-box-bg .core-bg1-warning {
  background: url(./img/leftYellow.png);
  background-size: 100% 100%;
}
.money-box-bg .core-bg2-error {
  background: url(./img/rightRed.png);
  background-size: 100% 100%;
}
.money-box-bg .core-bg2-warning {
  background: url(./img/rightYellow.png);
  background-size: 100% 100%;
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