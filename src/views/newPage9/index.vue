<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="choose-box">
    <div class="choose-btn">

      <div class="location">
        <div class="font surface"></div>
        <div class="right surface"></div>
        <div class="back surface"></div>
        <div class="left surface"></div>
        <div class="top surface"></div>
        <div class="bottom-shadow"></div>
      </div>
      大屏场景单选
    </div>
    <div class="choose-inner">
      <div class="list-item"
           data-name='特别屏幕'>
        <p class="inner-title">李云龙意大利炮故障处理展示屏 <span>双击投屏</span></p>
      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>
      <div class="list-item">

      </div>

    </div>
    <!-- <div class="use-box">
      888
    </div> -->
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
    $(".list-item").on('dblclick', function (e) {
      console.log(e.target.dataset.name)
    })
  },
  methods: {
    fullScreen () {
      $('.choose-box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    }
  }
}
</script>
<style lang="less" scoped>
.choose-box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
  background: url(./img/bg.png);
  overflow: hidden;
}
.choose-btn {
  display: inline-block;
  position: relative;
  width: 161px;
  height: 711px;
  margin-top: 354px;
  margin-left: 160px;
  font-size: 64px;
  box-sizing: border-box;
  padding-top: 200px;
  padding-left: 48px;
  padding-right: 50px;
  line-height: 64px;
  color: white;
  background: url(./img/btn.png);
}
.choose-inner {
  display: inline-block;
  width: 3220px;
  margin-left: 137px;
  vertical-align: top;
  margin-top: 80px;
}
.list-item {
  display: inline-block;
  width: 1000px;
  height: 377px;
  margin-top: 30px;
  margin-right: 70px;
  background-color: teal;
  overflow: hidden;
}
.inner-title {
  margin-top: 317px;
  height: 60px;
  background: #162a52;
  line-height: 60px;
  padding-left: 24px;
  font-size: 32px;
  color: white;
  opacity: 0.8;
}
.inner-title span {
  color: #a1b6e5;
  font-size: 20px;
}
.location {
  position: absolute;
  transform-style: preserve-3d;
  perspective: 200px;
  perspective-origin: center top;
  width: 20px;
  height: 100px;
  left: 50%;
  top: 60px;
  margin-left: -10px;
}
.surface {
  width: 20px;
  height: 30px;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  background-color: #e6483c;
  position: absolute;
  top: 70px;
  left: 0;
  transform-origin: center center;
}
.top.surface {
  width: 20px;
  height: 20px;
  background-color: #ff8077;
  position: absolute;
  top: 61px;
  left: 0;
  transform: rotateX(90deg);
  clip-path: none;
  animation: location_top 5s linear infinite;
}
.bottom-shadow {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  top: 94px;
  left: 5px;
  transform: rotateX(90deg);
  animation: boxShadow 0.8s linear infinite;
}

@keyframes boxShadow {
  0% {
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0),
      0 0 0px 10px rgba(255, 255, 255, 0.2),
      0 0 0px 20px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0px 10px rgba(255, 255, 255, 0.2),
      0 0 0px 20px rgba(255, 255, 255, 0.2), 0 0 0px 30px rgba(255, 255, 255, 0);
  }
}

@keyframes location_top {
  0% {
    transform: rotateY(45deg) rotateX(90deg);
  }
  100% {
    transform: rotateY(-315deg) rotateX(90deg);
  }
}
.font.surface {
  animation: location_font_top1 5s linear infinite;
}
.right.surface {
  animation: location_right_top1 5s linear infinite;
}
.back.surface {
  animation: location_back_top1 5s linear infinite;
}
.left.surface {
  animation: location_left_top1 5s linear infinite;
}
@keyframes location_font_top1 {
  0% {
    background-color: #e6483c;
    transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
  }
  50% {
    background-color: #e6483c;
  }
  75% {
    background-color: #ffaaa3;
  }
  100% {
    background-color: #e6483c;
    transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
  }
}
@keyframes location_right_top1 {
  0% {
    background-color: #ffaaa3;
    transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
  }
  75% {
    background-color: #e6483c;
  }
  100% {
    background-color: #ffaaa3;
    transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
  }
}
@keyframes location_back_top1 {
  0% {
    background-color: #e6483c;
    transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
  }
  25% {
    background-color: #ffaaa3;
  }
  100% {
    background-color: #e6483c;
    transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
  }
}
@keyframes location_left_top1 {
  0% {
    background-color: #ffaaa3;
    transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
  }
  25% {
    background-color: #e6483c;
  }
  50% {
    background-color: #ffaaa3;
  }
  100% {
    background-color: #ffaaa3;
    transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
  }
}
</style>