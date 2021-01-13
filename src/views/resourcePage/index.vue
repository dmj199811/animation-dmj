<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="resource-bg">
      <div class="resource-title-background"></div>
      <video src="./img/opeare-data-sceen-video.mp4"
             width="3840"
             height="2120"
             autoplay
             muted
             loop
             class="video"></video>
      <div class="resource-main-footer"></div>
      <div class="main-left-outer">
        <div class="care-num-box">
          <video src="./img/care-num-left.mp4"
                 class="care-num-animate"
                 width="212"
                 height="340"
                 autoplay
                 muted
                 loop></video>
          <div class="care-name-content">
            <p>
              当日托管产品上线数
            </p>
            <p>
              88888888只
            </p>
          </div>
        </div>
        <div class="float-circle-box">
          <div>今日上线产品</div>
          <div class="float-top-canvas"
               style="width:100%;height: 600px;position:absolute;top:0;">
            <canvas id="canvas"></canvas>
          </div>
          <div class="circle-container">
            <div class="circle circle1">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
            <div class="circle circle2">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
            <div class="circle circle3">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
            <div class="circle circle4">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
            <div class="circle circle5">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
            <div class="circle circle6">
              <div>产品名称</div>
              <div>运营机构类型</div>
            </div>
          </div>
          <div class="particle-canvas-box"
               id="ParticleCanvasBox"
               style="width:100%;height: 180px;position:absolute;bottom:0;"></div>
        </div>
        <div class="mananger-num">
          <div class="manager-title">
            管理人产品数TOP5
          </div>
          <div class="managerContent1">
            <div class="title">兴业国际信托</div>
            <div class="img"
                 style="color:#F9D34F"> <img src="./img/rank1.png"
                   height='52px'
                   width="59px"
                   alt=""><br>TOP1 </div>
            <div class="num">8888888只</div>
          </div>
          <div class="managerContent1">
            <div class="title">兴业国际信托</div>
            <div class="img"
                 style="color:#FFEFB1"> <img src="./img/rank2.png"
                   height='52px'
                   width="59px"
                   alt=""><br>TOP2 </div>
            <div class="num">8888888只</div>
          </div>
          <div class="managerContent1">
            <div class="title">兴业国际信托</div>
            <div class="img"
                 style="color:#63ACFA"> <img src="./img/rank3.png"
                   height='52px'
                   width="59px"
                   alt=""><br>TOP3 </div>
            <div class="num">8888888只</div>
          </div>
          <div class="managerContent1">
            <div class="title">兴业国际信托</div>
            <div class="img"
                 style="color:#1E6FD9;transform:none">TOP4 </div>
            <div class="num">8888888只</div>
          </div>
          <div class="managerContent1">
            <div class="title">兴业国际信托</div>
            <div class="img"
                 style="color:#1E6FD9;transform:none">TOP5</div>
            <div class="num">8888888只</div>
          </div>
        </div>
      </div>
      <div class="main-center-box">
        <div class="title-left">
          <div class="left-box1">
            兴业托管汇总规模
          </div>
          <div class="num-box">
            8888888亿
          </div>
        </div>
        <div class="title-right">
          <div class="num-box">
            8888888亿
          </div>
          <div class="left-box1"
               style="margin-left:20px">
            兴业托管产品总数
          </div>
        </div>
        <div class="map-box">
          <div class="title">
            各分行规模和各分行产品
          </div>
          <div class="schedule">
            <div class="title">
              分行规模TOP5
            </div>
            <div class="inner1">
              <div class="left">北京</div>
              <div class="center">
                <div class="center-yellow">
                </div>
              </div>
              <div class="right">888888亿</div>
            </div>
            <div class="inner1">
              <div class="left">上海</div>
              <div class="center">
                <div class="center-yellow">
                </div>
              </div>
              <div class="right">888888亿</div>
            </div>
            <div class="inner1">
              <div class="left">深圳</div>
              <div class="center">
                <div class="center-yellow">
                </div>
              </div>
              <div class="right">888888亿</div>
            </div>
            <div class="inner1">
              <div class="left">成都</div>
              <div class="center">
                <div class="center-yellow">
                </div>
              </div>
              <div class="right">888888亿</div>
            </div>
            <div class="inner1">
              <div class="left">杭州</div>
              <div class="center">
                <div class="center-yellow">
                </div>
              </div>
              <div class="right">888888亿</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-right-box">
        <div style="font-size:36px">
          兴业托管规模变动情况
        </div>
        <div class="echarts-box"></div>
        <div class="fund-title">
          <div class="first-word">基</div>
          <div class="first-word">金</div>
          排行
        </div>
        <div class="fund-box">
          <div class="fund-left">
            <svg class='fund-circle'
                 width="200px"
                 height="200px"
                 viewBox="0 0 138 138">
              <defs>
                <linearGradient id="grad"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%">
                  <stop offset="0%"
                        style="stop-color: #3f95e9;" />
                  <stop offset="100%"
                        style="stop-color: #68e1ec;" />
                </linearGradient>
              </defs>
              <image x="52"
                     y="52"
                     width="34"
                     height="34"
                     xlink:href="./img/money.png" />
              <circle cx="70"
                      cy="70"
                      r="58"
                      stroke-linecap="round"
                      stroke-width="4"
                      fill="none"
                      stroke="#3267cc"></circle>
              <circle class="fund-outer-circle1"
                      cx="70"
                      cy="70"
                      r="58"
                      stroke-width="8"
                      stroke-dashoffset="0"
                      stroke-linecap="round"
                      fill="none"
                      stroke="url(#grad)"></circle>
              <circle class="fund-inner-circle2"
                      stroke-linecap='round'
                      cx="70"
                      cy="70"
                      r="30"
                      stroke-dashoffset="0"
                      stroke-width="6"
                      fill="none"
                      stroke="url(#grad)"></circle>
            </svg>
          </div>
          <div class="fund-right">
            <div class="left-box">
              汇总规模
              <p>8888888亿</p>
            </div>
            <div class="right-box">
              年初同比
              <p>23.4%</p>
            </div>
          </div>
        </div>
        <div class="fund-box">
          <div class="fund-left">
            <svg class='fund-circle'
                 width="200px"
                 height="200px"
                 viewBox="0 0 138 138">
              <defs>
                <linearGradient id="grad"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%">
                  <stop offset="0%"
                        style="stop-color: #3f95e9;" />
                  <stop offset="100%"
                        style="stop-color: #68e1ec;" />
                </linearGradient>
              </defs>
              <image x="52"
                     y="52"
                     width="34"
                     height="34"
                     xlink:href="./img/product.png" />
              <circle cx="70"
                      cy="70"
                      r="58"
                      stroke-linecap="round"
                      stroke-width="4"
                      fill="none"
                      stroke="#3267cc"></circle>
              <circle class="fund-outer-circle1"
                      cx="70"
                      cy="70"
                      r="58"
                      stroke-width="8"
                      stroke-dashoffset="0"
                      stroke-linecap="round"
                      fill="none"
                      stroke="url(#grad)"></circle>
              <circle class="fund-inner-circle2"
                      stroke-linecap='round'
                      cx="70"
                      cy="70"
                      r="30"
                      stroke-dashoffset="0"
                      stroke-width="6"
                      fill="none"
                      stroke="url(#grad)"></circle>
            </svg>
          </div>
          <div class="fund-right">
            <div class="left-box">
              汇总规模
              <p>8888888亿</p>
            </div>
            <div class="right-box">
              年初同比
              <p style="color:teal">23.4%</p>
            </div>
          </div>
        </div>
        <div style="font-size:36px;margin-top:82px">总行托管产品</div>
        <div class="product-box">
          <video src="./img/productUp.mp4"
                 class="product-video"
                 height="400"
                 width="320"
                 autoplay
                 muted
                 loop></video>
          <div class="product-content">
            <div class="fund-right">
              <div class="left-box">
                汇总规模
                <p>8888888亿</p>
              </div>
              <div class="right-box">
                年初同比
                <p>23.4%</p>
              </div>
            </div>
          </div>
          <div class="product-content"
               style="margin-top:-80px">
            <div class="fund-right">
              <div class="left-box">
                汇总规模
                <p>8888888亿</p>
              </div>
              <div class="right-box">
                年初同比
                <p>23.4%</p>
              </div>
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
    window.onresize = () => {
      this.fullScreen()
    }
    var ParticleCanvasBox = $("#ParticleCanvasBox")[0];
    // this.displayParetice(ParticleCanvasBox);
    for (var i = 1; i < 37; i++) {
      let angle = (2 * Math.PI / 360) * 10 * (i - 1);
      let str = 'M ' + (70 + Math.sin(angle) * 40) + ' ' + (70 - Math.cos(angle) * 40) + ' l ' + (Math.sin(angle) * 8) + ' ' + (-Math.cos(angle) * 8)
      let path = this.makeSVG('path', { d: str, class: 'path-inner', 'stroke-linecap': "round", stroke: '#22407d', 'stroke-width': 2 });
      let path2 = this.makeSVG('path', { d: str, class: 'path-inner2', 'stroke-linecap': "round", stroke: '#22407d', 'stroke-width': 2 });
      document.getElementsByClassName('fund-circle')[0].appendChild(path);
      document.getElementsByClassName('fund-circle')[1].appendChild(path2);
      document.getElementsByClassName('path-inner')[i - 1].style.cssText = 'animation: path-color 4s infinite linear' + ' ' + (i / 36 * 4) + 's'
      document.getElementsByClassName('path-inner2')[i - 1].style.cssText = 'animation: path-color 4s infinite linear' + ' ' + (i / 36 * 4) + 's'
    }
    this.$store.dispatch('changePageShow', { pageShow: false })
  },
  methods: {
    fullScreen () {
      $('.resource-bg').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 2120})`)
    },
    makeSVG (tag, attrs) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", tag);;
      for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
      }
      return el;
    },
    displayParetice (ele) {
      var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

      var container;
      var camera, scene, renderer;

      var particles, particle, count = 0;

      var mouseX = 0, mouseY = 0;

      var width = 430;
      var height = 156;

      var windowHalfX = width / 2;
      var windowHalfY = height / 2;

      init();
      animate();

      function init () {

        container = ele;

        camera = new THREE58.PerspectiveCamera(75, width / height, 1, 10000);
        camera.position.z = 1000;
        camera.position.x = -167;
        camera.position.y = 167;

        scene = new THREE58.Scene();

        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE58.ParticleCanvasMaterial({

          color: 0x2f4884,
          program: function (context) {

            context.beginPath();
            context.arc(0, 0, 1, 0, PI2, true);
            context.fill();

          }

        });

        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {

          for (var iy = 0; iy < AMOUNTY; iy++) {

            particle = particles[i++] = new THREE58.Particle(material);
            particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
            particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
            scene.add(particle);

          }

        }

        renderer = new THREE58.CanvasRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

      }



      function animate () {

        requestAnimationFrame(animate);

        render();


      }

      function render () {

        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {

          for (var iy = 0; iy < AMOUNTY; iy++) {

            particle = particles[i++];
            particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
            particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;

          }

        }

        renderer.render(scene, camera);

        count += 0.1;

      }
    }
  }
}
</script>
<style lang="less" >
.box {
  transform-origin: 0 0;
}
.resource-bg {
  transform-origin: 0 0;
  overflow: hidden;
  height: 2120px;
  width: 3840px;
  text-align: left;
  color: white;
  font-size: 28px;
  background: url(./img/opeare-data-scrren.png);
}
.resource-bg .main-left-outer {
  box-sizing: border-box;
  display: inline-block;
  padding-left: 66px;
  padding-top: 200px;
  height: 2120px;
  width: 900px;
}
.resource-bg .main-left-outer .care-num-box {
  height: 231px;
  width: 831px;
  background: url(./img/care-title-bg.png);
  background-size: 100% 100%;
  position: relative;
  padding-top: 40px;
  box-sizing: border-box;
}
.resource-bg .main-left-outer .float-circle-box {
  position: relative;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 20px;
  height: 780px;
  width: 810px;
  margin-top: 50px;
  background: url(./img/rightBottom.png) right bottom no-repeat,
    url(./img/leftBottom.png) left bottom no-repeat,
    url(./img/rightTop.png) right top no-repeat,
    url(./img/leftTop.png) left top no-repeat;
  background-size: 100px 100px;
}
.resource-bg .main-left-outer .float-circle-box .circle-container {
  position: relative;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle {
  position: absolute;
  background: url(./img/circle1.png);
  background-size: 100% 100%;
  font-size: 30px;
  line-height: 40px;
  padding-top: 60px;
  text-align: center;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle div {
  width: 149px;
  margin: 0 auto;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle1 {
  width: 200px;
  height: 180px;
  top: 20px;
  left: 300px;
  animation: circle-move 2s 1s forwards;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle2 {
  width: 180px;
  height: 160px;
  top: 180px;
  left: 34px;
  animation: circle-move 2s 1.5s forwards;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle3 {
  width: 180px;
  height: 160px;
  top: 170px;
  left: 560px;
  animation: circle-move 2s 2s forwards;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle4 {
  width: 185px;
  height: 165px;
  top: 320px;
  left: 290px;
  animation: circle-move 2s 2.4s forwards;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle5 {
  width: 160px;
  height: 140px;
  top: 480px;
  left: 80px;
  line-height: 32px;
  animation: circle-move 2s 3s forwards;
}
.resource-bg .main-left-outer .float-circle-box .circle-container .circle6 {
  width: 160px;
  height: 140px;
  top: 490px;
  left: 500px;
  line-height: 32px;
  animation: circle-move 2s 3.2s forwards;
}
.resource-bg
  .main-left-outer
  .float-circle-box
  .circle-container
  .circle5
  div:first-chile {
  font-size: 30px;
}
.resource-bg
  .main-left-outer
  .float-circle-box
  .circle-container
  .circle5
  div:last-chile {
  font-size: 26px;
}
.resource-bg
  .main-left-outer
  .float-circle-box
  .circle-container
  .circle:first-child {
  color: #f9d34f;
  padding-top: 80px;
}
.resource-bg
  .main-left-outer
  .float-circle-box
  .circle-container
  .circle
  div:first-child {
  font-size: 36px;
}
.resource-bg .main-left-outer .mananger-num {
  margin-top: 30px;
}
.resource-bg .main-left-outer .mananger-num .manager-title {
  font-size: 36px;
}
.resource-bg .main-left-outer .mananger-num .managerContent1 {
  height: 81px;
  width: 781px;
  background: url(./img/managerBg1.png);
  background-size: 100% 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.resource-bg .main-left-outer .mananger-num .managerContent1 .title {
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.resource-bg .main-left-outer .mananger-num .managerContent1 .img {
  transform: translatey(-30px);
}
.resource-bg .main-left-outer .mananger-num .managerContent1 .num {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.resource-bg .main-left-outer .mananger-num .managerContent1 > div:last-child {
  font-size: 36px;
}
.resource-bg .main-left-outer .mananger-num > div:nth-child(2) {
  margin-top: 30px;
}
.resource-bg .main-left-outer .mananger-num > div:nth-child(5),
.resource-bg .main-left-outer .mananger-num > div:nth-child(6) {
  background: url(./img/managerBg2.png);
  background-size: 100% 100%;
}
.resource-bg .main-left-outer .care-num-animate {
  width: 212px;
  height: 340px;
  position: absolute;
  bottom: 0;
  left: 98px;
  z-index: 9;
  mix-blend-mode: screen;
}
.resource-bg .main-left-outer .care-name-content {
  margin-left: 340px;
  display: inline-block;
}
.resource-bg .main-left-outer .care-name-content p {
  margin: 0;
  text-align: center;
}
.resource-bg .main-left-outer .care-name-content p:first-child {
  color: #8cbbf9;
  font-size: 32px;
  line-height: 60px;
}
.resource-bg .main-left-outer .care-name-content p:nth-child(2) {
  font-size: 68px;
  font-weight: bold;
  color: #f2feff;
  line-height: 80px;
}
.resource-bg .main-center-box {
  width: 1860px;
  height: 2120px;
  display: inline-block;
  vertical-align: top;
  padding-top: 280px;
  margin-left: 100px;
  box-sizing: border-box;
  overflow: hidden;
}
.resource-bg .main-center-box .title-left {
  width: 890px;
  height: 316px;
  background: url(./img/main-left.png);
  background-size: 100% 100%;
  display: inline-block;
  color: #f9d34f;
  font-size: 80px;
}
.resource-bg .main-center-box .title-left img {
  vertical-align: middle;
}
.resource-bg .main-center-box .title-right {
  width: 890px;
  height: 316px;
  background: url(./img/main-right.png);
  background-size: 100% 100%;
  display: inline-block;
  margin-left: 60px;
  color: #f9d34f;
  font-size: 80px;
}
.resource-bg .main-center-box .title-right img {
  vertical-align: middle;
}
.resource-bg .main-center-box .num-box {
  text-align: center;
  width: 525px;
  display: inline-block;
  vertical-align: middle;
}
.resource-bg .main-center-box .left-box1 {
  padding: 100px 60px;
  box-sizing: border-box;
  text-align: center;
  font-size: 36px;
  color: #dcecfd;
  line-height: 48px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 57px;
  margin-top: 10px;
  width: 290px;
  height: 290px;
  background: url(./img/title-circle.png);
  background-size: 100% 100%;
}
.resource-bg .main-center-box .map-box {
  height: 1140px;
  width: 1820px;
  background: url(./img/gisMap.png);
  background-size: 200% 200%;
  background-position: 50% 50%;
  margin-top: 90px;
  font-size: 36px;
}
.resource-bg .main-center-box .map-box .special {
  color: #c5d6fb;
}
.resource-bg .main-center-box .map-box .schedule {
  position: absolute;
  bottom: 100px;
}
.resource-bg .main-center-box .map-box .schedule .inner1 {
  width: 580px;
  height: 40px;
  font-size: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.resource-bg .main-center-box .map-box .schedule .inner1 .left {
  width: 60px;
  margin-right: 30px;
}
.resource-bg .main-center-box .map-box .schedule .inner1 .center {
  width: 310px;
  height: 30px;
  background: yellow;
}
.resource-bg .main-center-box .map-box .schedule .inner1 .right {
  margin-left: 20px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.resource-bg .main-center-box .map-box .schedule > div:nth-child(2) {
  margin-top: 57px;
}
.resource-bg .main-right-box {
  width: 860px;
  height: 2120px;
  display: inline-block;
  vertical-align: top;
  padding-top: 280px;
  margin-left: 100px;
  box-sizing: border-box;
}
.resource-bg .main-right-box .echarts-box {
  height: 400px;
  width: 850px;
  margin-top: 60px;
}
.resource-bg .main-right-box .fund-title {
  margin-top: 60px;
  margin-bottom: 68px;
}
.resource-bg .main-right-box .fund-title .first-word {
  height: 72px;
  width: 56px;
  background: url(./img/fundBg.png);
  background-size: 100%;
  line-height: 72px;
  text-align: center;
  display: inline-block;
  margin-right: 15px;
}
.resource-bg .main-right-box .fund-box {
  margin-bottom: 30px;
}
.resource-bg .main-right-box .fund-box .fund-left {
  width: 178px;
  height: 178px;
  float: left;
  margin-top: 8px;
}
.resource-bg .main-right-box .fund-box .fund-left .fund-circle {
  transform: translatey(-10px);
}
.resource-bg .main-right-box .fund-box .fund-left .fund-outer-circle1 {
  transform: rotatez(270deg);
  transform-origin: 70px 70px;
  animation: fund-circle1 4s infinite linear;
}
@keyframes fund-circle1 {
  from {
    stroke-dasharray: 0 400;
  }
  to {
    stroke-dasharray: 368 400;
  }
}
.resource-bg .main-right-box .fund-box .fund-left .fund-inner-circle2 {
  transform-origin: 70px 70px;
  transform: rotatex(180deg) rotatez(90deg);
  animation: fund-circle2 4s infinite linear;
}
@keyframes fund-circle2 {
  from {
    stroke-dasharray: 0 249;
  }
  to {
    stroke-dasharray: 190 400;
  }
}
.resource-bg .main-right-box .fund-box .fund-left .path-inner {
  animation: path-color 4s infinite linear;
}
@keyframes path-color {
  0% {
    stroke: #22407d;
  }
  66% {
    stroke: #22407d;
  }
  67% {
    stroke: #5292ec;
  }
  100% {
    stroke: #5292ec;
  }
}
.resource-bg .main-right-box .fund-box .fund-right {
  width: 643px;
  height: 196px;
  background: url(./img/fund-right.png);
  background-size: 100% 100%;
  margin-left: 140px;
  color: #8cbbf9;
  font-size: 36px;
  box-sizing: border-box;
  padding-top: 30px;
}
.resource-bg .main-right-box .fund-box .fund-right .left-box {
  margin-left: 100px;
  width: 280px;
  display: inline-block;
}
.resource-bg .main-right-box .fund-box .fund-right .left-box p {
  margin: 0;
  font-size: 54px;
  color: white;
}
.resource-bg .main-right-box .fund-box .fund-right .right-box {
  display: inline-block;
  color: #96c2fa;
  padding-left: 20px;
}
.resource-bg .main-right-box .fund-box .fund-right .right-box p {
  margin: 0;
  font-size: 38px;
  font-weight: bold;
  color: #f6cc22;
}
.resource-bg .main-right-box .product-box {
  position: relative;
}
.resource-bg .main-right-box .product-box .product-video {
  position: absolute;
  left: -120px;
  mix-blend-mode: screen;
}
.resource-bg .main-right-box .product-box .product-content {
  display: inline-block;
}
.resource-bg .main-right-box .product-box .fund-right {
  width: 603px;
  height: 196px;
  color: #8cbbf9;
  font-size: 36px;
  display: inline-block;
  box-sizing: border-box;
  padding-top: 30px;
  margin-left: 240px;
  margin-top: 60px;
}
.resource-bg .main-right-box .product-box .fund-right .left-box {
  width: 280px;
  display: inline-block;
}
.resource-bg .main-right-box .product-box .fund-right .left-box p {
  margin: 0;
  font-size: 54px;
  color: white;
}
.resource-bg .main-right-box .product-box .fund-right .right-box {
  display: inline-block;
  color: #96c2fa;
  padding-left: 20px;
}
.resource-bg .main-right-box .product-box .fund-right .right-box p {
  margin: 0;
  font-size: 38px;
  font-weight: bold;
  color: #f6cc22;
}
.resource-bg .video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.resource-bg .resource-title-background {
  width: 3840px;
  height: 225px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: url(./img/title_header.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.resource-bg .resource-main-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 3840px;
  height: 112px;
  background-image: url(./img/bottom-line.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
@keyframes circle-move {
  0% {
    transform: translatey(0px) scale(0.9);
  }
  100% {
    transform: translatey(-100px) scale(1);
  }
}
</style>