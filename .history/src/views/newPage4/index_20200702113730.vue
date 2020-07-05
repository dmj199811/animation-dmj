<template>
  <div class="box">
    <div class="use-box">
      
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
    let a = {
      'ATM系统': 'N',
      '网上银行域': 'E',
      'IC借记卡系统': 'N',
      'CFP系统': 'W',
      '电话银行域': 'E',
      '金卡系统': 'N',
      '零售信贷系统': 'W',
      '联机交易转发平台': 'N',
      '核心联机交易平台': 'E',
      'OFEP': 'W',
      '会计辅助管理系统': 'W',
      '业务策略管控平台': 'E',
      '历史检索系统': 'N',
      '企业数据集成平台': 'N',
      '银联数据综合前置系统': 'E',
      '理财卡外包制卡系统': 'W',
      '数据仓库系统': 'E',
      '统一报表系统': 'W',
      '企业CRM系统': 'N'
    }

    this.dataToArray(a)
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
    dataToArray (data) {
      
    }
  }
}
</script>
<style lang="less">
.box {
  text-align: left;
  transform-origin: 0 0;
  width: 3840px;
  height: 1440px;
}
.use-box {
  font-size: 18px;
  width: 1500px;
  box-sizing: border-box;
  height: 720px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
}
.use-box div {
  box-sizing: border-box;
}
.system-outer-box-left {
  vertical-align: top;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 257px;
  width: 382px;
  height: 100%;
  padding-top: 85px;
}
.system-inline-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 50px;
  height: 50px;
  margin-bottom: 13px;
}
.system-inline-box-left {
  width: 238px;
  background-image: url(./img/sys-right.png);
  background-size: 100% 100%;
}
.system-inline-box-right {
  width: 144px;
  height: 8px;
  background-size: 100%;
  background-image: url(./img/sys-line-right.png);
}
.main-outer-box {
  display: inline-block;
  width: 280px;
  height: 100%;
  padding-top: 30px;
  margin-left: -15px;
  margin-right: -13px;
}
.system-outer-box-right {
  padding-top: 85px;
  vertical-align: top;
  display: inline-block;
  text-align: left;
  width: 435px;
  height: 100%;
}
.system-inline-box2 {
  width: 395px;
  text-align: center;
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-outer-box-right-top {
}
.system-inline-box2-left {
  width: 100px;
  height: 12px;
  background-size: 60% 100%;
  background: url(./img/sys-line2-left.png);
}
.system-inline-box2-right {
  width: 294px;
  height: 55px;
  line-height: 55px;
  background: url(./img/system-inline-box2-right-right.png);
  background-size: 100%;
}
.system-outer-box-right-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-outer-box-right-bottom-left {
  width: 107px;
  height: 12px;
  background: url(./img/system-outer-box-right-bottom-left.png);
  background-size: 100% 100%;
}
.system-outer-box-right-bottom-right {
  width: 97px;
  height: 359px;
  background: url(./img/system-outer-box-right-bottom-right.png);
  background-size: 100% 100%;
  margin-left: -2px;
  text-align: center;
  line-height: 97px;
  writing-mode: vertical-rl;
}
.system-outer-box-right-bottom-three-box:nth-child(4)
  .system-outer-box-right-bottom-three-box-left {
  width: 92px;
  margin-left: -20px;
}
.system-outer-box-right-bottom-three {
  width: 271px;
  margin-left: -12px;
  padding-top: 30px;
}
.system-outer-box-right-bottom-three-box {
  display: flex;
  justify-content: content;
  align-items: center;
  margin-bottom: 20px;
}
.system-outer-box-right-bottom-three-box-left {
  height: 24px;
  width: 72px;
  background: url(./img/system-outer-box-right-bottom-three-box-left.png);
  background-size: 100% 100%;
}
.system-outer-box-right-bottom-three-box-right {
  width: 199px;
  text-align: center;
  height: 63px;
  margin-left: -10px;
  line-height: 63px;
  background: url(./img/system-outer-box-right-bottom-three-box-right.png);
  background-size: 100% 100%;
}
.main-outer-box-top {
  height: 32px;
  width: 172px;
  margin: 0px auto;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 0;
  background: url(./img/main-outer-box-top.png);
  background-size: 100% 100%;
}
.main-out-box-line {
  height: 17px;
  width: 10px;
  background: url(./img/main-out-box-line.png);
  background-size: 100% 100%;
  margin: 0 auto;
  margin-bottom: -2px;
}
.main-out-box-center {
  height: 529px;
  background: url(./img/main-back.png);
  background-size: 100% 100%;
  padding-top: 85px;
}
.center-title1 {
  font-size: 20px;
  text-align: center;
}
.center-title2 {
  font-size: 16px;
  text-align: center;
  margin-top: 14px;
}
.center-system-box-outer {
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.center-system-box-outer2 {
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.center-system-box-inner2 {
  width: 46px;
  height: 154px;
  padding: 14px;
  padding-top: 26px;
  line-height: 14px;
  font-size: 14px;
  background: url(./img/main-center-bottom-right.png);
  background-size: 100% 100%;
}
.center-system-box-inner2:nth-child(3) {
  padding-top: 40px;
}
.center-system-box-inner {
  width: 64px;
  height: 100px;
  padding-left: 18px;
  line-height: 16px;
  padding-top: 14px;
  padding-right: 10px;
  font-size: 14px;
  background: url(./img/main-center-top-right.png);
  background-size: 100% 100%;
}
.center-system-box-inner:nth-child(3) {
  padding-top: 40px;
}
.sys-warning {
  background: url(./img/sys-warning.png);
  background-size: 100% 100%;
}
.sys-warning + div {
  background: url(./img/sys-line-warning.png);
  background-size: 100% 100%;
}
.sys-warning2 {
  background: url(./img/main-center-top-warning.png);
  background-size: 100% 100%;
}
.sys-warning3 {
  background: url(./img/main-center-bottom-warning.png);
  background-size: 100% 100%;
}
.sys-warning4 {
  background: url(./img/system-inline-box2-right-warning.png);
  background-size: 100% 100%;
}
.sys-line2-warning {
  background: url(./img/sys-line2-warning.png);
  background-size: 100% 100%;
}
.sys-warning5 {
  background: url(./img/system-outer-box-right-bottom-warning.png);
  background-size: 100% 100%;
}
.sys-warning6 {
  background: url(./img/system-outer-box-right-bottom-three-box-warning.png);
  background-size: 100% 100%;
}
.sys-error {
  background: url(./img/sys-dang.png);
  background-size: 100% 100%;
}
.sys-error + div {
  background: url(./img/sys-line-danger.png);
  background-size: 100% 100%;
}
.sys-error2 {
  background: url(./img/main-center-top-danger.png);
  background-size: 100% 100%;
}
.sys-error3 {
  background: url(./img/main-center-bottom-danger.png);
  background-size: 100% 100%;
}
.sys-error4 {
  background: url(./img/system-inline-box2-right-danger.png);
  background-size: 100% 100%;
}
.sys-line2-danger {
  background: url(./img/sys-line2-danger.png) !important;
  background-size: 100% 100% !important;
}
.sys-error5 {
  background: url(./img/system-outer-box-right-bottom-danger.png);
  background-size: 100% 100%;
}
.sys-error6 {
  background: url(./img/system-outer-box-right-bottom-three-box-danger.png);
  background-size: 100% 100%;
}

.sys-line3-warning {
  background: url(./img/sys-line-warning.png);
  background-size: 100%;
}
.sys-line4-warning {
  background: url(./img/line-warning4.png);
  background-size: 100% 100%;
}
.sys-line-error {
  background: url(./img/sys-dang.png);
  background-size: 100% 100%;
}
.sys-line2-error {
  background: url(./img/main-center-top-danger.png);
  background-size: 100% 100%;
}
.sys-line3-error {
  background: url(./img/sys-line-danger.png);
  background-size: 100%;
}
.sys-line4-error {
  background: url(./img/line-danger4.png);
  background-size: 100% 100%;
}
</style>