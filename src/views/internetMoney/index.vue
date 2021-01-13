<template>
  <div class="net-gold-screen">
    <div class="net-gold-line-light-bar">
      <img src="./netGold/title.png"
           class="netGold-title-img">
      <video src="./netGold/gif.mp4"
             width="1920"
             height="auto"
             autoplay
             muted
             loop
             class="video"></video>
    </div>
    <div class="net-gold-screen-top">
      <div class="net-gold-screen-top-left">
        <div class="title">
          个人网银
        </div>
        <div class="trade-card-group">
          <div class="trade-card">
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-dot">,</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item text">笔</span>
          </div>
          <div class="trade-pect">
            <div class="trade-pect-text">同比上周</div>
            <div class="trade-pect-num up">8.8%</div>
          </div>
        </div>
        <div class="left-echarts-box"></div>
        <div class="toggle-box">
          <div>
            <div class="title active">登录成功率/登录数</div>
            <!-- <div class="title"
                 data-num='1'>动账笔数/金额</div> -->
          </div>
          <div class="toggle-inner-box">
            <div class="top-num">
              <div class="left box1 active"
                   data-num='0'>登陆成功率 <span>8888</span>笔</div>
              <div class="right box2"
                   data-num='1'>每分钟登陆 <span>8888</span>笔</div>
            </div>
            <div class="echarts-box echarts-box1 "></div>
            <div class="echarts-box echarts-box2 hidden-box"></div>
          </div>
        </div>
      </div>
      <div class="net-gold-screen-top-center">
        <div class="trade-card-title-group">
          <div class="trade-card-title-item">
            <svg width="791"
                 height="40">
              <defs>
                <linearGradient id="MyGradient"
                                x1="0%"
                                y1="0%"
                                x2="0"
                                y2="100%">
                  <stop offset="5%"
                        stop-color="#80B9FF" />
                  <stop offset="95%"
                        stop-color="#D6E9FF" />
                </linearGradient>
              </defs>
              <g style="transform: translate(50%, 0);">
                <text class="title-item-text"
                      x="0"
                      y="0"
                      fill="url(#MyGradient)"
                      stroke="#1944A7">当天登录个人网银总数</text>
              </g>
            </svg>
          </div>

        </div>

        <div class="trade-card-group">
          <div class="trade-card">
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-dot">,</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-dot">,</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item text">笔</span>
          </div>
          <div class="trade-pect">
            <div class="trade-pect-text">同比上周</div>
            <div class="trade-pect-num up">8.8%</div>
          </div>
        </div>
        <div class="trade-trend-line-charts-group">

          <div class="trade-trend-content">
            <div class="trade-trend-line-charts-item">
              <div class="trade-trend-title">手机银行每分钟交易趋势</div>
              <div class="trade-trend-num">
                实时交易量 <span>888笔</span>
              </div>
              <div class="trade-trend-charts">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="net-gold-screen-top-right">
        <div class="title">
          直销银行
        </div>
        <div class="trade-card-group">
          <div class="trade-card">
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-dot">,</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item">8</span>
            <span class="trade-card-item text">笔</span>
          </div>
          <div class="trade-pect">
            <div class="trade-pect-text">同比上周</div>
            <div class="trade-pect-num up">8.8%</div>
          </div>
        </div>
        <div class="right-echarts-box"></div>
        <div class="toggle-box">
          <div>
            <div class="title active"
                 data-num='0'>登录成功率/登录数</div>
            <!-- <div class="title"
                 data-num='1'>动账笔数/金额</div> -->
          </div>

          <div class="toggle-inner-box">
            <div class="top-num">
              <div class="left box1 active"
                   data-num='0'>登陆成功率 <span>8888</span>笔</div>
              <div class="right box2"
                   data-num='1'>每分钟登陆 <span>8888</span>笔</div>
            </div>
            <div class="echarts-box echarts-box3"></div>
            <div class="echarts-box echarts-box4 hidden-box"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="net-gold-screen-bottom">
      <div class="card-runner-container">
        <div class="bottom-box">
          <div class="bottom-inner">
            <div class="left-box outer-right">
              <div class="title">
                短信平台当日消息发送数
              </div>
              <div class="center-num-box">
                <div class="first-child">
                  <img src="./netGold/icon-line.png"
                       class="icon">
                  今日发送总数
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div class="last-child">同比上周
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical0 practical1"
                     style="right:60px;">
                  每分钟发送量 <span>88笔</span>
                </div>

              </div>
              <div class="bottom-echarts-box bottom-echarts-box1">
              </div>
            </div>
            <div class="center-box outer-right">
              <div class="title">
                电商客户数
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon6.png"
                       class="icon">
                  客户数
                  <span style="margin-left:10px;color:white;font-size:20px">888888户</span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical1"
                     style="right:50px">
                  实时客户数 88户
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box2">
              </div>
            </div>
            <div class="right-box outer-right">
              <div class="title">
                电商交易量/交易额
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon5.png"
                       class="icon">
                  交易量
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div>
                  <img src="./netGold/icon8.png"
                       class="icon">
                  交易额
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical3">
                  交易量
                </div>
                <div class="forecast3">
                  交易额
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box3">
              </div>
            </div>
            <div class="outer-right">
              <div class="title">
                网络金融协同营销
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon-line.png"
                       class="icon">
                  当日交易量
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div>

                  交易额
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical1"
                     style="right:240px">
                  实际值 <span>80笔</span>
                </div>
                <div class="forecast1"
                     style="right:100px">
                  预测值 <span>80笔</span>
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box4">
              </div>
            </div>
            <div class="outer-right">
              <div class="title">
                电子签名服务
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon-line.png"
                       class="icon">
                  当日交易量
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div>

                  交易额
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical1 practical5"
                     style="right:240px">
                  实际值 <span>93笔</span>
                </div>
                <div class="forecast1"
                     style="right:100px">
                  预测值 <span>80笔</span>
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box5">
              </div>
            </div>
            <div class="outer-right">
              <div class="title">
                开放互联网系统动帐
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon-line.png"
                       class="icon">
                  当日交易量
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div>

                  交易额
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical1 practical6"
                     style="right:240px">
                  实际值 <span>93笔</span>
                </div>
                <div class="forecast1"
                     style="right:100px">
                  预测值 <span>80笔</span>
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box6">
              </div>
            </div>
            <div class="outer-right">
              <div class="title">
                渠道协同平台
              </div>
              <div class="center-num-box">
                <div>
                  <img src="./netGold/icon-line.png"
                       class="icon">
                  当日交易量
                  <span style="margin-left:10px;color:white;font-size:20px">888888笔</span>
                </div>
                <div>

                  交易额
                  <span style="margin-left:10px;font-size:20px"
                        class="up">
                    88.8%
                  </span>
                </div>
              </div>
              <div class="echarts-title">
                <div class="practical1 practical7"
                     style="right:240px">
                  实际值 <span>93笔</span>
                </div>
                <div class="forecast1"
                     style="right:100px">
                  预测值 <span>80笔</span>
                </div>
              </div>
              <div class="bottom-echarts-box bottom-echarts-box7">
              </div>
            </div>
            <div class="outer-right">
              我是第一盒子
            </div>
            <div class="outer-right">
              我是第二盒子
            </div>
            <div class="outer-right">
              我是第三盒子
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import echarts from 'echarts';

export default {
  data () {
    return {
      bottomIndex: 1
    }
  },
  mounted () {
    // setInterval(() => {
    //   $('.net-gold-screen-top-left .top-num .active').siblings().trigger('click')
    //   $('.net-gold-screen-top-right .top-num .active').siblings().trigger('click')
    //   this.bottomChangeIndex(this.bottomIndex)
    // }, 10000)
    setTimeout(() => {
      this.bottomChangeIndex(this.bottomIndex)
    }, 2000)
    setTimeout(() => {
      this.bottomChangeIndex(this.bottomIndex)
    }, 4000)
    setTimeout(() => {
      this.bottomChangeIndex(this.bottomIndex)
    }, 6000)
    setTimeout(() => {
      this.bottomChangeIndex(this.bottomIndex)
    }, 8000)
    $('.net-gold-screen-top-left .top-num>div').click(function (e) {
      if ($(this).hasClass('active')) {
        return
      }
      $(this).addClass('active').siblings().removeClass('active');
      $('.net-gold-screen-top-left .echarts-box').addClass('hidden-box')
      $('.net-gold-screen-top-left .echarts-box').eq(e.target.dataset.num).removeClass('hidden-box')
      leftBottomGoldCharts1.resize()
      leftBottomGoldCharts2.resize()
    })
    $('.net-gold-screen-top-right .top-num>div').click(function (e) {
      if ($(this).hasClass('active')) {
        return
      }
      $(this).addClass('active').siblings().removeClass('active');
      $('.net-gold-screen-top-right .echarts-box').addClass('hidden-box')
      $('.net-gold-screen-top-right .echarts-box').eq(e.target.dataset.num).removeClass('hidden-box')
      leftBottomGoldCharts3.resize()
      leftBottomGoldCharts4.resize()
    })
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
    this.$store.dispatch('changePageShow', { pageShow: false })
    var netGoldChartsOption = {
      color: ['#FFCC5F'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,204,95,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,204,95,0.1)'
          }])
        }
      }]
    };
    var leftGoldChartsOption = {
      color: ['#FFCC5F'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,204,95,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,204,95,0.1)'
          }])
        }
      }]
    };
    var rightGoldChartsOption = {
      color: ['#FFCC5F'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,204,95,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,204,95,0.1)'
          }])
        }
      }]
    };
    var leftBottomChartsOption1 = {
      color: ['#599BFF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'bar',
        barWidth: '60%',
        data: [],

      }]
    };
    var leftBottomChartsOption2 = {
      color: ['#CA86FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'bar',
        barWidth: '60%',
        data: [],

      }]
    };
    var leftBottomChartsOption3 = {
      color: ['#599BFF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'bar',
        barWidth: '60%',
        data: [],

      }]
    };
    var leftBottomChartsOption4 = {
      color: ['#CA86FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'bar',
        barWidth: '60%',
        data: [],

      }]
    };
    var bottomGoldChartsOption1 = {
      color: ['#35D462'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(53,212,98,0.8)'
          }, {
            offset: 1,
            color: 'rgba(53,212,98,0.2)'
          }])
        }
      }]
    };
    var bottomGoldChartsOption2 = {
      color: ['rgba(255,219,176,1)'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,219,176,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,219,176,0.2)'
          }])
        }
      }]
    };
    var bottomGoldChartsOption3 = {
      color: ['#6B53FF', '#64E4FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(107,83,255,0.8)'
          }, {
            offset: 1,
            color: 'rgba(107,83,255,0.2)'
          }])
        }
      }, {
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(100,228,255,0.8)'
          }, {
            offset: 1,
            color: 'rgba(100,228,255,0.2)'
          }])
        }
      }]
    };
    var bottomGoldChartsOption4 = {
      color: ['#6B53FF', '#64E4FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,222,108,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,222,108,0.2)'
          }])
        }
      }, {
        type: 'line',
        width: '3',
        symbol: 'none',
        lineStyle: {
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        data: [],
      }]
    };
    var bottomGoldChartsOption5 = {
      color: ['#6B53FF', '#64E4FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(107,83,255,0.8)'
          }, {
            offset: 1,
            color: 'rgba(107,83,255,0.2)'
          }])
        }
      }, {
        type: 'line',
        width: '3',
        symbol: 'none',
        lineStyle: {
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        data: [],
      }]
    };
    var bottomGoldChartsOption6 = {
      color: ['#53FFD0', '#64E4FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(83,255,208,0.8)'
          }, {
            offset: 1,
            color: 'rgba(83,255,208,0.2)'
          }])
        }
      }, {
        type: 'line',
        width: '3',
        symbol: 'none',
        lineStyle: {
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        data: [],
      }]
    };
    var bottomGoldChartsOption7 = {
      color: ['#FFA453', '#64E4FF'],
      grid: {
        left: 10,
        right: 20,
        top: 40,
        bottom: 10,
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'time',
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
          formatter: function (value, index) {
            let time1 = new Date(value)
            let a = (time1.getHours() < 10 ? '0' + time1.getHours() : time1.getHours()) + ':' + (time1.getMinutes() < 10 ? '0' + time1.getMinutes() : time1.getMinutes());
            return a
          }
        },
      },
      yAxis: {
        type: 'value',
        name: '单位:笔',
        nameTextStyle: {
          color: "#B2D1FF"
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3967A6',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#9bbcf2",
          fontSize: 16,
        },
      },
      series: [{
        type: 'line',
        width: '3',
        symbol: 'none',
        data: [],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255,164,83,0.8)'
          }, {
            offset: 1,
            color: 'rgba(255,164,83,0.2)'
          }])
        }
      }, {
        type: 'line',
        width: '3',
        symbol: 'none',
        lineStyle: {
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        data: [],
      }]
    };
    var netGoldCharts = echarts.init($(".trade-trend-charts")[0]);
    netGoldCharts.setOption(netGoldChartsOption);
    var leftGoldCharts = echarts.init($(".left-echarts-box")[0]);
    leftGoldCharts.setOption(leftGoldChartsOption);
    var rightGoldCharts = echarts.init($(".right-echarts-box")[0]);
    rightGoldCharts.setOption(rightGoldChartsOption);
    var leftBottomGoldCharts1 = echarts.init($(".echarts-box1")[0]);
    leftBottomGoldCharts1.setOption(leftBottomChartsOption1);
    var leftBottomGoldCharts2 = echarts.init($(".echarts-box2")[0]);
    leftBottomGoldCharts2.setOption(leftBottomChartsOption2);
    var leftBottomGoldCharts3 = echarts.init($(".echarts-box3")[0]);
    leftBottomGoldCharts3.setOption(leftBottomChartsOption3);
    var leftBottomGoldCharts4 = echarts.init($(".echarts-box4")[0]);
    leftBottomGoldCharts4.setOption(leftBottomChartsOption4);
    var bottomEcharts1 = echarts.init($(".bottom-echarts-box1")[0]);
    bottomEcharts1.setOption(bottomGoldChartsOption1);
    var bottomEcharts2 = echarts.init($(".bottom-echarts-box2")[0]);
    bottomEcharts2.setOption(bottomGoldChartsOption2);
    var bottomEcharts3 = echarts.init($(".bottom-echarts-box3")[0]);
    bottomEcharts3.setOption(bottomGoldChartsOption3);
    var bottomEcharts4 = echarts.init($(".bottom-echarts-box4")[0]);
    bottomEcharts4.setOption(bottomGoldChartsOption4);
    var bottomEcharts5 = echarts.init($(".bottom-echarts-box5")[0]);
    bottomEcharts5.setOption(bottomGoldChartsOption5);
    var bottomEcharts6 = echarts.init($(".bottom-echarts-box6")[0]);
    bottomEcharts6.setOption(bottomGoldChartsOption6);
    var bottomEcharts7 = echarts.init($(".bottom-echarts-box7")[0]);
    bottomEcharts7.setOption(bottomGoldChartsOption7);
    setInterval(() => {
      let data = []
      for (var i = 0; i < 10; i++) {
        let arr1 = this.randomData(i)

        data.push(arr1);
      }
      netGoldCharts.setOption({
        series: [{
          data: data
        }]
      });
      leftGoldCharts.setOption({
        series: [{
          data: data
        }]
      });
      rightGoldCharts.setOption({
        series: [{
          data: data
        }]
      });
      leftBottomGoldCharts1.setOption({
        series: [{
          data: data
        }]
      });
        console.log(data)
      leftBottomGoldCharts2.setOption({
        series: [{
          data: data
        }]
      });
      leftBottomGoldCharts3.setOption({
        series: [{
          data: data
        }]
      });
      leftBottomGoldCharts4.setOption({
        series: [{
          data: data
        }]
      });
      bottomEcharts1.setOption({
        series: [{
          data: data
        }]
      });
      bottomEcharts2.setOption({
        series: [{
          data: data
        }]
      });
      bottomEcharts3.setOption({
        series: [{
          data: data
        }, {
          data: data
        }]
      });
      bottomEcharts4.setOption({
        series: [{
          data: data
        }, {
          data: data
        }]
      });
      bottomEcharts5.setOption({
        series: [{
          data: data
        }, {
          data: data
        }]
      });
      bottomEcharts6.setOption({
        series: [{
          data: data
        }, {
          data: data
        }]
      });
      bottomEcharts7.setOption({
        series: [{
          data: data
        }, {
          data: data
        }]
      });
    }, 2000);

  },
  methods: {
    randomData (index) {
      var now = new Date();
      var oneDay = 24 * 3600 * 1000;

      now = new Date(+now + oneDay);
      let value = 100 + Math.random() * 10 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1 - index, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    },
    fullScreen () {
      $('.net-gold-screen ').css('transform', `scale(${document.documentElement.clientWidth / 1920},${document.documentElement.clientHeight / 1080})`)
    },
    bottomChangeIndex (index) {
      $('.bottom-inner').css('marginLeft', '-' + 627 * index + 'px')
      $('.bottom-inner>div').eq(index - 1).removeClass('left-box')
      $('.bottom-inner>div').eq(index - 1).addClass('outer-left')
      $('.bottom-inner>div').eq(index).removeClass('center-box')
      $('.bottom-inner>div').eq(index + 1).removeClass('right-box')
      $('.bottom-inner>div').eq(index).addClass('left-box')
      $('.bottom-inner>div').eq(index + 1).addClass('center-box')
      $('.bottom-inner>div').eq(index + 2).addClass('right-box')
      this.bottomIndex++
      if (index == 7) {
        setTimeout(() => {
          this.backIndexFirst(index)
        }, 2000)
      }

    },
    backIndexFirst (index) {
      this.bottomIndex = 1;
      $('.bottom-inner>div').css('transition', 'none')
      $('.bottom-inner').css('transition', 'none')
      $('.bottom-inner').css('marginLeft', 0 + 'px')
      $('.bottom-inner>div').removeClass('left-box')
      $('.bottom-inner>div').removeClass('center-box')
      $('.bottom-inner>div').removeClass('right-box')
      $('.bottom-inner>div').eq(0).addClass('left-box')
      $('.bottom-inner>div').eq(1).addClass('center-box')
      $('.bottom-inner>div').eq(2).addClass('right-box')
      $('.bottom-inner>div').removeClass('outer-left')
      setTimeout(() => {
        $('.bottom-inner>div').css('transition', '')
        $('.bottom-inner').css('transition', '')
      }, 1000)
    }
  }
}
</script>
<style lang="less">
.net-gold-screen {
  width: 1920px;
  height: 1080px;
  background-image: url(./netGold/net-gold-screen-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transform-origin: left top;
  font-family: "MicrosoftYaHei";
}
.net-gold-line-light-bar {
  position: absolute;
  top: 98px;
}
.net-gold-line-light-bar .netGold-title-img {
  position: absolute;
  top: 0;
  left: 770px;
  width: 400px;
}
.net-gold-line-light-bar .video {
  mix-blend-mode: screen;
}
.net-gold-screen-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  min-height: 200px;
  width: 100%;
  background-image: url(./netGold/circle-bottom.png);
  background-size: 1753px 90px;
  background-position: center bottom;
  background-repeat: no-repeat;
}
.trade-pect {
  margin-left: 35px;
}
.trade-pect .trade-pect-text {
  color: #b2d1ff;
  font-size: 18px;
  margin-top: 15px;
}
.trade-pect .trade-pect-num {
  font-weight: bold;
  font-size: 32px;
}
.trade-pect .trade-pect-num.up {
  color: #ff4743;
}
.trade-pect .trade-pect-num::after {
  width: 20px;
  height: 20px;
  display: inline-block;
  content: "";
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.trade-pect .trade-pect-num.up::after {
  background-image: url(./netGold/up.png);
}
.trade-pect .trade-pect-num.down::after {
  background-image: url(./netGold/down.png);
}
.trade-pect .trade-pect-num.down {
  color: #85eafb;
}
.card-runner-item .card-runner-info-line .card-runner-icon {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-image: url(./netGold/icon-line.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 9px;
  margin-left: 32px;
}
.card-runner-info-line .card-runner-text-item.first {
  margin-right: 47px;
}
.card-runner-text-item .card-runner-text {
  color: #8ac1ff;
  font-size: 16px;
  margin-right: 18px;
}
.card-runner-text-item .card-runner-num {
  font-size: 20px;
  color: #e4f6ff;
}
.card-runner-text-item .card-runner-num.bi::after {
  content: "笔";
}
.card-runner-text-item .card-runner-num.down {
  color: #64e4ff;
}
.card-runner-text-item .card-runner-num.down::after {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url(./netGold/down.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
}
.card-runner-text-item .card-runner-num.up {
  color: #ff4743;
}
.card-runner-item .card-runner-echarts-container {
  width: 100%;
  height: 200px;
}
.trade-trend-content {
  height: 450px;
}
.trade-trend-charts {
  width: 100%;
  height: 300px;
}
.card-runner-text-item .card-runner-num.up::after {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url(./netGold/up.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
}
.net-gold-screen-top-center {
  position: absolute;
  left: 50%;
  top: 143px;
  transform: translate(-50%);
}
.net-gold-screen-top-center .trade-card-group {
  width: 791px;
  height: 152px;
  background-image: url(./netGold/num-group.png);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.trade-card {
  display: flex;
  align-items: center;
}
.trade-card .trade-card-item {
  margin-left: 4px;
  display: inline-block;
  width: 54px;
  height: 76px;
  background-image: url(./netGold/card.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  color: #ffc674;
  font-size: 70px;
  text-align: center;
  line-height: 76px;
}
.trade-card .trade-card-item.text {
  font-family: "微软雅黑";
  font-weight: bold;
  font-size: 32px;
  line-height: 90px;
  vertical-align: text-bottom;
}
.trade-card .trade-card-dot {
  color: #ffc674;
  font-size: 70px;
}
.trade-trend-line-charts-item {
  width: 720px;
  height: 404px;
  background-image: url(./netGold/center-card.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding: 24px 29px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.trade-trend-line-charts-item .trade-trend-num {
  position: absolute;
  right: 100px;
}
.trade-trend-line-charts-item .trade-trend-num::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #ffcc5f 0%,
    #ffcc5f 10%,
    rgba(255, 204, 95, 0) 100%
  );
}
.trade-trend-line-charts-group .trade-trend-title {
  text-align: left;
  font-weight: bold;
  color: #e4f6ff;
  font-size: 20px;
  margin-bottom: 19px;
}
.trade-trend-line-charts-group .trade-trend-card-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trade-trend-card-group .trade-trend-card-item {
  width: 320px;
  height: 54px;
  margin: 0 auto;
  background-image: url(./netGold/center-item.png);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.trade-trend-card-item .trade-trend-box {
  margin-left: 35px;
  display: flex;
  align-items: center;
}
.trade-trend-card-item .trade-trend-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.trade-trend-card-item .trade-trend-icon.real {
  background-image: url(./netGold/real.png);
}
.trade-trend-card-item .trade-trend-icon.preview {
  background-image: url(./netGold/preview.png);
}
.trade-trend-card-item .trade-trend-text {
  color: #8ac1ff;
  font-size: 20px;
  margin-left: 13px;
}
.trade-trend-card-item .trade-trend-num {
  color: #ffc674;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
}
.trade-trend-card-item .trade-trend-num::after {
  content: "笔";
}
.trade-trend-dots {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.trade-trend-dots .trade-trend-dot-item {
  width: 136px;
  height: 36px;
  background-image: url(./netGold/dot-item.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  color: #9accff;
  font-size: 16px;
  text-align: center;
  line-height: 42px;
}
.trade-trend-dots .trade-trend-dot-item:not(:last-child) {
  margin-right: 24px;
}
.trade-trend-dots .trade-trend-dot-item.active {
  background-image: url(./netGold/dot-item-active.png);
  color: #e4f6ff;
  font-weight: bold;
}
.net-gold-screen-top {
  position: relative;
  perspective: 800px;
  color: white;
}
/*左边的卡片开始*/
.net-gold-screen-top-left {
  width: 660px;
  height: 640px;
  text-align: left;
  background-image: url(./netGold/left-card.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  left: 0;
  top: 160px;
  padding: 33px 43px;
  box-sizing: border-box;
  transform: perspective(400px) rotateY(5deg);
  transform-origin: -20% 85%;
}
.net-gold-screen-top-left .left-echarts-box {
  height: 160px;
  margin-bottom: 20px;
}
.net-gold-screen-top-left .title {
  font-size: 20px;
  font-weight: bold;
}
.net-gold-screen-top-left .trade-pect {
  margin-left: 30px;
}
.net-gold-screen-top-left .trade-card-group {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.net-gold-screen-top-left .trade-card-group .trade-card-item {
  color: white;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
}
.net-gold-screen-top-left .trade-card-group .trade-card-dot {
  font-size: 50px;
  color: white;
}
.net-gold-screen-top-left .trade-card-group .trade-card-item.text {
  font-size: 30px;
  line-height: 70px;
}
.net-gold-screen-top-left .toggle-box {
  font-size: 20px;
}
.net-gold-screen-top-left .toggle-box .title {
  color: #e4f6ff;
  display: inline-block;
  margin-right: 30px;
  font-size: bold;
  opacity: 0.6;
}
.net-gold-screen-top-left .toggle-box .top-num {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.net-gold-screen-top-left .toggle-box .top-num .active {
  opacity: 1;
}
.net-gold-screen-top-left .toggle-box .top-num div {
  font-size: 16px;
  background: url(./netGold/center-item.png);
  background-size: 100% 100%;
  line-height: 48px;
  text-align: center;
  height: 48px;
  width: 210px;
  opacity: 0.6;
}
.net-gold-screen-top-left .toggle-box .top-num .box1::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #64e4ff;
}
.net-gold-screen-top-left .toggle-box .top-num .box2::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #ca86ff;
}
.net-gold-screen-top-left .toggle-box .top-num .box3::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #f6b37f;
}
.net-gold-screen-top-left .toggle-box .top-num .box4::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #ffde6c;
}
.net-gold-screen-top-left .toggle-box .echarts-box {
  height: 180px;
}
.net-gold-screen-top-left .toggle-box .hidden-box {
  display: none;
}
.left-top-card .visitied-num-container .visitied-text {
  color: #8fbfff;
  font-size: 18px;
  margin-bottom: 10px;
}
.left-top-card .visitied-num-container .visitied-num {
  font-family: HYZhuZiKaKuTiW;
  color: #ffc674;
  font-size: 24px;
}
.left-top-card .visitied-num-container .visitied-num::after {
  content: "人/次";
}
.left-top-card .compare-last-week {
  margin-left: 36px;
}
.left-top-card .compare-last-week .compare-last-week-text {
  color: #8fbfff;
  font-size: 18px;
  margin-bottom: 10px;
}
.left-top-card .compare-last-week .compare-last-week-num {
  font-weight: bold;
  font-size: 24px;
}
.left-top-card .compare-last-week .compare-last-week-num::after {
  content: "";
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  display: inline-block;
}
.left-top-card .compare-last-week .compare-last-week-num.down {
  color: #64e4ff;
}
.left-top-card .compare-last-week .compare-last-week-num.up {
  color: #ff4743;
}
.left-top-card .compare-last-week .compare-last-week-num.down::after {
  background-image: url(./netGold/down.png);
}
.left-top-card .compare-last-week .compare-last-week-num.up::after {
  background-image: url(./netGold/up.png);
}
.recently-five-day .recently-five-day-title {
  color: #8fbfff;
  font-size: 18px;
}
.recently-five-day .recently-five-day-content {
  margin-top: 10px;
  margin-left: 0;
}
.recently-five-day-content .recently-five-day-list {
  display: flex;
  align-items: center;
}
.recently-five-day-list .recently-five-day-text {
  color: #b2d1ff;
  font-size: 16px;
}
.recently-five-day-list .recently-five-day-bar {
  flex: 1;
  margin: 0 12px;
  position: relative;
}
.recently-five-day-list .recently-five-day-bar .recently-five-day-bar-bg {
  width: 100%;
  height: 6px;
  background-color: #5072b7;
  border-radius: 2px;
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.recently-five-day-list .recently-five-day-bar .recently-five-day-bar-fg {
  height: 6px;
  background: linear-gradient(90deg, #ffecc4 0%, #ffc982 100%);
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.recently-five-day-list .recently-five-day-num {
  color: #e4f6ff;
  font-weight: bold;
}
.recently-five-day-list .recently-five-day-num::after {
  content: "人";
}
.network-trade-container .network-trade-video {
  width: 198px;
  height: 198px;
}
.network-trade-container .network-trade-video .video {
  mix-blend-mode: screen;
}
.network-trade-container {
  display: flex;
  position: relative;
}
.network-trade-container .network-trade-card {
  width: 283px;
  height: 125px;
  background-image: url(./netGold/sdsd.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  right: 0;
  bottom: 25px;
  padding: 14px 0 14px 70px;
  box-sizing: border-box;
}
.network-trade-card .network-trade-card-item {
  display: flex;
  margin-bottom: 14px;
  justify-content: space-between;
}
.network-trade-card-item .network-icon-box {
  display: flex;
  align-items: center;
}
.network-trade-card-item i {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.network-trade-card-item i.custom {
  background-image: url(./netGold/icon6.png);
}
.network-trade-card-item i.trade-money {
  background-image: url(./netGold/icon5.png);
}
.network-trade-card-item i.trade-num {
  background-image: url(./netGold/icon8.png);
}
.network-trade-card-item .card-text {
  color: #b2d1ff;
  font-size: 18px;
  margin-left: 11px;
}
.network-trade-card-item .card-num {
  font-weight: bold;
  color: #e4f6ff;
  margin-right: 20px;
}
.network-trade-card-item .card-num.p::after {
  content: "人";
}
.network-trade-card-item .card-num.y::after {
  content: "元";
}
.network-trade-card-item .card-num.b::after {
  content: "笔";
}
.network-trade-box {
  margin-top: 20px;
}
.network-trade-box .network-trade-title {
  color: #e4f6ff;
  font-weight: bold;
  font-size: 20px;
}
/*左边的卡片结束*/
/*右边卡片开始*/
.net-gold-screen-top-right {
  width: 660px;
  height: 640px;
  background-image: url(./netGold/right-card.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  right: 0;
  top: 160px;
  padding: 33px 43px;
  box-sizing: border-box;
  text-align: left;
  transform: perspective(400px) rotateY(-5deg);
  transform-origin: 120% 85%;
}
.net-gold-screen-top-right .right-echarts-box {
  height: 160px;
  margin-bottom: 20px;
}
.net-gold-screen-top-right .title {
  font-size: 20px;
  font-weight: bold;
}
.net-gold-screen-top-right .trade-pect {
  margin-left: 30px;
}
.net-gold-screen-top-right .trade-card-group {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.net-gold-screen-top-right .trade-card-group .trade-card-item {
  color: white;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
}
.net-gold-screen-top-right .trade-card-group .trade-card-dot {
  font-size: 50px;
  color: white;
}
.net-gold-screen-top-right .trade-card-group .trade-card-item.text {
  font-size: 30px;
  line-height: 70px;
}
.net-gold-screen-top-right .toggle-box {
  font-size: 20px;
}
.net-gold-screen-top-right .toggle-box .title {
  color: #e4f6ff;
  display: inline-block;
  margin-right: 30px;
  font-size: bold;
  opacity: 0.6;
}
.net-gold-screen-top-right .toggle-box .active {
  opacity: 1;
}
.net-gold-screen-top-right .toggle-box .top-num {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.net-gold-screen-top-right .toggle-box .top-num .active {
  opacity: 1;
}
.net-gold-screen-top-right .toggle-box .top-num div {
  font-size: 16px;
  background: url(./netGold/center-item.png);
  background-size: 100% 100%;
  line-height: 48px;
  text-align: center;
  height: 48px;
  width: 210px;
  opacity: 0.6;
}
.net-gold-screen-top-right .toggle-box .top-num .box1::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #64e4ff;
}
.net-gold-screen-top-right .toggle-box .top-num .box2::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #ca86ff;
}
.net-gold-screen-top-right .toggle-box .top-num .box3::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #f6b37f;
}
.net-gold-screen-top-right .toggle-box .top-num .box4::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  background: #ffde6c;
}
.net-gold-screen-top-right .toggle-box .echarts-box {
  height: 180px;
}
.net-gold-screen-top-right .toggle-box .hidden-box {
  display: none;
}
.card-group {
  display: flex;
  justify-content: space-between;
}
.card-group .card-group-item {
  width: 140px;
  height: 68px;
  background-color: rgba(50, 90, 204, 0.3);
}
.card-group .card-group-item .card-group-item-text {
  color: #8ac1ff;
  font-size: 16px;
  text-align: center;
  margin-top: 9px;
}
.card-group .card-group-item .card-group-item-num {
  color: #ffc674;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.card-group .card-group-item .card-group-item-num.num::after {
  content: "万";
}
.card-group .card-group-item .card-group-item-num.down {
  color: #64e4ff;
}
.card-group .card-group-item .card-group-item-num.up {
  color: #ff4743;
}
.card-group .card-group-item .card-group-item-num.down::after {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url(./netGold/down.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: inline-block;
}
.card-group .card-group-item .card-group-item-num.up::after {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url(./netGold/up.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display: inline-block;
}
.card-group .card-group-item .card-group-item-num.num {
  content: "万";
}
.card-group .card-group-item .card-group-item-num.bi {
  content: "笔";
}
.card-echarts {
  height: 160px;
}
/*右边卡片结束*/
.trade-card-title-group {
  position: absolute;
  width: 100%;
  top: -40px;
}
.trade-card-title-group .trade-card-title-item {
  display: none;
}
.trade-card-title-group .trade-card-title-item.active {
  display: block;
}
.trade-card-title-item .title-item-text {
  font-size: 28px;
  font-weight: bold;
  transform: translate(-140px, 60%);
}
</style>
<style lang="less">
.bottom-box {
  position: absolute;
  bottom: 20px;
  left: 20px;
  overflow: hidden;
  height: 300px;
  width: 1920px;
}
.bottom-box .bottom-inner {
  width: 6400px;
  transition: all 2s linear;
  color: white;
}
.bottom-box > .bottom-inner > div {
  display: inline-block;
  transition: all 2s linear;
  width: 567px;
  height: 295px;
  background-image: url(./netGold/runner-card-item.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  margin: 0 30px;
  opacity: 0;
  vertical-align: top;
}
.bottom-box > .bottom-inner > div .title {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
}
.bottom-box > .bottom-inner > div .center-num-box {
  height: 48px;
  width: 520px;
  margin: 0 auto;
  background: url(./netGold/line-bar.png);
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0 20px;
  color: #8ac1ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.bottom-box > .bottom-inner > div .center-num-box .down {
  color: #64e4ff;
}
.bottom-box > .bottom-inner > div .center-num-box .down::after {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background-image: url(./netGold/down.png);
  background-size: 100% 100%;
}
.bottom-box > .bottom-inner > div .center-num-box .up {
  color: #ff4743;
}
.bottom-box > .bottom-inner > div .center-num-box .up::after {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  background-image: url(./netGold/up.png);
  background-size: 100% 100%;
}
.bottom-box > .bottom-inner > div .center-num-box div {
  text-align: center;
  display: flex;
  align-items: center;
}
.bottom-box > .bottom-inner > div .center-num-box div .icon {
  width: 32px;
  height: 32px;
  vertical-align: center;
  margin-right: 10px;
}
.bottom-box > .bottom-inner > div .center-num-box .first-child {
  flex-basis: 320px;
}
.bottom-box > .bottom-inner > div .center-num-box .last-child {
  flex-basis: 180px;
}
.bottom-box > .bottom-inner > div .bottom-echarts-box {
  height: 180px;
  width: 510px;
  margin: 10px auto;
}
.bottom-box > .bottom-inner > div .echarts-title {
  position: relative;
}
.bottom-box > .bottom-inner > div .echarts-title .practical1 {
  position: absolute;
  top: 10px;
  right: 110px;
}
.bottom-box > .bottom-inner > div .echarts-title .practical1::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #ffde6c 0%,
    #ffde6c 10%,
    rgba(255, 222, 108, 0) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .practical0::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #35d462 0%,
    #35d462 10%,
    rgba(53, 212, 98, 0) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .practical3 {
  position: absolute;
  top: 10px;
  right: 310px;
}
.bottom-box > .bottom-inner > div .echarts-title .practical3::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #6b53ff 0%,
    #6b53ff 10%,
    rgba(107, 83, 255, 0) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .practical5::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #6b53ff 0%,
    #6b53ff 10%,
    rgba(107, 83, 255, 0) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .practical6::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #73ffb5 0%,
    #73ffb5 10%,
    rgba(115, 255, 181, 0) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .practical7::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #ffd1a9 0%,
    #ffd1a9 10%,
    rgba(255, 209, 169, 7) 100%
  );
}
.bottom-box > .bottom-inner > div .echarts-title .forecast1 {
  position: absolute;
  top: 10px;
  right: 30px;
}
.bottom-box > .bottom-inner > div .echarts-title .forecast1::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 6px;
  border-top: 2px dotted #64e4ff;
  transform: translateY(2px);
}
.bottom-box > .bottom-inner > div .echarts-title .forecast3 {
  position: absolute;
  top: 10px;
  right: 200px;
}
.bottom-box > .bottom-inner > div .echarts-title .forecast3::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  transform: translateY(2px);
  background: linear-gradient(
    #199db9 0%,
    #199db9 10%,
    rgba(25, 157, 185, 0) 100%
  );
}
.bottom-box > .bottom-inner > .outer-right {
  transform: perspective(800px) rotateY(60deg);
  transform-origin: -40% 50%;
}
.bottom-box > .bottom-inner > .outer-left {
  transform: perspective(800px) rotateY(-60deg);
  transform-origin: 140% 50%;
}
.bottom-box > .bottom-inner > .left-box {
  transform: perspective(800px) rotateY(-13deg);
  transform-origin: 140% 50%;
  opacity: 0.8;
}
.bottom-box > .bottom-inner > .center-box {
  transform: rotateY(0deg);
  opacity: 1;
}
.bottom-box > .bottom-inner > .right-box {
  transform: perspective(800px) rotateY(13deg);
  transform-origin: -40% 50%;
  opacity: 0.8;
}
</style>