<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box2">
      核心系统物理部署图
      <div class="outer-box1 outer-box ">
        <div class="title-box">
          接入<br>
          分发层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.20'>
          <span>CTIN01</span>
          <span>
            192.166.130.20
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.21'>
          <span>CTIN02</span>
          <span>
            192.166.130.21
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.22'>
          <span>CTIN03</span>
          <span>
            192.166.130.22
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.23'>
          <span>CTIN04</span>
          <span>
            192.166.130.23
          </span>
        </div>
      </div>
      <div class="outer-box2 outer-box ">
        <div class="title-box">
          CTSP<br>
          服务层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.24'>
          <span>
            CTSP01
          </span>
          <span>
            192.166.130.24
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.25'><span>
            CTSP02
          </span>
          <span>
            192.166.130.25
          </span></div>
        <div class="model-box statusChange"
             data-name='192.166.130.26'><span>
            CTSP03
          </span>
          <span>
            192.166.130.26
          </span></div>
        <div class="model-box statusChange"
             data-name='192.166.130.27'><span>
            CTSP04
          </span>
          <span>
            192.166.130.27
          </span></div>
      </div>
      <div class="outer-box3 outer-box ">
        <div class="title-box">
          OTIP<br>
          转发层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.28'><span>
            OTIP01
          </span>
          <span>
            192.166.130.28
          </span></div>
        <div class="model-box statusChange"
             data-name='192.166.130.29'><span>
            OTIP01
          </span>
          <span>
            192.166.130.29
          </span></div>
        <div class="model-box statusChange"
             data-name='192.166.130.30'><span>
            OTIP01
          </span>
          <span>
            192.166.130.30
          </span></div>
      </div>
      <div class="outer-box4 outer-box ">
        <div class="title-box">
          CTMA定<br>
          时服务层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.31'>
          <span>
            CTSPMA
          </span>
          <span>
            192.166.130.31
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.32'><span>
            CTSPMA
          </span>
          <span>
            192.166.130.32
          </span></div>
      </div>
      <div class="outer-box5 outer-box ">
        <div class="title-box">
          数据库层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.16'><span>
            HXDBZJ
          </span>
          <span>
            192.166.130.16
          </span></div>
        <div class="model-box statusChange"
             data-name='192.166.130.17'><span>
            HXDBZJ
          </span>
          <span>
            192.166.130.17
          </span></div>
      </div>
      <div class="outer-box6 outer-box ">
        <div class="title-box">
          数据<br>
          处理层
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.18'>
          <span>
            HXSJCL01
          </span>
          <span>
            192.166.130.18
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.19'>
          <span>
            HXSJCL01
          </span>
          <span>
            192.166.130.19
          </span>
        </div>
      </div>
      <div class="outer-box7 ">
        <div class="title-box">
          文件服务器
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.37'>
          <span>
            OFEPZJ
          </span>
          <span>
            192.166.130.37
          </span>
        </div>
        <div class="model-box statusChange"
             data-name='192.166.130.38'>
          <span>
            OFEPZJ
          </span>
          <span>
            192.166.130.38
          </span>
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
    let b = {
      '192.166.130.20': 'W',
      '192.166.130.21': 'W',
      '192.166.130.22': 'W',
      '192.166.130.23': 'W',
      '192.166.130.24': 'W',
      '192.166.130.25': 'W',
      '192.166.130.26': 'W',
      '192.166.130.27': 'W',
      '192.166.130.28': 'W',
      '192.166.130.29': 'W',
      '192.166.130.30': 'W',
      '192.166.130.31': 'W',
      '192.166.130.32': 'W',
      '192.166.130.16': 'W',
      '192.166.130.17': 'W',
      '192.166.130.18': 'W',
      '192.166.130.19': 'W',
      '192.166.130.37': 'E',
      '192.166.130.38': 'W',
    }
    this.dataToArray2(b)
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {

    dataToArray2 (data) {
      let arr2 = document.getElementsByClassName('statusChange')
      for (let i = 0; i < arr2.length; i++) {
        if (data[arr2[i].dataset.name] == 'N') {
        }
        else if (data[arr2[i].dataset.name] == 'W') {
          arr2[i].classList.add('bg1-warning')

        } else if (data[arr2[i].dataset.name] == 'E') {
          arr2[i].classList.add('bg1-error')
        }
      }
    },
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },

  }
}
</script>
<style lang="less" scoped>
.box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
  transform-origin: 0 0;
}
.use-box2 {
  position: rela;
  font-size: 18px;
  width: 1500px;
  box-sizing: border-box;
  height: 720px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
  position: relative;
  font-size: 14px;
  background-image: url(./img/bg.png);
  background-size: 100% 100%;
  .outer-box {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
  }
  .outer-box1 {
    top: 70px;
    left: 186px;
    width: 684px;
    height: 87px;
    background: url(./img/outer-border1.png);
    background-size: 100% 100%;
  }
  .outer-box2 {
    top: 186px;
    left: 186px;
    width: 684px;
    height: 87px;
    background: url(./img/outer-border1.png);
    background-size: 100% 100%;
  }
  .outer-box3 {
    top: 300px;
    left: 186px;
    width: 538px;
    height: 87px;
    background: url(./img/outer-border5.png);
    background-size: 100% 100%;
  }
  .outer-box4 {
    top: 410px;
    left: 186px;
    width: 392px;
    height: 87px;
    background: url(./img/outer-border2.png);
    background-size: 100% 100%;
  }
  .outer-box5 {
    top: 596px;
    left: 186px;
    width: 392px;
    height: 87px;
    background: url(./img/outer-border2.png);
    background-size: 100% 100%;
  }
  .outer-box6 {
    top: 596px;
    left: 996px;
    width: 392px;
    height: 87px;
    background: url(./img/outer-border2.png);
    background-size: 100% 100%;
  }
  .outer-box7 {
    position: absolute;
    align-items: center;
    box-sizing: border-box;
    top: 31px;
    left: 1216px;
    width: 170px;
    height: 474px;
    background: url(./img/outer-border3.png);
    background-size: 100% 100%;
  }
  .outer-box7 .model-box {
    margin: 0 auto;
    margin-top: 18px;
    display: block;
  }
  .outer-box7 .title-box {
    color: #9dc9ff;
    font-weight: bold;
    width: 100%;
    height: 40px;
    padding-top: 18px;
    text-align: center;
  }
  .model-box {
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
  .model-box span:first-child {
    font-weight: bold;
  }
  .title-box {
    color: #9dc9ff;
    box-sizing: border-box;
    font-weight: bold;
    width: 60px;
    display: inline-block;
  }
  .bg1-error {
    background: url(./img/box-bg-error.png);
    background-size: 100% 100%;
  }
  .bg1-warning {
    background: url(./img/box-bg-warning.png);
    background-size: 100% 100%;
  }
}
</style>