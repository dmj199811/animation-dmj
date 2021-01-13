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
          <div class="core-box-bg abs-box">
            <div class="outer-box1 outer-box ">
              <div class="title-box">
                接入<br>
                分发层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.20'>
                <span>CTIN01</span>
                <span>
                  192.168.54.20
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.21'>
                <span>CTIN02</span>
                <span>
                  192.168.54.21
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.22'>
                <span>CTIN03</span>
                <span>
                  192.168.54.22
                </span>
              </div>
            </div>
            <div class="outer-box2 outer-box ">
              <div class="title-box">
                CTSP<br>
                服务层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.24'>
                <span>CTSP01</span>
                <span>
                  192.168.54.24
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.25'>
                <span>CTSP02</span>
                <span>
                  192.168.54.25
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.26'>
                <span>CTSP03</span>
                <span>
                  192.168.54.26
                </span>
              </div>
            </div>
            <div class="outer-box3 outer-box ">
              <div class="title-box">
                OTIP<br>
                转发层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.28'>
                <span>OTIP01</span>
                <span>
                  192.168.54.28
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.29'>
                <span>OTIP02</span>
                <span>
                  192.168.54.29
                </span>
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.30'>
                <span>OTIP03</span>
                <span>
                  192.168.54.30
                </span>
              </div>
            </div>
            <div class="outer-box4 outer-box ">
              <div class="title-box">
                CTMA定<br>
                时服务层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.32'>
                <span>CTSPMA</span>
                <span>
                  192.168.54.32
                </span>
              </div>
            </div>
            <div class="outer-box5 outer-box ">
              <div class="title-box">
                数据<br>
                处理层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.16'>
                <span>HXDBZJ</span>
                <span>
                  192.168.54.16
                </span>
              </div>
            </div>
            <div class="outer-box6 outer-box ">
              <div class="title-box">
                数据库层
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.18'>
                <span>HXSJCL01</span>
                <span>
                  192.168.54.18
                </span>
              </div>
            </div>
            <div class="outer-box7 ">
              <div class="title-box">
                文件服务器
              </div>
              <div class="model-box zbStatusChange"
                   data-name='192.168.54.37'>
                <span>
                  OFEPZJ
                </span>
                <span>
                  192.168.54.37
                </span>
              </div>
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
      '192.168.54.20': 'W',
      '192.168.54.21': 'E',
      '192.168.54.22': 'E',
      '192.168.54.24': 'E',
      '192.168.54.25': 'W',
      '192.168.54.26': 'E',
      '192.168.54.28': 'E',
      '192.168.54.29': 'E',
      '192.168.54.30': 'W',
      '192.168.54.32': 'W',
      '192.168.54.16': 'W',
      '192.168.54.18': 'E',
      '192.168.54.37': 'E',
    }
    this.dataToArrayZb(a)

    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
    dataToArrayZb (data) {
      let arr2 = document.getElementsByClassName('zbStatusChange')
      let arrList1 = ['192.168.54.20', '192.168.54.21', '192.168.54.22',
        '192.168.54.24', '192.168.54.25', '192.168.54.26', '192.168.54.28',
        '192.168.54.29', '192.168.54.30', '192.168.54.32', '192.168.54.16',
        '192.168.54.18', '192.168.54.37']
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg1-warning')
          }
        } else if (data[arr2[i].dataset.name] == 'E') {
          if (arrList1.indexOf(arr2[i].dataset.name) > -1) {
            arr2[i].classList.add('core-bg1-error')
          }
        }
      }
    }
  }
}
</script>
<style lang="less" >
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
  height: 667px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
  position: relative;
  background-size: 100% 100%;
}
.img-out-box {
  width: 4600px;
  position: relative;
}
.img-box {
  vertical-align: top;
  height: 637px;
  width: 1500px;
  display: inline-block;
}

.core-box-bg {
  position: absolute;
  top: 30px;
  left: 96px;
  height: 546px;
  width: 1081px;
  background-image: url(./img/bg.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
}
.core-box-bg .outer-box1 {
  position: absolute;
  top: 30px;
  left: 80px;
  width: 508px;
  height: 84px;
  background-image: url(./img/outer-border5.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box2 {
  position: absolute;
  top: 134px;
  left: 80px;
  width: 508px;
  height: 84px;
  background-image: url(./img/outer-border5.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box3 {
  position: absolute;
  top: 238px;
  left: 80px;
  width: 508px;
  height: 84px;
  background-image: url(./img/outer-border5.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box4 {
  position: absolute;
  top: 342px;
  left: 80px;
  width: 220px;
  height: 84px;
  background-image: url(./img/outer-border4.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box5 {
  position: absolute;
  top: 501px;
  left: 866px;
  width: 220px;
  height: 84px;
  background-image: url(./img/outer-border4.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box6 {
  position: absolute;
  top: 501px;
  left: 80px;
  width: 220px;
  height: 84px;
  background-image: url(./img/outer-border4.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box7 {
  position: absolute;
  align-items: center;
  box-sizing: border-box;
  top: 0px;
  left: 1080px;
  width: 164px;
  height: 450px;
  background: url(./img/outer-border3.png);
  background-size: 100% 100%;
}
.core-box-bg .outer-box7 .model-box {
  margin: 0 auto;
  margin-top: 18px;
  display: block;
}
.core-box-bg .outer-box7 .title-box {
  color: #9dc9ff;
  font-weight: bold;
  width: 100%;
  height: 40px;
  padding-top: 18px;
  text-align: center;
}
.core-box-bg .model-box {
  height: 63px;
  width: 127px;
  box-sizing: border-box;
  background: url(./img/box-bg-normal.png);
  background-size: 100% 100%;
  display: inline-block;
  padding-top: 10px;
  line-height: 23px;
  text-align: center;
}
.core-box-bg .model-box span:first-child {
  font-weight: bold;
}
.core-box-bg .title-box {
  color: #9dc9ff;
  box-sizing: border-box;
  font-weight: bold;
  width: 60px;
  display: inline-block;
}
.core-box-bg .outer-box4 .title-box {
  width: 74px;
}
.core-box-bg .outer-box5 .title-box {
  width: 74px;
}
.core-box-bg .outer-box6 .title-box {
  width: 74px;
}
.core-box-bg .img-title1 {
  font-size: 24px;
  line-height: 30px;
}
.core-box-bg .core-bg1-error {
  background: url(./img/box-bg-error.png);
  background-size: 100% 100%;
}
.core-box-bg .core-bg1-warning {
  background: url(./img/box-bg-warning.png);
  background-size: 100% 100%;
}
.use-box > span:first-child {
  margin-left: 30px;
}
.box2 {
  background-image: linear-gradient(160deg, red, #ededed);
}
.box3 {
  background-image: linear-gradient(160deg, yellow, #ededed);
}
</style>