<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="outer-box">
    <div class="title-left">可视化大屏切换启动</div>
    <div class="btn-center">
      <div class="btn-outer1"></div>
      <div class="btn-outer2"></div>
      <div class="btn-box">
        <div class="threeAngle"></div>
        <div class="threeAngle2"></div>
      </div>
    </div>
    <div class="title-right">
      <p class="time-title"></p>
      <p class="bank-name">兴业银行 ·张江数据中心</p>

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
    window.onresize = () => {
      this.fullScreen()
    }
    this.getNewTime()
    $('.btn-center').on('click', function () {
      window.open('http://168.7.63.5:8888/aoms/cibinitscreen.do?username=cib&password=1qaz2wsx&type=aim', '_blank')
    })
  },
  methods: {
    fullScreen () {
      $('.outer-box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
    getNewTime () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      var nowDate = year + "." + month + "." + day + '  ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      $('.time-title').text(nowDate)
    }
  }
}
</script>
<style lang="less" scoped>
.outer-box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
  background: url(./img/bg.png);
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.title-left {
  font-size: 90px;
  width: 1400px;
  text-align: right;
}
.title-right {
  font-size: 90px;
  width: 1400px;
}
.btn-center {
  position: relative;
  width: 460px;
  height: 450px;
}
.btn-outer1 {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 435px;
  height: 425px;
  background: url(./img/sexangle.png);
  background-size: 100% 100%;
  animation: box-shrink 1s infinite linear;
}
.bank-name {
  font-size: 44px;
  color: #8c9cbd;
  margin: 0;
}
.time-title {
  margin: 0;
  line-height: 100px;
}
.btn-outer2 {
  position: absolute;
  width: 460px;
  height: 440px;
  background: url(./img/sexangle.png);
  background-size: 100% 100%;
  animation: box-shrink 1s infinite linear;
}
.btn-box {
  height: 415px;
  width: 415px;
  margin: 20px;
  margin-top: 14px;
  background: url(./img/btn-start.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.threeAngle {
  position: absolute;
  width: 0;
  border: 15px solid transparent;
  border-left: 15px solid #ffa962;
  top: 207px;
  left: 63px;
  display: inline-block;
  animation: threeAngle 1s infinite;
}
.threeAngle2 {
  position: absolute;
  width: 0;
  border: 15px solid transparent;
  border-right: 15px solid #ffa962;
  top: 207px;
  left: 355px;
  display: inline-block;
  animation: threeAngle2 1s infinite;
}
@keyframes box-shrink {
  0% {
    transform: scale(0.99);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(0.99);
  }
}
@keyframes threeAngle {
  0% {
    left: 63px;
  }
  50% {
    left: 83px;
  }
  100% {
    left: 63px;
  }
}
@keyframes threeAngle2 {
  0% {
    left: 355px;
  }
  50% {
    left: 335px;
  }
  100% {
    left: 355px;
  }
}
</style>