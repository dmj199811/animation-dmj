<template>
  <div>
    1234
    <svg class="checkmark"
         viewBox="0 0 52 52">
      <circle class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none" />
      <path class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <div class="circle-inner">

    </div>
  </div>
</template>
<script>
import echartsLiquidfill from 'echarts-liquidfill'//引入
export default {
  methods: {
    circleInit () {
      let circle1 = this.$echarts.init(document.getElementsByClassName('circle-inner')[0])
      circle1.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [0.7],
          backgroundStyle: {
            color: 'white', //背景颜色
          },
          outline: {
            //show: true , //是否显示轮廓 布尔值
            color: '#fff',
            borderDistance: 5, //外部轮廓与图表的距离 数字

            itemStyle: {
              borderColor: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 1,
                  color: ['#5D39C1'], // 0% 处的颜色
                }, {
                  offset: 0,
                  color: ['#65C3FF'], // 100% 处的颜色
                }],
              }, //边框的颜色
              borderWidth: 5,  //边框的宽度
              shadowBlur: 5, //外部轮廓的阴影范围 一旦设置了内外都有阴影
              shadowColor: 'white' //外部轮廓的阴影颜色 
            }
          },
          color: [{
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 1,
              color: ['#40E0FF'], // 0% 处的颜色
            }, {
              offset: 0,
              color: ['#4874F1'], // 100% 处的颜色
            }],
          }],
          label: { //To change the text, you may use label.formatter, which can be set to a string or function.
            normal: {
              textStyle: {
                color: '#307CF7', //波浪上文本颜色
                insideColor: 'white', //波浪内部字体颜色
                fontSize: 15
              },
              position: ['50%', '70%'], //Text position is at the center by default. label.position can be set to be 'inside', 'left', 'right', 'top', 'bottom', or horizontal and vertical positions like ['10%', '20%'], which means '10%' to the left (controlled by label.align, which can be 'left', 'center', or 'right') and '20%' to the top (controlled by label.baseline, which can be 'top', 'middle', or 'bottom').
            }
          }
        }]
      })
    },
  },
  mounted () {
    this.circleInit()
    var path = document.querySelector('.checkmark__circle');
    var length = path.getTotalLength();
  }
}
</script>
<style lang="less">
.circle-inner {
  width: 200px;
  height: 200px;
  margin: 20px auto;
}
.checkmark__circle {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  stroke-width: 2;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  margin: 100px auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 500px #7ac142;
  }
}
</style>