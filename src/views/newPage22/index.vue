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
          <div class="app-box-bg">
            <div class="app-title1">
              应用层
            </div>
            <div class="app-title2">
              数据库层
            </div>
            <div class="app-title3">
              监控层
            </div>
            <div class="app-box1 app-box zbStatusChange"
                 data-name='168.1.14.168'>
              <span> 应用服务器1</span><br />
              <span>168.1.14.168
              </span>
            </div>
            <div class="app-box2 app-box zbStatusChange"
                 data-name='168.1.14.173'>
              <span>应用服务器2</span> <br />
              <span>168.1.14.173
              </span>
            </div>
            <div class="app-box3 app-box zbStatusChange"
                 data-name='168.1.14.174'>
              <span>应用服务器3</span> <br />
              <span>168.1.14.174
              </span>
            </div>

            <div class="app-box4 app-box zbStatusChange"
                 data-name='168.1.14.164'>
              <span>数据库服务器A</span> <br />
              <span>168.1.14.164</span>
            </div>
            <div class="app-box5 app-box zbStatusChange"
                 data-name='168.1.14.165'>
              <span>数据库服务器B</span> <br />
              <span>168.1.14.165</span>
            </div>

            <div class="app-box6 app-box zbStatusChange"
                 data-name='168.1.14.166'>
              <span>监控服务器1</span> <br />
              <span>168.1.14.166
              </span>
            </div>
            <div class="app-box7 app-box zbStatusChange"
                 data-name='168.1.14.167'>
              <span>监控服务器2</span> <br />
              <span>168.1.14.167
              </span>
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
      '168.1.14.164': 'W',
      '168.1.14.165': 'E',
      '168.1.14.166': 'W',
      '168.1.14.167': 'E',
      '168.1.14.168': 'E',
      '168.1.14.173': 'E',
      '168.1.14.174': 'E',
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
      let arrList1 = ['168.1.14.164', '168.1.14.165', '168.1.14.166', '168.1.14.167', '168.1.14.168', '168.1.14.173', '168.1.14.174']
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
.app-box-bg {
  position: absolute;
  top: 49px;
  left: 60px;
  width: 1330px;
  height: 545px;
  background: url(./img/bg.png);
  background-size: 100% 100%;
  .app-title1 {
    position: absolute;
    top: 92px;
    left: 41px;
    box-sizing: border-box;
    width: 56px;
    height: 118px;
    padding-left: 19px;
    font-size: 18px;
    line-height: 20px;
    padding-right: 19px;
    padding-top: 29px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .app-title2 {
    position: absolute;
    top: 338px;
    left: 65px;
    box-sizing: border-box;
    width: 56px;
    height: 118px;
    padding-left: 19px;
    font-size: 18px;
    line-height: 20px;
    padding-right: 18px;
    padding-top: 18px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .app-title3 {
    position: absolute;
    top: 337px;
    left: 1233px;
    box-sizing: border-box;
    width: 56px;
    height: 118px;
    padding-left: 19px;
    font-size: 18px;
    line-height: 20px;
    padding-right: 19px;
    padding-top: 24px;
    color: #9dc9ff;
    font-weight: bold;
    background: url(./img/side-blue.png);
    background-size: 100% 100%;
  }
  .app-box {
    position: absolute;
    height: 91px;
    width: 183px;
    background: url(./img/leftBlue.png);
    background-size: 100% 100%;
    padding-top: 26px;
    text-align: center;
    box-sizing: border-box;
  }
  .app-box1 {
    top: 105px;
    left: 140px;
  }
  .app-box2 {
    top: 105px;
    left: 363px;
  }
  .app-box3 {
    top: 105px;
    left: 589px;
  }

  .app-box4 {
    top: 350px;
    left: 143px;
  }
  .app-box5 {
    top: 350px;
    left: 363px;
  }
  .app-box6 {
    top: 350px;
    left: 782px;
  }
  .app-box7 {
    top: 350px;
    left: 1005px;
  }

  .app-box-data {
    position: absolute;
    top: 357px;
    left: 323px;
    width: 179px;
    height: 121px;
    background: url(./img/rightBlue.png);
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 35px;
    text-align: center;
  }
  .app-box span:first-child {
    font-weight: bold;
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