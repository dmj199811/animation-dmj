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
          <div class="ic-box-bg">
            <div class="ic-title1">
              应用层
            </div>
            <div class="ic-title2">
              数据库层
            </div>
            <div class="ic-title3">
              加密服务器层
            </div>
            <div class="ic-box1 ic-box zbStatusChange"
                 data-name='168.1.14.73'>
              <span> CTS01服务器
              </span><br />
              <span>168.1.14.73</span>
            </div>
            <div class="ic-box2 ic-box zbStatusChange"
                 data-name='168.1.14.75'>
              <span> ICS01服务器
              </span><br />
              <span>168.1.14.75</span>
            </div>
            <div class="ic-box3 ic-box zbStatusChange"
                 data-name='168.1.14.76'>
              <span> DPS01服务器
              </span><br />
              <span>168.1.14.76</span>
            </div>
            <div class="ic-box4 ic-box zbStatusChange"
                 data-name='168.1.14.78'>
              <span>TSP01服务器</span> <br />
              <span>168.1.14.78</span>
            </div>
            <div class="ic-box5 ic-box zbStatusChange"
                 data-name='168.1.14.74'>
              <span> CTS02服务器
              </span><br />
              <span>168.1.14.74</span>
            </div>

            <div class="ic-box-data zbStatusChange"
                 data-name='168.1.14.72'>
              数据库主机<br />
              168.1.14.72
            </div>
            <div class="ic-box-data2 zbStatusChange"
                 data-name='168.1.14.77'>
              KMS主机<br />
              168.1.14.77
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
      '168.1.14.72': 'E',
      '168.1.14.73': 'W',
      '168.1.14.74': 'W',
      '168.1.14.75': 'W',
      '168.1.14.76': 'E',
      '168.1.14.77': 'W',
      '168.1.14.78': 'W',
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
      let arrList1 = ['168.1.14.73', '168.1.14.74', '168.1.14.75', '168.1.14.76', '168.1.14.78']
      let arrList2 = ['168.1.14.72', '168.1.14.77']
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
.ic-box-bg {
  position: absolute;
  top: 60px;
  left: 80px;
  width: 1290px;
  height: 526px;
  background: url(./img/bg.png);
  background-size: 100% 100%;
}
.ic-box-bg .ic-title1 {
  position: absolute;
  top: 26px;
  left: 37px;
  box-sizing: border-box;
  width: 66px;
  height: 168px;
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
.ic-box-bg .ic-title2 {
  position: absolute;
  top: 338px;
  left: 133px;
  box-sizing: border-box;
  width: 56px;
  height: 158px;
  padding-left: 19px;
  font-size: 18px;
  line-height: 20px;
  padding-right: 14px;
  padding-top: 40px;
  color: #9dc9ff;
  font-weight: bold;
  background: url(./img/side-blue.png);
  background-size: 100% 100%;
}
.ic-box-bg .ic-title3 {
  position: absolute;
  top: 338px;
  left: 1101px;
  box-sizing: border-box;
  width: 56px;
  height: 158px;
  padding-left: 19px;
  font-size: 18px;
  line-height: 20px;
  padding-right: 14px;
  padding-top: 27px;
  color: #9dc9ff;
  font-weight: bold;
  background: url(./img/side-blue.png);
  background-size: 100% 100%;
}
.ic-box-bg .ic-box {
  position: absolute;
  height: 91px;
  width: 183px;
  background: url(./img/leftBlue.png);
  background-size: 100% 100%;
  padding-top: 20px;
  text-align: center;
  box-sizing: border-box;
}
.ic-box-bg .ic-box1 {
  top: 65px;
  left: 140px;
}
.ic-box-bg .ic-box2 {
  top: 65px;
  left: 372px;
}
.ic-box-bg .ic-box3 {
  top: 65px;
  left: 604px;
}
.ic-box-bg .ic-box4 {
  top: 65px;
  left: 835px;
}
.ic-box-bg .ic-box5 {
  top: 65px;
  left: 1067px;
}
.ic-box-bg .ic-box-data {
  position: absolute;
  top: 357px;
  left: 310px;
  width: 179px;
  height: 121px;
  background: url(./img/rightBlue.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 35px;
  text-align: center;
}
.ic-box-bg .ic-box-data2 {
  position: absolute;
  top: 355px;
  left: 799px;
  width: 179px;
  height: 121px;
  background: url(./img/rightBlue.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 35px;
  text-align: center;
}
.ic-box-bg .ic-box span:first-child {
  font-weight: bold;
}
.ic-box-bg .core-bg1-error {
  background: url(./img/leftRed.png);
  background-size: 100% 100%;
}
.ic-box-bg .core-bg1-warning {
  background: url(./img/leftYellow.png);
  background-size: 100% 100%;
}
.ic-box-bg .core-bg2-error {
  background: url(./img/rightRed.png);
  background-size: 100% 100%;
}
.ic-box-bg .core-bg2-warning {
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
  height: 650px;
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