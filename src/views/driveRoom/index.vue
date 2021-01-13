<template>
  <div class="drive-room-container">
    <video src="./img/bg.mp4"
           class="bg-video"
           autoplay
           width="1920"
           height="auto"
           muted
           loop></video>
    <div class="drive-top-box">
      <div class="time-box">
        2020年1月1日 24：00：00
      </div>
      <div class="mark-box">
        重要提示：陆家嘴机存储可分配容量超过 <span>88888</span> TB！！！
      </div>

      <div class="title-super">
        机房资源情况

      </div>
    </div>
    <div class="drive-main-footer"></div>
    <div class="drive-left-box">
      <div class="header">
        <video src="./img/header.mp4"
               autoplay
               muted
               loop></video>
      </div>
      <div class="title">
        人力资源
      </div>
      <div class="staff-num-box">
        <div class="left">
          <div class="inner-staff">
            <div class="img-box">
              <img src="./img/inner-staff.png"
                   alt="">
            </div>

            <div class="num-box">
              中心员工总数<br>
              <span>8888888</span>
            </div>
          </div>
          <div class="inner-staff">
            <div class="img-box">
              <img src="./img/outer-staff.png"
                   alt="">
            </div>

            <div class="num-box">
              中心外协员工总数<br>
              <span>8888888</span>
            </div>
          </div>
        </div>

      </div>
      <div class="distribution-room-box">
        <div class="left">
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <img src="./img/circle-tribule.png"
               width='20px'
               height="20px"
               alt="">
          各处室分布情况
        </div>
        <div class="left right">
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
          <div class="room">
            <div class="name">调度管理处</div>
            <div class="schedule">
              <div class="white-box">
                20人
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="title"
           style="margin-top:60px;margin-bottom:10px">
        人员各地区分布情况
      </div>
      <div class="china-map-box">
      </div>
    </div>
    <div class="drive-center-box">
      <div class="top-circle-box">
        <div class="circle-outer">
          <div class="cneter-circle">
            <div class="equipment-able-num">
              <div class="equipment-title">可分配柜数</div>
              <span class="gold-coor">8888888个</span>
            </div>
            <div class="equipment-total-num">
              <div class="equipment-title">机柜总数</div>
              <span>8888888个</span>
            </div>
            <svg class='system-circle'
                 width="150px"
                 height="150px"
                 viewBox="0 0 150 150">
              <circle class="system-inner-bg"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-width="5"
                      stroke-linecap="round"
                      fill="none"
                      stroke="#2c5aa5"></circle>
              <circle class="system-inner"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-linecap="round"
                      stroke-width="5"
                      fill="none"
                      stroke="#5aa1e7"></circle>
            </svg>
          </div>
          <div class="circle-title"> 机柜资源</div>
        </div>
        <div class="special-circle">
          <div class="circle-outer circle-outer2 ">
            <div class="cneter-circle">
              <div class="equipment-able-num">
                <div class="equipment-title">可分配接口数</div>
                <span class="gold-coor">8888888个</span>
              </div>
              <div class="equipment-total-num">
                <div class="equipment-title">总接口数</div>
                <span>8888888个</span>
              </div>
              <svg class='system-circle'
                   width="150px"
                   height="150px"
                   viewBox="0 0 150 150">
                <circle class="system-inner-bg"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-width="5"
                        stroke-linecap="round"
                        fill="none"
                        stroke="#519da8"></circle>
                <circle class="system-inner"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-linecap="round"
                        stroke-width="5"
                        fill="none"
                        stroke="#91f1f5"></circle>
              </svg>
            </div>
            <div class="circle-title">网络资源-网络交换机</div>
          </div>
          <div class="circle-outer circle-outer2  back-circle">
            <div class="cneter-circle">
              <div class="equipment-able-num">
                <div class="equipment-title">可分配接口数2</div>
                <span class="gold-coor">666666个</span>
              </div>
              <div class="equipment-total-num">
                <div class="equipment-title">总接口数</div>
                <span>666666个</span>
              </div>
              <svg class='system-circle'
                   width="150px"
                   height="150px"
                   viewBox="0 0 150 150">
                <circle class="system-inner-bg"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-width="5"
                        stroke-linecap="round"
                        fill="none"
                        stroke="#519da8"></circle>
                <circle class="system-inner"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-linecap="round"
                        stroke-width="5"
                        fill="none"
                        stroke="#91f1f5"></circle>
              </svg>
            </div>
            <div class="circle-title">网络资源-网络交换机2</div>
          </div>
        </div>
        <div class="circle-outer">
          <div class="cneter-circle">
            <div class="equipment-able-num">
              <div class="equipment-title">存储可分配容量</div>
              <span class="gold-coor">8888888TB</span>
            </div>
            <div class="equipment-total-num">
              <div class="equipment-title">存储总容量</div>
              <span>8888888个</span>
            </div>
            <svg class='system-circle'
                 width="150px"
                 height="150px"
                 viewBox="0 0 150 150">
              <circle class="system-inner-bg"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-width="5"
                      stroke-linecap="round"
                      fill="none"
                      stroke="#2c5aa5"></circle>
              <circle class="system-inner"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-linecap="round"
                      stroke-width="5"
                      fill="none"
                      stroke="#5aa1e7"></circle>
            </svg>
          </div>
          <div class="circle-title">存储资源</div>
        </div>
        <div class="special-circle">
          <div class="circle-outer circle-outer2">
            <div class="cneter-circle">
              <div class="equipment-able-num">
                <div class="equipment-title">小型CPU总核数</div>
                <span class="gold-coor">8888888核</span>
              </div>
              <div class="equipment-total-num">
                <div class="equipment-title">CPU可分配核数</div>
                <span>8888888核</span>
              </div>
              <svg class='system-circle'
                   width="150px"
                   height="150px"
                   viewBox="0 0 150 150">
                <circle class="system-inner-bg"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-width="5"
                        stroke-linecap="round"
                        fill="none"
                        stroke="#519da8"></circle>
                <circle class="system-inner"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-linecap="round"
                        stroke-width="5"
                        fill="none"
                        stroke="#91f1f5"></circle>
              </svg>
            </div>
            <div class="circle-title">计算资源-PC服务器</div>
          </div>
          <div class="circle-outer circle-outer2 back-circle">
            <div class="cneter-circle">
              <div class="equipment-able-num">
                <div class="equipment-title">小型CPU总核数2</div>
                <span class="gold-coor">666666核</span>
              </div>
              <div class="equipment-total-num">
                <div class="equipment-title">CPU可分配核数2</div>
                <span>666666核</span>
              </div>
              <svg class='system-circle'
                   width="150px"
                   height="150px"
                   viewBox="0 0 150 150">
                <circle class="system-inner-bg"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-width="5"
                        stroke-linecap="round"
                        fill="none"
                        stroke="#519da8"></circle>
                <circle class="system-inner"
                        cx="75"
                        cy="75"
                        r="60"
                        stroke-linecap="round"
                        stroke-width="5"
                        fill="none"
                        stroke="#91f1f5"></circle>
              </svg>
            </div>
            <div class="circle-title">计算资源-PC服务器2</div>
          </div>
        </div>
        <div class="circle-outer">
          <div class="cneter-circle"
               style="padding-top:60px">
            <div class="equipment-able-num">
              <div class="equipment-title">应用系统总数</div>
              <span class="gold-coor"
                    style="line-height:30px">8888888个</span>
            </div>
            <svg class='system-circle'
                 width="150px"
                 height="150px"
                 viewBox="0 0 150 150">
              <circle class="system-inner-bg"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-width="5"
                      stroke-linecap="round"
                      fill="none"
                      stroke="#2c5aa5"></circle>
              <circle class="system-inner"
                      cx="75"
                      cy="75"
                      r="60"
                      stroke-linecap="round"
                      stroke-width="5"
                      fill="none"
                      stroke="#5aa1e7"></circle>
            </svg>
          </div>
          <div class="circle-title">应用资源</div>
        </div>
      </div>
      <div class="aofeng-room">
        <div class="title">鳌峰机房资源情况</div>
        <div class="video-box">
          <video src="./img/center-main.mp4"
                 autoplay
                 muted
                 loop></video>
        </div>
        <div class="bord-container">
          <div class="center-bord bord0">
            <div class="title">
              机柜资源
            </div>
            <div class="num-box">
              <div class="left">
                <div class="bord-title">
                  机柜总数
                </div>
                <span class="bord-num">888888个</span>
              </div>
              <div class="right">
                <div class="bord-title">
                  可分配柜数
                </div>
                <span class="bord-num">8888个</span>
              </div>
            </div>
          </div>
          <div class="center-bord bord1">
            <div class="title">
              网络资源
            </div>
            <div class="num-box">
              <div class="left">
                <div class="bord-title">
                  可分配接口数
                </div>
                <span class="bord-num">888888个</span>
              </div>
              <div class="right">
                <div class="bord-title">
                  交换机总接口数
                </div>
                <span class="bord-num">8888个</span>
              </div>
            </div>
          </div>
          <div class="center-bord bord2">
            <div class="title">
              存储资源
            </div>
            <div class="num-box">
              <div class="left">
                <div class="bord-title">
                  存储总容量
                </div>
                <span class="bord-num">888888TB</span>
              </div>
              <div class="right">
                <div class="bord-title">
                  存储总容量
                </div>
                <span class="bord-num">8888TB</span>
              </div>
            </div>
          </div>
          <div class="center-bord bord3">
            <div class="title">
              计算资源
            </div>
            <div class="num-box">
              <div class="left">
                <div class="bord-title">
                  小型CPU总核数
                </div>
                <span class="bord-num">888888核</span>
              </div>
              <div class="right">
                <div class="bord-title">
                  CPU可分配核数
                </div>
                <span class="bord-num">8888核</span>
              </div>
            </div>
          </div>
          <div class="center-bord bord4">
            <div class="title">
              应用资源
            </div>
            <div class="num-box">
              <div class="left">
                <div class="bord-title">
                  系统应用总数
                </div>
                <span class="bord-num">888888个</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drive-right-box">
      <div class="title">
        运营指标
      </div>
      <div class="system-status">
        <div class="left">
          系统可用性汇总值<br>
          <span class="num-box ">888888个</span>
        </div>
        <div class="right">
          <div>
            故障总数报告<br>
            <span class="num-box">8888个</span>
          </div>
          <div>
            周新增<br>
            <span class="num-box ">8个</span>
          </div>
        </div>
      </div>
      <div class="circle-outer">
        <div class="circle circle1">
          <div class="circle-inner"></div>
          <div class="title">核心业务系统异常率</div>
        </div>
        <div class="circle circle2">
          <div class="circle-inner"></div>
          <div class="title">风险事件控制率</div>
        </div>
      </div>
      <div class="title">
        工作任务跟踪
      </div>
      <div class="task-echarts-box">
        <div class="inner-num">
          <span class="left">周期</span>
          <span class="right">进展比例</span>
        </div>
        <div class="inner-echarts"></div>
      </div>
      <div class="title">
        自动率化
      </div>
      <div class="indicator-box">
        <div class="left">
          <div class="svg-box">
            <div class="num-box">
              88%
            </div>
            <svg class='fund-circle'
                 width="156px"
                 height="156px"
                 viewBox="0 0 156 156">
              <circle class="indicator-inner"
                      cx="78.6"
                      cy="76"
                      r="58"
                      stroke-width="19"
                      fill="none"
                      stroke="#6cb2ac"></circle>

            </svg>
          </div>
          下发自动化率
        </div>
        <div class="right">
          <div class="svg-box">
            <div class="num-box">
              88%
            </div>
            <svg class='fund-circle'
                 width="156px"
                 height="156px"
                 viewBox="0 0 156 156">
              <circle class="indicator-inner"
                      cx="78.6"
                      cy="76"
                      r="58"
                      stroke-width="19"
                      fill="none"
                      stroke="#e7b957"></circle>

            </svg>
          </div>
          变更自动化率
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echartsLiquidfill from 'echarts-liquidfill'//引入
import 'echarts/map/js/china.js'
export default {
  data () {
    return {
      img1: require('./img/bar.png'),
      bordIndex: 0,
      time1: ''
    }
  },
  mounted () {
    this.$store.dispatch('changePageShow', { pageShow: false })
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
    // this.circleInit()
    // this.taskEchartsInit()
    // this.drawLine()
    var time2 = setInterval(() => {
      this.bordSyetemChange()
    }, 36000);
    var time3 = setTimeout(() => {
      this.time1 = setInterval(() => {
        this.bordChange()
      }, 6000)
    }, 2000);
    // window.onfocus = () => {
    //   // 开始计时或者播放
    //   time3 = setTimeout(() => {
    //     this.time1 = setInterval(() => {
    //       this.bordChange()
    //     }, 6000)
    //   }, 2000)
    //   time2 = setInterval(() => {
    //     this.bordSyetemChange()
    //   }, 36000)
    // };
    // window.onblur = () => {
    //   //停止计时或者播放
    //   clearTimeout(time2)
    //   clearTimeout(time3)
    // };
  },
  methods: {
    bordSyetemChange () {
      clearInterval(this.time1)
      $('.center-bord').each((index, ele) => {
        ele.classList.add('bord-center')
        ele.classList.add('bord-speed')
      })
      setTimeout(() => {
        $('.center-bord').removeClass('bord-center')
      }, 1000)
      setTimeout(() => {
        $('.center-bord').removeClass('bord-speed')
        this.bordIndex = 0
        this.time1 = setInterval(() => {
          this.bordChange()
        }, 6000)
      }, 2000)
    },
    bordChange () {
      this.bordIndex++
      if (this.bordIndex == 6) {
        this.bordIndex = 1
      }
      $('.center-bord').each((index, ele) => {
        ele.classList.remove('bord' + ((this.bordIndex + index - 1) % 5))
        if ((this.bordIndex + index) % 5 == 0) {
          ele.classList.add('bord5')
          setTimeout(() => {
            ele.classList.remove('bord5')
            ele.classList.add('bord6')
          }, 660)
          setTimeout(() => {
            ele.classList.remove('bord6')
            ele.classList.add('bord0')
          }, 1320)
          return
        }
        ele.classList.add('bord' + ((this.bordIndex + index) % 5))
      })
    },
    fullScreen () {
      $('.drive-room-container').css('transform', `scale(${document.documentElement.clientWidth / 1920},${document.documentElement.clientHeight / 1080})`)
    },
    circleInit () {
      var circle1 = this.$echarts.init(document.getElementsByClassName('circle-inner')[0])
      circle1.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [0.1, 0.1, 0.09],
          backgroundStyle: {
            color: 'none',
          },
          outline: {
            //show: true , //是否显示轮廓 布尔值
            borderDistance: 5, //外部轮廓与图表的距离 数字
            itemStyle: {
              borderColor: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 1,
                  color: ['rgba(58,188,242,1)'], // 0% 处的颜色
                }, {
                  offset: 0,
                  color: ['rgba(74,83,243,1)'], // 100% 处的颜色
                }],
              }, //边框的颜色
              borderWidth: 5,  //边框的宽度
              //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
              //shadowColor: '#000' //外部轮廓的阴影颜色 
            }
          },
          color: [{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 1,
              color: ['rgba(58,188,242,1)'], // 0% 处的颜色
            }, {
              offset: 0,
              color: ['rgba(74,83,243,1)'], // 100% 处的颜色
            }],
          }],
          label: { //To change the text, you may use label.formatter, which can be set to a string or function.
            normal: {
              textStyle: {
                color: '#307CF7', //波浪上文本颜色
                insideColor: 'white', //波浪内部字体颜色
                fontSize: 20
              },
              position: ['50%', '70%'], //Text position is at the center by default. label.position can be set to be 'inside', 'left', 'right', 'top', 'bottom', or horizontal and vertical positions like ['10%', '20%'], which means '10%' to the left (controlled by label.align, which can be 'left', 'center', or 'right') and '20%' to the top (controlled by label.baseline, which can be 'top', 'middle', or 'bottom').
            }
          }
        }]
      })
      var circle2 = this.$echarts.init(document.getElementsByClassName('circle-inner')[1])
      circle2.setOption({
        series: [{
          type: 'liquidFill',
          radius: '90%',
          data: [0.5, 0.5, 0.49],
          backgroundStyle: {
            color: 'none',
          },
          outline: {
            //show: true , //是否显示轮廓 布尔值
            borderDistance: 5, //外部轮廓与图表的距离 数字
            itemStyle: {
              borderColor: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [{
                  offset: 1,
                  color: ['rgba(0,131,229,1)'], // 0% 处的颜色
                }, {
                  offset: 0,
                  color: ['rgba(0,221,210,1)'], // 100% 处的颜色
                }],
              }, //边框的颜色
              borderWidth: 5,  //边框的宽度
              //shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
              //shadowColor: '#000' //外部轮廓的阴影颜色 
            }
          },
          color: [{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 1,
              color: ['rgba(0,131,229,1)'], // 0% 处的颜色
            }, {
              offset: 0,
              color: ['rgba(0,221,210,1)'], // 100% 处的颜色
            }],
          }],
          label: { //To change the text, you may use label.formatter, which can be set to a string or function.
            normal: {
              textStyle: {
                color: '#307CF7', //波浪上文本颜色
                insideColor: 'white', //波浪内部字体颜色
                fontSize: 20
              },
              position: ['50%', '70%'], //Text position is at the center by default. label.position can be set to be 'inside', 'left', 'right', 'top', 'bottom', or horizontal and vertical positions like ['10%', '20%'], which means '10%' to the left (controlled by label.align, which can be 'left', 'center', or 'right') and '20%' to the top (controlled by label.baseline, which can be 'top', 'middle', or 'bottom').

            }
          }
        }]
      })
    },
    taskEchartsInit () {
      var echarts1 = this.$echarts.init($('.inner-echarts')[0])
      let Option = {
        grid: {
          top: '10%',

          right: '40px'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#8CBBFA'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(86,126,210,0.3)'
            }
          },
          data: ['项目名称1', '项目名称2', '项目名称3', '项目名称4', '项目名称5']
        },
        yAxis: [{
          name: '月',
          nameLocation: 'end',
          nameGap: 8,
          nameTextStyle: {
            color: '#8CBBFA',
          },
          type: 'value',
          axisLabel: {
            color: '#8CBBFA'
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(86,126,210,0.3)'
            }
          }
        }, {
          name: '百分比',
          nameLocation: 'end',
          nameGap: 8,
          min: 0,
          max: 100,
          nameTextStyle: {
            color: '#8CBBFA',
            padding: [0, -40, 0, 0]

          },
          type: 'value',
          axisLabel: {
            color: '#8CBBFA',
            formatter: function (item, index) {
              return item + '%'
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(86,126,210,0.3)'
            }
          }
        }],
        // series: [{
        //   data: [820, 932, 901, 934, 1290, 1330, 1320],
        //   type: 'line',
        //   color: '#FFCA3D',
        //   symbol: "none",
        //   areaStyle: {
        //     color: {
        //       type: 'linear',
        //       x: 0,
        //       y: 0,
        //       x2: 0,
        //       y2: 1,
        //       colorStops: [{
        //         offset: 0, color: 'rgba(255,202,61,0.8)' // 0% 处的颜色
        //       }, {
        //         offset: 1, color: 'rgba(255,202,61,0.1)' // 100% 处的颜色
        //       }],
        //       global: false // 缺省为 false
        //     }
        //   }
        // }]
        series: [

          {
            type: 'pictorialBar',
            symbolSize: ['50%', '100%'],
            // symbolPosition: 'center',
            label: {
              normal: {
                show: false,
              }
            },
            data: [{
              value: 402,
              symbol: 'image://' + this.img1,
            }, {
              value: 380,
              // symbolOffset: [0, -8],
              symbol: 'image://' + this.img1,
            }, {
              value: 691,
              symbol: 'image://' + this.img1,
            }, {
              value: 509,
              symbol: 'image://' + this.img1,
            }, {
              value: 809,
              symbol: 'image://' + this.img1,
            }]
          },
          {
            data: [30, 50, 40, 34, 29],
            type: 'line',
            color: '#FFCA3D',
            symbol: "none",
            yAxisIndex: 1,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,202,61,0.8)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(255,202,61,0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }
        ]
      };
      echarts1.setOption(Option)
    },
    drawLine () {
      this.mydata = [
        // { name: '北京', value: '100' }, { name: '天津', value: this.randomData() },
        // { name: '上海', value: this.randomData() }, { name: '重庆', value: this.randomData() },
        // { name: '河北', value: this.randomData() }, { name: '河南', value: this.randomData() },
        {
          name: '四川', value: this.randomData(), itemStyle: {
            normal: { areaColor: '#347CF9' },
            emphasis: {//对应的鼠标悬浮效果
              areaColor: '#347CF9',
            }
          }
        },
        {
          name: '上海', value: this.randomData(), itemStyle: {
            normal: { areaColor: '#347CF9' },
            emphasis: {//对应的鼠标悬浮效果
              areaColor: '#347CF9',
            }
          }
        },
        {
          name: '福建', value: this.randomData(), itemStyle: {
            normal: { areaColor: '#347CF9' },
            emphasis: {//对应的鼠标悬浮效果
              areaColor: '#347CF9',
            }
          }
        },
        { name: "南海诸岛", value: 0, itemStyle: { normal: { opacity: 0 } } }
      ]
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('china-map-box')[0])
      // 绘制图表
      myChart.setOption({
        title: {
          show: false,
          text: '中国地图',
          subtext: '中国地图'
        },
        tooltip: {
          trigger: "item",
          triggerOn: 'none',
          backgroundColor: 'opacity',
          // alwaysShowContent:true,
          position: function (point, params, dom, rect, size) {
            $(dom).html(`
              <div class="echarts-tip-box">
                <div class="address">${params.data.name == '四川' ? '成都' : params.data.name}</div>
                <div class="num"><span>${params.data.value}</span>人 </div>
                <div class="circle-line"></div>
                <div class="map-circle">
              </div>
                `);
            return [point[0] - 55, point[1] - 86];//固定浮框的位置
          }
        },
        geo: {
          show: true,
          map: 'china',
          zoom: 1.2,
          label: {
            show: false
          },
          regions: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle:
              {
                normal:
                {
                  opacity: 0,
                  label: {
                    show: false

                  }
                }
              }
            }],
          roam: false,
          itemStyle: {
            normal: {
              borderWidth: 3, //设置外层边框
              borderColor: 'rgba(242,254,255,0.5)',
            },
            emphasis: {
              show: false,
              // areaColor: '#01215c'
            }
          }
        },
        series: [
          {
            name: '地图',
            type: 'map',
            mapType: 'china', // 自定义扩展图表类型
            zoom: 1.2,
            itemStyle: {
              normal: {
                areaColor: '#1d368c',
                borderColor: 'rgba(242,254,255,0.2)',
                label: { show: false }
              },
              emphasis: {//对应的鼠标悬浮效果
                areaColor: '#1d368c',
                borderColor: 'rgba(242,254,255,0.2)',
                label: { show: false }
              }
            },
            data: this.mydata
          }
        ]
      })
      var counta = 0; //播放所在下标
      var mTime = setInterval(function () {
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: counta
        });
        counta++;
        if (counta > 2) {
          counta = 0;
        }
      }, 2000);
    },
    randomData () {
      return Math.round(Math.random() * 500);
    }
  }
}
</script>
<style lang="less">
.drive-room-container {
  height: 1080px;
  width: 1920px;
  transform-origin: 0 0;
  background: #01051f;
  text-align: left;
  color: white;
}
.drive-room-container .drive-top-box {
  position: absolute;
  top: 0;
  vertical-align: top;
  width: 100%;
  height: 108px;
  background: url(./img/title-word.png) top 20px left 700px no-repeat,
    url(./img/top-title.png) top left no-repeat,
    url(./img/title-left.png) top 50px left no-repeat,
    url(./img/title-right.png) top 50px right no-repeat;
  background-size: 520px 64px, 100% 100%, 870px 50px, 870px 50px;
  z-index: 100;
  text-align: center;
}
.drive-room-container .drive-top-box .time-box,
.drive-room-container .drive-top-box .mark-box {
  float: left;
  margin-left: 20px;
  line-height: 50px;
  font-size: 14px;
}
.drive-room-container .drive-top-box .time-box span,
.drive-room-container .drive-top-box .mark-box span {
  color: #ffd322;
  font-weight: bold;
  font-size: 20px;
}
.drive-room-container .drive-top-box .time-box {
  font-weight: bold;
  font-size: 14px;
}
.drive-room-container .drive-top-box .title-super {
  font-size: 18px;
  margin-top: 84px;
}
.drive-room-container .drive-main-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1940px;
  height: 62px;
  background-image: url(./img/bottom-line.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
.drive-room-container .drive-left-box {
  position: absolute;
  top: 72px;
  left: 20px;
  padding: 15px;
  box-sizing: border-box;
  vertical-align: top;
  width: 415px;
  height: 927px;
  background: rgba(2, 66, 169, 0.1);
  border: 1px solid rgba(48, 124, 247, 0.3);
  border-radius: 2px;
}
.drive-room-container .drive-left-box .header {
  position: absolute;
  top: -20px;
  right: -36px;
}
.drive-room-container .drive-left-box .header video {
  mix-blend-mode: screen;
  height: 253px;
  width: 253px;
}
.drive-room-container .drive-left-box .staff-num-box {
  margin-top: 15px;
}
.drive-room-container
  .drive-left-box
  .staff-num-box
  .inner-staff
  > div:last-child {
  margin-left: 20px;
}
.drive-room-container .drive-left-box .staff-num-box .inner-staff > div {
  display: inline-block;
}
.drive-room-container .drive-left-box .staff-num-box .num-box {
  font-size: 18px;
  line-height: 30px;
  color: #8cbbfa;
}
.drive-room-container .drive-left-box .staff-num-box .num-box span {
  color: white;
  font-size: 21px;
  line-height: 26px;
  font-weight: bold;
}
.drive-room-container .drive-left-box .staff-num-box .img-box {
  height: 50px;
  width: 50px;
  background: url(./img/icon-bg.png);
  background-size: 100% 100%;
}
.drive-room-container .drive-left-box .staff-num-box .img-box img {
  height: 25px;
  width: 25px;
  margin: 12px;
}
.drive-room-container .drive-left-box .distribution-room-box {
  margin-top: 40px;
  height: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.drive-room-container .drive-left-box .distribution-room-box > div {
  box-sizing: border-box;
}
.drive-room-container .drive-left-box .distribution-room-box .left {
  width: 150px;
  text-align: right;
}
.drive-room-container .drive-left-box .distribution-room-box .left .room {
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
}
.drive-room-container .drive-left-box .distribution-room-box .left .room .name {
  padding-right: 10px;
  color: #8cbbfa;
}
.drive-room-container
  .drive-left-box
  .distribution-room-box
  .left
  .room
  .schedule {
  height: 18px;
  background: #0c2a5c;
  border-radius: 9px;
}
.drive-room-container
  .drive-left-box
  .distribution-room-box
  .left
  .room
  .schedule
  .white-box {
  display: inline-block;
  background: #307cf7;
  border-radius: 9px;
  height: 18px;
  line-height: 20px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 10px;
  width: 80px;
}
.drive-room-container .drive-left-box .distribution-room-box .right {
  text-align: left;
}
.drive-room-container .drive-left-box .distribution-room-box .center {
  margin-top: 20px;
  width: 71px;
  height: 254px;
  background: url(./img/center-bg.png);
  background-size: 100% 100%;
  padding: 25px;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
}
.drive-room-container .drive-left-box .echarts-tip-box {
  position: relative;
  height: 45px;
  width: 100px;
  text-align: center;
  background: url(./img/tip-box.png);
  background-size: 100% 100%;
  color: #ffd322;
  line-height: 20px;
  padding-top: 5px;
}
.drive-room-container .drive-left-box .echarts-tip-box .address {
  font-weight: bold;
}
.drive-room-container .drive-left-box .echarts-tip-box .num > span {
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.drive-room-container .drive-left-box .echarts-tip-box .map-circle {
  position: absolute;
  top: 80px;
  left: 45px;
  height: 6px;
  width: 10px;
  background: url(./img/map-circle.png);
  background-size: 100% 100%;
}
.drive-room-container .drive-left-box .echarts-tip-box .circle-line {
  height: 33px;
  width: 2px;
  background: #f9d34f;
  opacity: 0.4;
  position: absolute;
  top: 50px;
  left: 49px;
}
.drive-room-container .drive-left-box .china-map-box {
  height: 320px;
  width: 100%;
  background: url(./img/map-bg.png) no-repeat;
  background-size: 100% 91%;
  background-position: 1px 25px;
}
.drive-room-container .drive-center-box {
  position: absolute;
  top: 0;
  left: 466px;
  margin: 0 auto;
  width: 950px;
  height: 1080px;
}
.drive-room-container .drive-center-box .top-circle-box {
  height: 200px;
  margin-top: 152px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@keyframes rotateCard {
  0% {
    transform: rotateY(0deg);
  }
  40% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  90% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.drive-room-container .drive-center-box .top-circle-box .circle-outer {
  height: 100%;
  width: 170px;
  text-align: center;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle {
  height: 170px;
  width: 170px;
  position: relative;
  padding-top: 46px;
  line-height: 16px;
  font-size: 12px;
  box-sizing: border-box;
  background: url(./img/circle-outer1.png), url(./img/circle-inner1.png);
  background-size: 100% 100%, 74% 74%;
  background-position: 0 0, 50% 50%;
  background-repeat: no-repeat;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .equipment-able-num {
  color: #ffffff;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .equipment-title {
  transform: scale(0.8);
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .gold-coor {
  color: #f9d34f;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .equipment-total-num {
  color: #8cbbf9;
  margin-top: 4px;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .equipment-total-num
  span {
  line-height: 20px;
  color: white;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .system-circle {
  position: absolute;
  top: 10px;
  left: 10px;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .system-circle
  .system-inner-bg {
  stroke-dashoffset: 0;
  stroke-dasharray: 284 1000;
  transform-origin: center;
  transform: rotate(134deg);
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .cneter-circle
  .system-circle
  .system-inner {
  stroke-dashoffset: 0;
  stroke-dasharray: 284 1000;
  transform-origin: center;
  transform: rotate(134deg);
  animation: circleChange 5s infinite linear;
}
@keyframes circleChange {
  from {
    stroke-dashoffset: 284;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .circle-outer
  .circle-title {
  line-height: 40px;
  font-size: 16px;
}
.drive-room-container .drive-center-box .top-circle-box .special-circle {
  height: 200px;
  width: 170px;
  position: relative;
  transform-origin: center center;
  transform-style: preserve-3d;
  perspective: 800px;
  animation: rotateCard 10s infinite linear;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .special-circle
  .circle-outer2 {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #020541;
  transform: rotateY(360deg);
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .special-circle
  .circle-outer2
  .cneter-circle {
  background: url(./img/circle-outer2.png), url(./img/circle-inner2.png);
  background-size: 100% 100%, 74% 74%;
  background-position: 0 0, 50% 50%;
  background-repeat: no-repeat;
}
.drive-room-container
  .drive-center-box
  .top-circle-box
  .special-circle
  .back-circle {
  transform: rotateY(180deg);
}
.drive-room-container .drive-center-box .aofeng-room {
  height: 600px;
  margin-top: 60px;
  position: relative;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container {
  position: absolute;
  top: 0;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord {
  position: absolute;
  height: 240px;
  width: 350px;
  transform-origin: top center;
  transform: scale(0.8);
  background: url(./img/bord.png);
  background-size: 100% 100%;
  padding: 30px;
  box-sizing: border-box;
  transform-style: preserve-3d;
  transition: 2s linear;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .title {
  font-weight: bold;
  text-shadow: 0px 0px 16px #4aa6ee;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .num-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .num-box
  > div {
  flex: 1;
  line-height: 30px;
  text-align: center;
  vertical-align: top;
  height: 100px;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .num-box
  > div
  .bord-title {
  margin-top: 20px;
  font-size: 12px;
  margin-bottom: 15px;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .num-box
  > div
  .bord-num {
  color: #6ff4f7;
  font-size: 24px;
  font-weight: bold;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .center-bord
  .num-box
  > div:nth-child(2)::before {
  content: "";
  float: left;
  height: 110px;
  width: 2px;
  display: block;
  background: linear-gradient(
    0deg,
    rgba(74, 166, 238, 0) 0%,
    #4aa6ee 50%,
    rgba(74, 166, 238, 0) 100%
  );
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord0 {
  transform: perspective(800px) rotateY(45deg) scale(0.8);
  transform-origin: 0% 50%;
  top: 300px;
  left: 10px;
  transition: 0.66s linear;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord1 {
  transform: perspective(800px) rotateY(20deg) scale(0.8);
  transform-origin: 0% 50%;
  top: 80px;
  left: 50px;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord2 {
  top: 40px;
  left: 295px;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord3 {
  transform: perspective(800px) rotateY(-20deg) scale(0.8);
  transform-origin: 80% 50%;
  top: 80px;
  left: 570px;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord4 {
  transform: perspective(800px) rotateY(-45deg) scale(0.8);
  transform-origin: 100% 50%;
  top: 300px;
  left: 580px;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord5 {
  transform: scale(0.6);
  transform-origin: center center;
  top: 420px;
  left: 440px;
  transition: 0.66s linear;
}
.drive-room-container .drive-center-box .aofeng-room .bord-container .bord6 {
  transform: scale(0.6);
  transform-origin: center center;
  top: 420px;
  left: 160px;
  transition: 0.66s linear;
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .bord-center {
  top: 40px;
  left: 295px;
  transform-origin: top center;
  transform: scale(0.8);
}
.drive-room-container
  .drive-center-box
  .aofeng-room
  .bord-container
  .bord-speed {
  transition: 1s linear;
}
.drive-room-container .drive-center-box .aofeng-room .video-box {
  position: absolute;
  bottom: 50px;
  left: 75px;
  width: 800px;
}
.drive-room-container .drive-center-box .aofeng-room .video-box video {
  width: 800px;
  height: 300px;
  mix-blend-mode: screen;
}
.drive-room-container .drive-right-box {
  position: absolute;
  top: 72px;
  right: 20px;
  width: 453px;
  height: 927px;
  background: rgba(2, 66, 169, 0.1);
  border: 1px solid rgba(48, 124, 247, 0.3);
  border-radius: 2px;
  box-sizing: border-box;
  padding: 15px;
}
.drive-room-container .drive-right-box .title:not(:first-child) {
  margin-top: 20px;
  margin-bottom: 10px;
}
.drive-room-container .drive-right-box .system-status {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drive-room-container .drive-right-box .system-status .num-box {
  color: white;
  font-weight: bold;
  font-size: 19px;
  line-height: 50px;
}
.drive-room-container .drive-right-box .system-status > div {
  height: 90px;
  width: 170px;
  background: url(./img/system-bg.png);
  background-size: 100% 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  color: #8cbbfa;
}
.drive-room-container .drive-right-box .system-status .right {
  width: 225px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.drive-room-container .drive-right-box .circle-outer {
  margin-top: 30px;
}
.drive-room-container .drive-right-box .circle-outer .circle {
  font-size: 14px;
  text-align: center;
  width: 151px;
  height: 181px;
  display: inline-block;
}
.drive-room-container .drive-right-box .circle-outer .circle .circle-inner {
  height: 131px;
  margin: 0 auto;
}
.drive-room-container .drive-right-box .circle-outer .circle .title {
  margin-top: 10px;
  font-size: 14px;
}
.drive-room-container .drive-right-box .circle-outer .circle1 {
  margin-left: 28px;
}
.drive-room-container .drive-right-box .circle-outer .circle2 {
  margin-left: 52px;
}
.drive-room-container .drive-right-box .task-echarts-box {
  position: relative;
  height: 270px;
  width: 100%;
}
.drive-room-container .drive-right-box .task-echarts-box .inner-num {
  position: absolute;
  top: 0;
  right: 80px;
}
.drive-room-container
  .drive-right-box
  .task-echarts-box
  .inner-num
  .left::before {
  content: "";
  display: inline-block;
  width: 10px;
  margin-right: 1px;
  height: 10px;
  background: #336ec6;
}
.drive-room-container
  .drive-right-box
  .task-echarts-box
  .inner-num
  .right::before {
  content: "";
  display: inline-block;
  width: 10px;
  margin-left: 10px;
  transform: translateY(-3px);
  margin-right: 1px;
  height: 2px;
  background: #f9d34f;
}
.drive-room-container .drive-right-box .task-echarts-box .inner-echarts {
  height: 270px;
  width: 100%;
}
.drive-room-container .drive-right-box .indicator-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drive-room-container .drive-right-box .indicator-box > div {
  height: 163px;
  width: 161px;
  text-align: center;
}
.drive-room-container .drive-right-box .indicator-box > div .svg-box {
  height: 140px;
  background: url(./img/right-bottom.png);
  background-size: 100% 100%;
  position: relative;
}
.drive-room-container .drive-right-box .indicator-box > div .svg-box .num-box {
  position: absolute;
  top: 64px;
  width: 100%;
  text-align: center;
  color: #6ff4f7;
  font-weight: bold;
  font-size: 20px;
}
.drive-room-container
  .drive-right-box
  .indicator-box
  > div
  .svg-box
  .indicator-inner {
  transform: rotate(134deg);
  transform-origin: center center;
  stroke-dashoffset: 0;
  stroke-dasharray: 174 1000;
}
</style>