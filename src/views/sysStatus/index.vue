<template>
  <div class="box">
    <div class="sys-bg">
      <div class="center-sys">
        <span class="sys-title">
          核心系统 </span>
        <div :class="'sys-base-box sys-base-status'+itemBoxStauts[0]">
          <div :class="'sys-item sys-item'+item.status"
               v-for="(item,index) in centerSysInfo.box1"
               @click="jumpTrobulePage"
               :key="index">
            <span class="icon-box1"></span>
            <span class="item-content">
              {{item.name+'('+item.address+')'+(item.status!=='1'?item.des:'')}}
            </span>
            <span style="float:right">
              {{statusList[item.status-1]}}
            </span>
          </div>
        </div>
        <span class="sys-title"
              style="margin-top:120px">
          渠道类系统 </span>
        <div :class="'sys-base-box sys-base-status'+itemBoxStauts[1]"
             style="padding-bottom:174px">
          <div :class="'sys-item sys-item'+item.status"
               v-for="(item,index) in centerSysInfo.box2"
               :key="index">
            <span class="icon-box1"></span>
            <span>
              {{item.name+'('+item.address+')'+(item.status!=='1'?item.des:'')}}
            </span>
            <span style="float:right">
              {{statusList[item.status-1]}}
            </span>
          </div>
        </div>
      </div>
      <div class="money-sys">
        <span class="sys-title">
          市场金融类系统 </span>
        <div :class="'sys-base-box sys-base-status'+itemBoxStauts[2]">
          <div :class="'sys-item sys-item'+item.status"
               v-for="(item,index) in centerSysInfo.box3"
               :key="index">
            <span class="icon-box1"></span>
            <span>
              {{item.name+'('+item.address+')'+(item.status!=='1'?item.des:'')}}
            </span>
            <span style="float:right">
              {{statusList[item.status-1]}}
            </span>
          </div>
        </div>
        <span class="sys-title">
          内部操作系统 </span>
        <div :class="'sys-base-box sys-base-status'+itemBoxStauts[3]">
          <div :class="'sys-item sys-item'+item.status"
               v-for="(item,index) in centerSysInfo.box4"
               :key="index">
            <span class="icon-box1"></span>
            <span>
              {{item.name+'('+item.address+')'+(item.status!=='1'?item.des:'')}}
            </span>
            <span style="float:right">
              {{statusList[item.status-1]}}
            </span>
          </div>
        </div>
        <span class="sys-title">
          功能认证类系统 </span>
        <div :class="'sys-base-box sys-base-status'+itemBoxStauts[4]">
          <div :class="'sys-item sys-item'+item.status"
               v-for="(item,index) in centerSysInfo.box5"
               :key="index">
            <span class="icon-box1"></span>
            <span>
              {{item.name+'('+item.address+')'+(item.status!=='1'?item.des:'')}}
            </span>
            <span style="float:right">
              {{statusList[item.status-1]}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemBoxStauts: [1, 1, 1, 1, 3],
      statusList: ['正常', '告警', '故障'],
      centerSysInfo: {
        box1:
          [{
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }],
        box2:
          [{
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '3', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }],
        box3:
          [{
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }],
        box4:
          [{
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }],
        box5:
          [{
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }, {
            status: '1', name: '本外币核心业务系统', address: '张江', des: '有毛病',
          }]
      }
    }
  },
  mounted () {

    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }

    this.$store.dispatch('changePageShow', { pageShow: false })
  },
  methods: {
    jumpTrobulePage (data) {
      console.log(1234)
    },
    fullScreen () {
      $('.sys-bg').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 2120})`)
    }

  }
}
</script>
<style lang="less" >
@color1: #42efff; //正常
@color2: #ffcc00; //告警
@color3: #f90707; //故障
.box {
  transform-origin: 0 0;
}
.sys-bg {
  transform-origin: 0 0;
  overflow: hidden;
  height: 2120px;
  width: 3840px;
  text-align: left;
  color: @color1;
  font-size: 38px;
  background: url(./img/bg.png);
  background-size: 100% 101%;
  padding-left: 400px;
}
.item-content {
  width: 1250px;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}
.icon-box {
  display: inline-block;
  width: 40px;
  height: 40px;
  transform: translateY(6px);
}
.icon-box1 {
  background: url(./img/sys-info.png);
  background-size: 100% 100%;
  .icon-box;
}

.sys-item3 {
  color: @color3;
  .icon-box1 {
    background: url(./img/sys-error.png);
    background-size: 100% 100%;
    .icon-box;
  }
}
.sys-item2 {
  color: @color2;
  .icon-box1 {
    background: url(./img/sys-warn.png);
    background-size: 100% 100%;
    .icon-box;
  }
}
.sys-bg > div {
  display: inline-block;
  width: 1500px;
  padding-top: 60px;
  margin-right: 100px;
  box-sizing: border-box;
  vertical-align: top;
}
.sys-title {
  display: inline-block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-weight: 800;
}
.sys-base-box {
  padding: 40px 60px;
  line-height: 80px;
  font-weight: bold;
}
.sys-base-status1 {
  animation: status1 2s infinite;
}
@keyframes status1 {
  0% {
    box-shadow: 0 0 15px @color1 inset;
  }
  50% {
    box-shadow: 0 0 30px @color1 inset;
  }
  100% {
    box-shadow: 0 0 15px @color1 inset;
  }
}
.sys-base-status3 {
  animation: status3 2s infinite;
}
@keyframes status3 {
  0% {
    box-shadow: 0 0 15px @color3 inset;
  }
  50% {
    box-shadow: 0 0 30px @color3 inset;
  }
  100% {
    box-shadow: 0 0 15px @color3 inset;
  }
}
</style>