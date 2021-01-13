<template>
  <div style="background:#01144f">
    <div id="myChart"
         :style="{width: '300px', height: '300px'}"></div>
    <div id="myChart2"
         :style="{width: '300px', height: '300px'}"></div>
    <div class="system-title">重要系统批处理进展情况
      <div class="icon-box">
        <img src="./arrow1.png" alt="">
        <span>12/17</span>
        <img src="./arrow2.png" alt="">
      </div>
    </div>
    <div class="draw-box">
      <div class="circle-svg">
        <div class="title">贵金属交易管理系统</div>
        <div class="svg-box">
          <svg class='fund-circle'
              width="140px"
              height="140px"
              viewBox="0 0 140 140">
            
              <defs>
                <linearGradient id='linear' x1="1" y1="0.55" x2="1" y2="0" >
                  <stop offset="0%" style="stopColor: white;stopOpacity: 1 " />
                  <stop offset="10%" style="stopColor: #009DFF;stopOpacity: 0.8" />
                  <stop offset="100%" style="stopColor: #009DFF;stopOpacity: 0.8" />
                </linearGradient>
              </defs>
              <circle class="indicator-inner"
                  cx="70"
                  cy="70"
                  r="62"
                  fill='none'
                  stroke-width="9"
                  stroke-dasharray='0 1000'
                  stroke="#009DFF"></circle>
              <circle 
                  class="indicator-test"
                  style="transform:rotate(126deg)"
                  cx="70"
                  cy="70"
                  r="62"
                  fill='none'
                  stroke-width="9"
                  stroke="url(#linear)"></circle>
          </svg>
          <div class="center-num-box">
            <div class="num">72.3</div>
            <div class="word">完成比例</div>
            <div class="status">进行中</div>
          </div>
        </div>
        <div class="num-box">
          <div class="line">
            <span>计划开始</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line">
            <span>计划结束</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line-centern"></div>
          <div class="line">
            <span>实际开始</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line">
            <span>实际结束</span>
            <span class="unend">还未开始</span>
          </div>
        </div>
      </div>
      <div class="circle-svg trasnform-box" >
        <div class="title">便宜金属加油系统管理系统</div>
        <div class="svg-box">
          <svg class='fund-circle'
              width="140px"
              height="140px"
              viewBox="0 0 140 140">
            
              <defs>
                <linearGradient id='linear' x1="1" y1="0.55" x2="1" y2="0" >
                  <stop offset="0%" style="stopColor: white;stopOpacity: 1 " />
                  <stop offset="10%" style="stopColor: #009DFF;stopOpacity: 0.8" />
                  <stop offset="100%" style="stopColor: #009DFF;stopOpacity: 0.8" />
                </linearGradient>
              </defs>
              <circle class="indicator-inner"
                  cx="70"
                  cy="70"
                  r="62"
                  fill='none'
                  stroke-width="9"
                  stroke-dasharray='0 1000'
                  stroke="#009DFF"></circle>
              <circle 
                  class="indicator-test"
                  style="transform:rotate(126deg)"
                  cx="70"
                  cy="70"
                  r="62"
                  fill='none'
                  stroke-width="9"
                  stroke="url(#linear)"></circle>
          </svg>
          <div class="center-num-box">
            <div class="num">72.3</div>
            <div class="word">完成比例</div>
            <div class="status">进行中</div>
          </div>
        </div>
        <div class="num-box">
          <div class="line">
            <span>计划开始</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line">
            <span>计划结束</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line-centern"></div>
          <div class="line">
            <span>实际开始</span>
            <span>2020/10/12 12:30</span>
          </div>
          <div class="line">
            <span>实际结束</span>
            <span class="unend">还未开始</span>
          </div>
        </div>
      </div>
  </div>
    
  </div>
</template>
<script>
import echartsLiquidfill from 'echarts-liquidfill'//引入

export default {
  data () {
    return {
      msg: '我是测试'
    }
  },
  mounted () {
    this.init()
    this.$store.dispatch('changePageShow', { pageShow: true })
    // this.angleSet(100)
    this.drawSet()
  },
  methods: {
    angleSet(x){
      let num=0;
      num = Math.ceil((360-126+43)*x/100+126); //圆二旋转角度
      let cir1 = document.getElementsByClassName('indicator-inner')[0]
      cir1.setAttribute('stroke-dasharray',x*3.1+' 1000')
      let cir2 = document.getElementsByClassName('indicator-test')[0]
      cir2.style.transform='rotate('+num+'deg)'
    },
    drawSet(){
      let num = 1
      setInterval(()=>{
        $('.draw-box').css('transform','rotateY('+num*180+'deg)')
        setTimeout(()=>{
          $('.circle-svg').css('display','none')
          $('.circle-svg').eq(num==1?0:1).css('display','block')
        },1000)
        num=num==1?0:1
      },3000)
    },
    init () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })

      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      myChart2.setOption({
        series: [{
          type: 'liquidFill',
          data: [0.1, 0.4, 0.42],
          outline: {
            //show: true , //是否显示轮廓 布尔值
            borderDistance: 1, //外部轮廓与图表的距离 数字
            itemStyle: {
              //borderColor:'rgba(255,0,0,0.09)', //边框的颜色
              borderWidth: 3,  //边框的宽度
              //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
              //shadowColor: '#000' //外部轮廓的阴影颜色 
            }
          },
        }]
      })
    }
  }
}
</script>
<style lang="less">
.indicator-test{
  transform-origin: center;
  stroke-dashoffset: 0;
  stroke-dasharray: 10 1000;
}
.system-title{
  font-size: 20px;
  color: #CBE5FF;
  font-weight: bold;
  .icon-box{
    font-size: 18px;
    color: white;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      transform: translateY(1px);
    }
  }
}
.draw-box{
  width: 270px;
  height: 390px;
  margin: 100px auto;
  position: relative;
  transform-origin: center;
  transition: 2s linear;
}

.circle-svg{
  transform: rotateY(360deg);
  position: absolute;
  top: 0;
  width: 100%;
  height: 390px;
  background: url(./bg.png);
  background-size: 100% 100%;
  overflow: hidden;
  .title{
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #CBE5FF;
    margin-top: 30px;
  }
  .title::after{
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #CCE5FF;
    margin-left: 6px;
    transform: translateY(-3px) rotate(45deg);
  }
  .title::before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #CCE5FF;
    margin-right: 6px;
    transform: translateY(-3px) rotate(45deg);
  }
  .svg-box{
    margin: 20px auto;
    margin-bottom: 24px;
    box-sizing: border-box;
    width: 146px;
    height: 133px;
    background: url(./circleBg.png);
    background-size: 100% 100%;
    position: relative;
    .fund-circle{
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
    }
    .indicator-inner {
      transform: rotate(126deg);
      transform-origin: center center;
      stroke-dashoffset: 0;
    }
    .center-num-box{
      position: absolute;
      top: 40px;
      left: 32px;
      height: 80px;
      width: 80px;
      color: white;
      text-align:center;
      .num{
        font-size: 22px;
        line-height: 24px;
      }
      .word{
        color: #5DC1FF;
        font-size: 14px;
      }
      .status{
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        background: #29DCFC;
        width: 50px;
        border-radius: 4px;
      }
    }
  }
  .num-box{
    .line{
      padding-left:20px;
      font-size: 16px;
      line-height: 34px;
      color: #5EC2FF;
      &>span:last-child{
        margin-left: 10px;
        color: #BCDCFF;
      }
      .unend{
        opacity: 0.4;
      }
    }
    .line-centern{
      height: 2px;
      width: 220px;
      margin:5px auto;
      transform:scaleY(0.5) ;
      background: linear-gradient(90deg,#073578 ,#1264b0 50%,#073578 100%);
    }
    .line:first-child::before{
      content: '';
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url(./ic1.png);
      transform: translateY(4px);
      background-size: 100% 100%;
    }
    .line:nth-child(2)::before{
      content: '';
      width: 20px;
      height: 20px;
      display: inline-block;
      transform: translateY(4px);
      background: url(./ic2.png);
      background-size: 100% 100%;
    }
    .line:nth-child(4)::before{
      content: '';
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url(./ic3.png);
      transform: translateY(4px);
      background-size: 100% 100%;
    }
    .line:nth-child(5)::before{
      content: '';
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url(./ic4.png);
      transform: translateY(4px);
      background-size: 100% 100%;
    }
  }
}//#FF8400延迟 #FF0019异常 #29DCFC正常
.trasnform-box{
  transform: rotateY(180deg);
  transform-origin: center;
  display: none;
}
</style>