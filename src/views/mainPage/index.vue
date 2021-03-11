<template>
  <div class="use-main-container">
    <div class="top-report-box"
         v-show="msgStatus">
      <img src="./img/warn-msg.svg"
           alt=""> 告警信息：这是一段告警信息
      <img src="./img/close.svg"
           class="icon-close"
           @click="closeMsg"
           alt="">
    </div>
    <div class="content-container">
      <div class="left-part">
        <div class="incident-box shadow-box">
          <div class="incident-resolution-box">
            <div class="inc-img-box">
              <img src="./img/incidentTimeSolve.svg"
                   alt="">
              事件按时解决率 <span :style="'color:'+incTimePre==100?'#00B366':'#333333'">{{incTimePre}}%</span>
            </div>
            <div class="precent-box">
              <div class="pre-num"
                   :style="'width:'+incTimePre+'%'">
              </div>
            </div>
          </div>
          <div class="can-box">
            <canvas id="information-canvas"
                    class="inf-canvas"></canvas>
          </div>
          <div class="incident-resolution-box">
            <div class="inc-img-box">
              <img src="./img/incidentTimeSolve.svg"
                   alt="">
              柜面24小时内解决率 <span :style="'color:'+(dayPre==100?'#00B366':'#333333')">{{dayPre}}%</span>
            </div>
            <div class="precent-box">
              <div class="pre-num"
                   :style="'width:'+dayPre+'%'">
              </div>
            </div>
          </div>
        </div>
        <div class="event-manager-box shadow-box">
          <div class="content-title">
            事件管理
          </div>
          <div class="event-content-box">
            <div class="total-num-box">
              <div class="num-item"><img src="./img/sand-clock.svg"
                     alt=""> <span>处理中事件</span><span>38 <span>个</span></span></div>
              <div class="num-item"><img src="./img/clock.svg"
                     alt=""> <span>超时事件</span><span>8 <span>个</span> </span></div>
              <div class="monitoring-container">
                <div class="monitoring-item">
                  <img src="./img/p4.svg"
                       alt="">
                  P1类监控事件<br><span>45</span>个
                </div>
                <div class="monitoring-item">
                  <img src="./img/p1.svg"
                       alt="">
                  P4类监控事件<br><span>45</span>个
                </div>
              </div>
            </div>
            <div class="apply-box">
              <div class="img-box">
                <img src="./img/apply.svg"
                     alt=""><br>
                处理中事件<br>
                应用top3
                <div class="border-box">
                  <div class="border-line"></div>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>
              <div class="rank-container">
                <div class="rank-box">
                  <div class="rank-item"
                       v-for="(item,index) in applyList"
                       :key="index">
                    <span>{{item.name}}</span>
                    <span> <span class="num">{{item.num}}</span>个</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="office-box">
              <div class="img-box">
                <img src="./img/office.svg"
                     alt=""><br>
                处理中事件<br>
                科室top3
                <div class="border-box">
                  <div class="border-line"></div>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
              </div>
              <div class="rank-container">
                <div class="rank-box">
                  <div class="rank-item"
                       v-for="(item,index) in officeList"
                       :key="index">
                    <span>{{item.name}}</span>
                    <span> <span class="num">{{item.num}}</span>个</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery-cover-box">
          <div class="delivery-box shadow-box">
            <div class="content-title">
              交付率
            </div>
            <div class="circel-show-box">
              <div class="circle-item">
                <div class="svg-box">
                  <svg width="120px"
                       height="120px"
                       viewBox="0 0 150 150">
                    <linearGradient id="blueLin"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%">
                      <stop offset="0%"
                            style="stop-color:#5BDAFD;
stop-opacity:1" />
                      <stop offset="100%"
                            style="stop-color:#3057D6;
stop-opacity:1" />
                    </linearGradient>
                    <circle cx="75"
                            cy="75"
                            r="60"
                            stroke-linecap="round"
                            stroke-width="6"
                            fill="none"
                            stroke="#efefef"></circle>
                    <circle cx="75"
                            class='color-circle'
                            cy="75"
                            r="60"
                            stroke-width="7"
                            stroke-linecap="round"
                            stroke-dasharray="274 1000"
                            fill="none"
                            stroke="url(#blueLin)"></circle>
                    <text x="75"
                          y="80"
                          class="cir-text1"
                          style="fill:#343B50">89.0%</text>
                  </svg>
                  <div class="cir-target-box">
                    目标:100%
                  </div>
                  <div class="svg-name-box">
                    基础环境24小时
                  </div>
                </div>
              </div>
              <div class="circle-item">
                <div class="svg-box">
                  <svg width="120px"
                       height="120px"
                       viewBox="0 0 150 150">
                    <linearGradient id="blueLin2"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%">
                      <stop offset="0%"
                            style="stop-color:#1FE0FB;
stop-opacity:1" />
                      <stop offset="100%"
                            style="stop-color:#0B8BCD;
stop-opacity:1" />
                    </linearGradient>
                    <circle cx="75"
                            cy="75"
                            r="60"
                            stroke-linecap="round"
                            stroke-width="6"
                            fill="none"
                            stroke="#efefef"></circle>
                    <circle cx="75"
                            class='color-circle'
                            cy="75"
                            r="60"
                            stroke-width="7"
                            stroke-linecap="round"
                            stroke-dasharray="274 1000"
                            fill="none"
                            stroke="url(#blueLin2)"></circle>
                    <text x="75"
                          y="80"
                          class="cir-text1"
                          style="fill:#343B50">89.0%</text>
                  </svg>
                  <div class="cir-target-box">
                    目标:100%
                  </div>
                  <div class="svg-name-box">
                    数据按时
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cover-box shadow-box">
            <div class="content-title">
              覆盖率
            </div>
            <div class="circel-show-box">
              <div class="circle-item">
                <div class="circle-inner"></div>
                <div class="svg-name-box2">
                  智能告警
                </div>
              </div>
              <div class="circle-item">
                <div class="circle-inner"></div>
                <div class="svg-name-box2">
                  数据中台
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="calendar-box shadow-box">
          <div class="calendar-top">
            <span class="year-box">
              {{'' + (canladerTime.getFullYear()) + '年' + (canladerTime.getMonth() + 1) + '月'}}
            </span>
            <span class="arrow-box">
              <i class="el-icon-arrow-left"
                 @click="monthChangePrev"></i>
              <i class="el-icon-arrow-right"
                 @click="monthChangeNext"></i>
            </span>
          </div>
          <div class="calendar-container">
            <div class="calendar-num-box calendar-flex-box">
              <div>一</div>
              <div>二</div>
              <div>三</div>
              <div>四</div>
              <div>五</div>
              <div>六</div>
              <div>日</div>
            </div>
            <div class="show-calendar-content"
                 :style='"height:"+(canladerStatus?40*weekNums+"px":"40px")'>
              <div class="calendar-flex-box"
                   :style="'margin-top:'+(this.canladerStatus ? '0' : '-' + this.canladerStatusIndex * 40 + 'px')"
                   ref="calendat-item">
                <div v-for="(item1,index) in week"
                     :key='index+"a"'></div>
                <div v-for="(item,index) in weekList"
                     :key='index'>{{item.day}}</div>
              </div>
            </div>
          </div>
          <div class="canlader-content">
            <div class="icon-arrow"><i style="transition:0.5s"
                 :class="{'el-icon-arrow-down':true,'icon-down':canladerStatus} "
                 @click='calShowChange'> </i> </div>
            <div class="icon-question">
              <svg t="1615126577427"
                   viewBox="0 0 1024 1024"
                   version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2136"
                   width="16"
                   height="16">
                <path d="M924.775214 349.821991c-22.726585-53.731708-55.254386-101.980547-96.68085-143.408034-41.427487-41.426463-89.677349-73.955288-143.409057-96.681873-55.644266-23.536019-114.73707-35.469804-175.633961-35.469804-60.897914 0-119.989695 11.933785-175.634984 35.469804-53.731708 22.726585-101.980547 55.25541-143.408034 96.681873s-73.955288 89.676326-96.681873 143.408034c-23.536019 55.645289-35.469804 114.73707-35.469804 175.63396 0 60.896891 11.933785 119.989695 35.469804 175.633961 22.726585 53.731708 55.25541 101.980547 96.681873 143.409057 41.426463 41.426463 89.676326 73.955288 143.408034 96.68085 55.645289 23.536019 114.73707 35.469804 175.634984 35.469804 60.896891 0 119.989695-11.933785 175.633961-35.469804 53.731708-22.726585 101.980547-55.254386 143.409057-96.68085 41.426463-41.427487 73.955288-89.677349 96.68085-143.409057 23.536019-55.644266 35.469804-114.73707 35.469804-175.633961 0-60.896891-11.933785-119.988672-35.469804-175.63396zM509.052369 915.252336c-214.933996 0-389.795361-174.861365-389.795361-389.795361s174.861365-389.795361 389.795361-389.795361S898.846707 310.522979 898.846707 525.456975 723.986365 915.252336 509.052369 915.252336z"
                      p-id="2137"
                      fill="#707070"></path>
                <path d="M496.089139 753.746126m-33.76907 0a33.769071 33.769071 0 1 0 67.538141 0 33.769071 33.769071 0 1 0-67.538141 0Z"
                      p-id="2138"
                      fill="#707070"></path>
                <path d="M517.230624 259.557265c-85.421423 0-154.917147 69.496748-154.917147 154.919193 0 16.95412 13.745035 30.699155 30.699155 30.699156s30.699155-13.745035 30.699156-30.699156c0-51.567418 41.952442-93.520883 93.518836-93.520883 51.566394 0 93.518837 41.953466 93.518837 93.520883 0 0.25685 0.013303 0.510629 0.020466 0.765433-1.310854 35.077878-22.743981 57.501564-57.598778 91.175468-35.9702 34.75042-80.736732 78.000414-88.879171 151.278274-1.872648 16.85179 10.269891 32.029452 27.120657 33.9021 1.152242 0.127913 2.296297 0.191358 3.429095 0.191358 15.434512 0 28.72827-11.61349 30.473005-27.310992 5.697763-51.280892 37.18384-81.699662 70.516983-113.904099 34.693115-33.517338 74.01464-71.505496 76.296611-133.089024 0.025583-0.707104 0.019443-1.408068-0.002047-2.105962 0.00921-0.300852 0.022513-0.60068 0.022513-0.903579-0.002047-85.421423-69.497771-154.918171-154.918171-154.91817z"
                      p-id="2139"
                      fill="#707070"></path>
              </svg>
              <div class="color-show-box">
                <span style="color:#999999">颜色表示</span>
                <div class="color-item">
                  <span></span> <span>活动</span>
                </div>
                <div class="color-item">
                  <span></span> <span>变更</span>
                </div>
                <div class="color-item">
                  <span></span> <span>运维</span>
                </div>
                <div class="color-item">
                  <span></span> <span>其他</span>
                </div>
                <div class="trigle-box"></div>

              </div>
            </div>
            <span class=‘content-time’> 11月24日</span>
            <div class="content-items">
              <div class="content-item"
                   v-for="(item,index) in remindList"
                   :key="index">
                <span :class="'color'+item.type">{{item.time}}</span>
                <span>{{item.content}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="risk-box shadow-box">
          <div class="content-title">
            风险控制
          </div>
          <div class="risk-content">
            <div class="risk-total-box">
              <div class="tisk-total-item">
                <span>0</span><br>事件数
              </div>
              <div class="tisk-total-item">
                <span>0</span><br>屡查屡犯问题数
              </div>
            </div>
            <div class="risk-table-item"
                 v-for="(item,index) in riskList"
                 :key="index">
              <div class="risk-name">
                <img :src="item.icon"
                     alt="">
                {{item.name}}
              </div>
              <div class="risk-num"><span>{{item.num}}</span>%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="automatic-box shadow-box">
      <div class="content-title">
        自动化
      </div>
      <div class="automatic-item-container">
        <div class="automatic-item"
             v-for="(item,index) in automaticList"
             :key="index">
          <div><img :src="item.icon"
                 alt=""><span class="auto-num"
                  :style="'color:'+item.num==100?'#00B366':'#333333'">{{item.num}}</span>% <span class="auto-target">{{item.targetNum}}%</span></div>
          <div>{{item.name}}</div>
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
      canladerStatus: false,
      canladerStatusIndex: 4,
      canladerTime: '',
      week: 1,
      MonthAllDay: 30,
      weekNums: 5,
      ctx: '',
      incTimePre: 80,
      dayPre: 100,
      applyList: [{ name: '科室1', num: 43 }, { name: '科室2', num: 42 }, { name: '科室3', num: 12 }],
      officeList: [{ name: '资产管理科室1', num: 63 }, { name: '科室2', num: 52 }, { name: '科室3', num: 12 }],
      remindList: [{ time: '9:00-11:00', content: '有个事', type: 4 }, { time: '9:00-11:00', content: '有个事', type: 1 }, { time: '5:00-8:00', content: '有个活动', type: 2 }, { time: '5:00-8:00', content: '有个活动', type: 3 }],
      circle1: '',
      circle2: '',
      riskList: [{ icon: require('./img/icon3.svg'), name: '信息系统可用率', num: 23 }, { icon: require('./img/icon2.svg'), name: '重要系统可用率', num: 56 }, { icon: require('./img/icon4.svg'), name: '制度标准内审覆盖率', num: 56 }],
      automaticList: [{ icon: require('./img/auto1.svg'), name: '变更系统自动化', num: 78.99, targetNum: 89.87 },
      { icon: require('./img/auto2.svg'), name: '网络变更自动化', num: 88.99, targetNum: 94.23 },
      { icon: require('./img/auto3.svg'), name: '应用发布自动化占比', num: 75.99, targetNum: 87.27 },
      { icon: require('./img/auto4.svg'), name: '批量自动化占比', num: 82.23, targetNum: 83.45 },
      { icon: require('./img/auto5.svg'), name: '终端远程运维占比', num: 90.99, targetNum: 94.87 },],
      msgStatus: true,
      weekList: []
    }
  },
  created () {
    this.canladerTime = new Date()
    console.log(this.canladerTime)
  },
  mounted () {
    this.$store.dispatch('changePageShow', { pageShow: false })
    // this.$refs['calendat-item'].style.marginTop = this.canladerStatus ? '0' : ('-' + this.canladerStatusIndex * 40 + 'px')
    this.canladerContentChange()
    this.canladerStatusIndex = Math.ceil((new Date().getDate() - this.week) / 7) - 1
    this.canvasInit()
    this.infNumInit(80)
    this.circleChange(30)
    this.circleChange2(50)
    this.circleInit()
    this.echartsCircleChange(0.6, 0.4)
  },
  methods: {
    mockDayList () {
      let arr = []
      for (let i = 1; i < this.MonthAllDay; i++) {
        arr.push({ day: i, type: 1 })
      }
      this.weekList = arr
    },
    closeMsg () {
      this.msgStatus = false
      console.log(this.msgStatus)
    },
    echartsCircleChange (num1, num2) {
      this.circle1.setOption({ series: [{ data: [num1, num1 - 0.01] }] })
      this.circle2.setOption({ series: [{ data: [num2, num2 - 0.01] }] })
    },
    circleInit () {
      this.circle1 = this.$echarts.init(document.getElementsByClassName('circle-inner')[0])
      this.circle1.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [],
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
      this.circle2 = this.$echarts.init(document.getElementsByClassName('circle-inner')[1])
      this.circle2.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [0.5, 0.5, 0.49],
          backgroundStyle: {
            color: 'white',
          },
          outline: {
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
              color: ['#B5F3FC'], // 0% 处的颜色
            }, {
              offset: 0,
              color: ['#0DABE5'], // 100% 处的颜色
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
    circleChange (num) {
      let cir = document.getElementsByClassName('color-circle')[0]
      cir.style.strokeDasharray = num * 3.74 + ' 1000'
      let text1 = document.getElementsByClassName('cir-text1')[0]
      text1.textContent = num + '%'
      if (num == 100) {
        text1.style.fill = 'green'
      } else {
        text1.style.fill = '#343b50'
      }
    },
    circleChange2 (num) {
      let cir = document.getElementsByClassName('color-circle')[1]
      cir.style.strokeDasharray = num * 3.74 + ' 1000'
      let text2 = document.getElementsByClassName('cir-text1')[1]
      text2.textContent = num + '%'
      if (num == 100) {
        text2.style.fill = 'green'
      } else {
        text2.style.fill = '#343b50'
      }
    },
    canvasInit () {
      let myCanvas = document.getElementById('information-canvas');
      let ctx = myCanvas.getContext("2d");
      this.ctx = ctx


      ctx.beginPath()//小圆
      ctx.lineWidth = 1;
      ctx.arc(150, 130, 80, 0.97 * Math.PI, 2.03 * Math.PI, false);//变动路径
      ctx.strokeStyle = '#3057D6';
      var grd = ctx.createLinearGradient(0, 100, 0, 0);
      grd.addColorStop(0, '#A8CBFF64');
      grd.addColorStop(1, "#3057D6");
      ctx.strokeStyle = grd;
      ctx.stroke();



      for (var z = 0; z < 5; z++) {
        ctx.font = 'normal 14px  Arial ';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#888888';
        ctx.fillText(z * 25 + '', 150 - 124 * Math.cos(z * 0.25 * Math.PI), 135 - 120 * Math.sin(z * 0.25 * Math.PI));
      }

      ctx.beginPath() //中央凸起线
      ctx.lineWidth = 1;
      ctx.moveTo(120, 120)
      ctx.lineTo(145, 120)
      ctx.lineTo(150, 113)
      ctx.lineTo(155, 120)
      ctx.lineTo(180, 120)
      var grd = ctx.createLinearGradient(0, 0, 0, 6);
      grd.addColorStop(0, '#fe9c5d');
      grd.addColorStop(1, "#fe9c5d81");
      ctx.strokeStyle = grd;
      ctx.stroke();

      ctx.font = 'normal 14px  Arial ';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#343B50';
      ctx.fillText('数据中心健康度', 150, 140);

    },
    infNumInit (num) {
      this.ctx.beginPath()//大圆
      this.ctx.lineWidth = 20;
      this.ctx.arc(150, 130, 100, 0.94 * Math.PI, (0.94 + 1.12 * num / 100) * Math.PI, false);
      var grd = this.ctx.createLinearGradient(0, 0, 200, 0);
      grd.addColorStop(0, "#A8CBFF");
      grd.addColorStop(1, "#3057D6");
      this.ctx.strokeStyle = grd;
      this.ctx.stroke();
      //圆总1.12pi 9个块 画8个分割线 
      let x = 1.12 * Math.PI / 9;
      for (var i = 0; i < 8; i++) {
        this.ctx.beginPath()
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(150 - 110 * Math.cos(0.07 * Math.PI + x * i), 130 - 110 * Math.sin(0.07 * Math.PI + x * i)) //起点计算 120*Math.sin(x)
        this.ctx.lineTo(150 - 90 * Math.cos(0.07 * Math.PI + x * i), 130 - 90 * Math.sin(0.07 * Math.PI + x * i))
        this.ctx.strokeStyle = 'white';
        this.ctx.stroke();
      }
      //数字
      this.ctx.font = 'bold 30px  Arial ';
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = '#034FBA';
      this.ctx.fillText(num, 145, 106);
      let x2 = 150;
      if (num < 10) {
        x2 = 165
      } else if (num === 100) {
        x2 = 180
      } else {
        x2 = 175
      }
      this.ctx.font = 'normal 20px  Arial ';
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = '#034FBA';
      this.ctx.fillText('分', x2, 105);

      //三角
      this.ctx.beginPath()
      this.ctx.lineWidth = 1;
      this.ctx.moveTo(150 + 88 * Math.cos(((100 - num) / 100 * 1.1 - 0.05) * Math.PI), 130 - 88 * Math.sin(((100 - num) / 100 * 1.1 - 0.05) * Math.PI))
      this.ctx.lineTo(150 + 88 * Math.cos(((100 - num) / 100 * 1.1 - 0.05) * Math.PI) - 8 * Math.cos(1 / 6 * Math.PI + ((100 - num) / 100 * 1.1 - 0.05) * Math.PI), 130 - 88 * Math.sin(((100 - num) / 100 * 1.1 - 0.05) * Math.PI) + 8 * Math.sin(1 / 6 * Math.PI + ((100 - num) / 100 * 1.1 - 0.05) * Math.PI))
      this.ctx.lineTo(150 + 88 * Math.cos(((100 - num) / 100 * 1.1 - 0.05) * Math.PI) - 8 * Math.cos(1 / 6 * Math.PI - ((100 - num) / 100 * 1.1 - 0.05) * Math.PI), 130 - 88 * Math.sin(((100 - num) / 100 * 1.1 - 0.05) * Math.PI) - 8 * Math.sin(1 / 6 * Math.PI - ((100 - num) / 100 * 1.1 - 0.05) * Math.PI))
      this.ctx.fillStyle = '#FE7720';
      this.ctx.fill();

    },
    monthChangePrev () {
      let preMon = this.canladerTime.getMonth()
      let year = this.canladerTime.getFullYear()
      if (preMon === 0) {
        year--;
        preMon = 12
      }
      this.canladerTime = new Date(year + '-' + preMon)
      this.canladerStatusIndex = 0
      this.canladerContentChange()
    },
    monthChangeNext () {
      let preMon = this.canladerTime.getMonth() + 2
      let year = this.canladerTime.getFullYear()
      if (preMon === 13) {
        year++;
        preMon = 1
      }
      this.canladerTime = new Date(year + '-' + preMon)
      this.canladerStatusIndex = 0
      this.canladerContentChange()
    },
    canladerContentChange () {
      this.week = new Date(this.canladerTime.getFullYear() + '-' + (this.canladerTime.getMonth() + 1)).getDay() - 1
      this.week = this.week === -1 ? 6 : this.week //当week为0时 周日
      this.MonthAllDay = new Date(this.canladerTime.getFullYear(), this.canladerTime.getMonth() + 1, 0).getDate() + 1
      this.weekNums = Math.ceil((this.MonthAllDay + this.week - 1) / 7)
      this.mockDayList()// 模拟每个月的时间

    },
    calShowChange () {
      this.canladerStatus = !this.canladerStatus
      console.log(this.$refs['calendat-item'].style.marginTop)
      // this.$refs['calendat-item'].style.marginTop = this.canladerStatus ? '0' : '-' + this.canladerStatusIndex * 40 + 'px'
    }
  }
}
</script>
<style lang="less" >
.use-main-container {
  width: 1080px;
  font-size: 14px;
  color: #4c4e4f;
  background: #f5f6fa;
  overflow: hidden;
  .top-report-box {
    height: 40px;
    background: #fffaeb;
    padding-left: 20px;
    line-height: 40px;
    img {
      height: 16px;
      width: 16px;
      transform: translateY(1px);
    }
    .icon-close {
      height: 12px;
      width: 12px;
      float: right;
      margin: 12px;
    }
  }
  .content-title {
    line-height: 45px;
    padding: 0 10px;
    border-bottom: 1px solid #e5e7f0;
    font-weight: bold;
  }
  .shadow-box {
    padding: 0 11px;
    box-shadow: 0px 5px 15px 0px rgba(179, 188, 203, 0.7);
    margin-bottom: 20px;
    background: #fff;
  }
  .content-container {
    width: 1040px;
    margin: 46px 20px 0px 20px;
    display: flex;
    .left-part {
      width: 720px;
      .incident-box {
        height: 88px;
        color: #343b50;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 20px;
        .incident-resolution-box {
          img {
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
          }
          span {
            display: inline-block;
            font-size: 24px;
            font-weight: bold;
            transform: translateY(2px);
          }
        }
        .can-box {
          height: 115px;
          width: 210px;
          border-radius: 115px 115px 0px 0px;
          transform: translateY(-20px);
          background: white;
          .inf-canvas {
            width: 100%;
            height: 100%;
          }
        }
        .precent-box {
          height: 10px;
          width: 240px;
          position: relative;
          z-index: 2;
          margin-top: 5px;
        }
        .pre-num {
          height: 10px;
          background: linear-gradient(to right, #3057d6, #5bdafd);
          border-radius: 5px;
          position: relative;
          z-index: 2;
        }
        .precent-box::after {
          content: "";
          width: 240px;
          height: 10px;
          // display: inline-block;
          background: #333;
          font-size: 0;
          border-radius: 5px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.1;
          z-index: 1;
        }
      }
      .event-manager-box {
        margin-top: 20px;
        height: 237px;
        .event-content-box {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          .total-num-box {
            padding: 10px;
            width: 216px;
            background: #fafafa;
            height: 150px;
            line-height: 40px;
            img {
              width: 30px;
              height: 25px;
              transform: translateY(4px);
            }
            span {
              display: inline-block;
            }
            span:nth-child(2) {
              width: 120px;
            }
            span:last-child {
              font-weight: bold;
              font-size: 20px;
              color: #333;

              span {
                font-size: 14px;
              }
            }
            .monitoring-container {
              margin-top: 10px;
              border-top: 1px solid #e5e7f0;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              line-height: 20px;
              .monitoring-item {
                font-size: 12px;
                padding: 10px 0;
                img {
                  float: left;
                  height: 24px;
                  width: 20px;
                }
                span {
                  font-size: 14px;
                  font-weight: bold;
                  display: inline;
                }
              }
            }
          }
          .apply-box,
          .office-box {
            width: 220px;
            height: 170px;
          }
          .apply-box {
            border-right: solid 1px #e5e7f0;
          }
          & > div {
            .img-box {
              display: inline-block;
              position: relative;
              font-size: 12px;
              color: #343b50;
              font-weight: bold;
              img {
                margin-top: 36px;
                height: 60px;
                width: 60px;
              }
              .border-box {
                position: absolute;
                overflow: hidden;
                top: 20px;
                right: -40px;
                height: 120px;
                width: 56px;
                span {
                  position: absolute;
                  width: 16px;
                  height: 16px;
                  line-height: 16px;
                  border-radius: 50%;
                  background: #3057d6;
                  text-align: center;
                  color: white;
                }
                span:nth-child(2) {
                  top: 0;
                  left: 10px;
                }
                span:nth-child(3) {
                  top: 50px;
                  right: 4px;
                }
                span:nth-child(4) {
                  bottom: 0;
                  left: 10px;
                }
                .border-line {
                  margin-top: -10px;
                  margin-left: -56px;
                  height: 140px;
                  width: 100px;
                  border-radius: 0 100px 100px 0;
                  border-right: dashed 1px #3057d6;
                }
              }
            }
            .rank-container {
              display: inline-block;
              vertical-align: top;
              margin-top: 14px;
            }
            .rank-box {
              display: flex;
              flex-direction: column;
              width: 110px;
              height: 130px;
              justify-content: space-between;
              margin-left: 45px;
              .rank-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span:first-child {
                  width: 60px;
                }
                span:last-child > .num {
                  color: #343b50;
                  font-weight: bold;
                  font-size: 14px;
                }
              }
              .rank-item:first-child,
              .rank-item:last-child {
                transform: translateX(-20px);
              }
            }
          }
        }
      }
      .delivery-cover-box {
        margin-top: 20px;
        display: flex;
        & > div {
          width: calc(~"50% - 10px");
          height: 237px;
        }
        .circel-show-box {
          display: flex;
          justify-content: space-around;
          align-content: center;
          margin-top: 20px;
          .circle-item {
            width: 120px;
            height: 150px;
            text-align: center;
            background: white;
            .color-circle {
              transform: rotate(90deg);
              transform-origin: center center;
            }
            .cir-text1 {
              font-size: 24px;
              color: #343b50;
              font-weight: bold;
              text-anchor: middle;
            }
            .svg-box {
              text-align: center;
              position: relative;
              .cir-target-box {
                position: absolute;
                top: 70px;
                left: 25px;
                padding: 2px 4px;
                transform: scale(0.8);
                transform-origin: center center;
                display: inline-block;
                border-radius: 10px;
                font-size: 12px;
                color: white;
                background: #3d8ee6;
              }
              .svg-name-box {
                color: #343b50;
              }
            }
            .circle-inner {
              width: 106px;
              height: 106px;
              margin-top: 10px;
            }
            .svg-name-box2 {
              width: 100px;
              margin-top: 10px;
            }
          }
        }
        .cover-box {
          margin-left: 20px;
        }
      }
    }
    .right-part {
      width: 402px;
      margin-left: 20px;
      .calendar-box {
        height: 344px;
        background: #f5f6f8;
        display: flex;
        flex-direction: column;
        .calendar-top {
          line-height: 42px;
          padding: 0 10px;
          .year-box {
            font-size: 18px;
            font-weight: bold;
          }
          .arrow-box {
            float: right;
          }
        }
        .calendar-container {
          .calendar-num-box {
            color: #4c4e4f;
            line-height: 20px;
            font-size: 12px;
          }
          .show-calendar-content {
            transition: 0.5s;
            overflow: hidden;
          }
          .calendar-flex-box {
            line-height: 40px;
            transition: 0.5s;
            & > div {
              display: inline-block;
              vertical-align: top;
              width: 39px;
              height: 40px;
              text-align: center;
            }
          }
        }
        .canlader-content {
          // height: 80px;
          overflow: hidden;
          width: calc(100% + 22px);
          // overflow-y: auto;
          box-sizing: border-box;
          padding: 0 17px;
          margin-left: -11px;
          background: #fff;
          border-radius: 12px 12px 6px 6px;
          .icon-arrow {
            text-align: center;
            margin-top: 6px;
            margin-bottom: 10px;
            .icon-down {
              transform: rotate(180deg);
            }
          }
          .icon-question {
            float: right;
            position: relative;
            .color-show-box {
              position: absolute;
              opacity: 0;
              transition: 0.5s;
              font-size: 12px;
              left: -108px;
              top: -8px;
              width: 101px;
              height: 133px;
              text-align: center;
              border-radius: 4px;
              background: white;
              box-shadow: 0px 5px 10px 0px rgba(179, 188, 203, 0.7);
              .color-item {
                color: #333333;
                padding: 0 15px;
                line-height: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                & > span:first-child {
                  display: inline-block;
                  height: 10px;
                  width: 10px;
                  border-radius: 50%;
                  transform: translateY(-1px);
                }
              }
              .color-item:first-of-type {
                margin-top: 10px;
              }
              .color-item:nth-child(2) > span:first-child {
                background: #3057d6;
              }
              .color-item:nth-child(3) > span:first-child {
                background: #00b366;
              }
              .color-item:nth-child(4) > span:first-child {
                background: #07b8ea;
              }
              .color-item:nth-child(5) > span:first-child {
                background: #bac5d5;
              }
              .trigle-box {
                height: 0px;
                width: 0px;
                border: 4px solid transparent;
                border-left-width: 6px;
                border-left-color: rgba(179, 188, 203, 0.4);
                position: absolute;
                right: -10px;
                top: 12px;
              }
            }
          }
          .icon-question:hover > .color-show-box {
            opacity: 1;
          }
          .content-time {
            font-size: 14px;
            font-weight: bold;
          }
          .content-items {
            margin-top: 30px;
            height: 130px;
            overflow: auto;
            margin-bottom: 10px;
            .content-item {
              font-size: 14px;
              line-height: 40px;
              span:first-child {
                width: 90px;
                display: inline-block;
                margin-right: 30px;
              }
              span:first-child::before {
                width: 10px;
                height: 10px;
                display: inline-block;
                content: "";
                margin-right: 10px;
                border-radius: 50%;
              }
              .color1::before {
                background: #3057d6;
              }
              .color2::before {
                background: #00b366;
              }
              .color3::before {
                background: #07b8ea;
              }
              .color4::before {
                background: #bac5d5;
              }
            }
            .content-item:not(:last-child) {
              border-bottom: 1px solid #e2e6ee;
            }
          }
        }
      }
      .risk-box {
        height: 237px;
        .risk-total-box {
          background: #fafafa;
          height: 52px;
          margin: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          .tisk-total-item {
            font-size: 12px;
            span {
              font-size: 20px;
              color: #38404d;
              font-weight: bold;
            }
          }
        }
        .risk-table-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          line-height: 24px;
          .risk-name {
            width: 180px;
            margin-left: 20px;
            img {
              transform: translateY(10px);
              margin-right: 10px;
            }
          }
          .risk-num {
            width: 50px;
            transform: translateY(3px);
            span {
              color: #38404d;
              font-weight: bold;
              font-size: 20px;
            }
          }
        }
      }
    }
    // background: black;
  }
  .automatic-box {
    margin: 0 20px 23px 20px;
    height: 133px;

    .automatic-item-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .automatic-item {
        margin-top: 10px;
        padding-top: 10px;
        box-sizing: border-box;
        img {
          width: 20px;
          height: 20px;
          transform: translateY(6px);
        }
        .auto-num {
          font-weight: bold;
          color: #343b50;
          font-size: 16px;
        }
        .auto-target {
          display: inline-block;
          padding: 2px 4px;
          font-size: 12px;
          line-height: 12px;
          border-radius: 10px;
          color: #697184;
          transform-origin: 0 center;
          transform: scale(0.8);
          border: 1px solid #3272ff;
        }
        text-align: center;
        width: 180px;
        height: 66px;
      }
      .automatic-item:nth-child(2) {
        border-right: solid 1px #e5e7f0;
      }
    }
  }
}
</style>