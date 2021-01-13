<template>
  <div id="internet-money-new">
    <div class="inter-container">
      <div class="resource-title-background"></div>
      <video src="./img/opeare-data-sceen-video.mp4"
             width="1920"
             height="1080"
             autoplay
             muted
             loop
             class="video"></video>
      <div class="resource-main-footer"></div>
      <div class="inner-box">
        <div class="left-box">
          <div class="switch-box-container"
               style="height:160px">
            <div class="switch-title"
                 data-name='个人网银'>
              <span class="active-title">个人网银</span>
              <span>理财产品</span>
              <span>基金</span>
            </div>
            <div class="switch-type1 switch-box switch-active">
              <div class="word-box">
                <div class="word-title">每日转账笔数</div>
                <div class="word-num">8888笔</div>
              </div>
              <div style="transform:translateY(4px)">
                <img src="./img/icon.png"
                     width="38px"
                     height="30px"
                     alt="">
              </div>
              <div class="word-box">
                <div class="word-title">每日转账金额</div>
                <div class="word-num">888128元</div>
              </div>
            </div>
            <div class="switch-type1 switch-box"></div>
            <div class="switch-type1 switch-box"></div>
          </div>
          <div class="switch-box-container"
               style="height:370px">
            <div class="switch-title"
                 data-name='短信平台'>
              <span class="active-title">短信平台</span>
              <span>账户动帐</span>
              <span>电商平台</span>
            </div>
            <div class="switch-type2 switch-box switch-active">

            </div>
            <div class="switch-type2 switch-box"></div>
            <div class="switch-type2 switch-box"></div>
          </div>
          <div class="switch-box-container">
            <div class="switch-title switch-title-special"
                 data-name='直销银行'>
              <span class="active-title">直销银行</span>
              <span>电子签名服务</span>
              <span>渠道协同平台</span>
            </div>
            <div class="switch-type3 switch-box switch-active">
              <div class="top-num">
                <div class="left">

                </div>
                <div class="right">

                </div>
              </div>
            </div>
            <div class="switch-type3 switch-box"></div>
            <div class="switch-type3 switch-box"></div>
          </div>
        </div>
        <div class="center-box">
          <div class="top-num-box">
            <div class="count-box">
              <div class="count-word-box">
                个人网银总交易笔数
              </div>
              <div class="previous-week-box">
                同比上周 <span class="week-up">10.5%</span>
              </div>
              <div class="count-num-box">
                <div class="num-box">6</div>
                ,
                <div class="num-box">3</div>
                <div class="num-box">4</div>
                <div class="num-box">3</div>
                ,
                <div class="num-box">7</div>
                <div class="num-box">8</div>
                <div class="num-box">9</div>
              </div>
            </div>
            <div class="volume-box">
              <div class="count-word-box">
                个人网每分钟交易量(笔)
              </div>
              <div class="count-num-box">
                <div class="num-box">3</div>
                ,
                <div class="num-box">7</div>
                <div class="num-box">8</div>
                <div class="num-box">9</div>
              </div>
            </div>
          </div>
          <div class="map-box">
            <div class="map-title">手机银行各地登陆数</div>
            <div class="map-num-box">
              <div class="load-num">
                <div class="title">个人网银当日登陆数</div>
                <div class="num"><span> 12341</span>个</div>
              </div>
              <div class="load-precent">
                <div class="title">个人网银当日登陆成功率</div>
                <div class="num"><span>77%</span></div>
              </div>
            </div>
          </div>
          <div class="echarts-box">
            <div class="echarts-title">个人网银当日登陆情况 <span class="minute-num">个人网银每分钟登陆数 <span class="num">344个</span></span></div>
            <div class="echarts-inner">
            </div>
          </div>
        </div>
        <div class="right-box">
          <div class="top-num">
            <div class="phone-num">
              <div class="phone-title">手机银行交易量</div>
              <div class="phone-num"><span>12341453</span>笔</div>
            </div>
            <div class="transfer-num">
              <div class="transfer-title">转账业务量</div>
              <div class="transfer-num"><span>89741453</span>笔</div>
            </div>
          </div>
          <div class="switch-box-container"
               style="height:250px">
            <div class="switch-title"
                 data-name='柜面通'>
              <span class="active-title">柜面通</span>
              <span>卡内</span>
              <span>普通跨行</span>
              <span>行内普通</span>
            </div>
            <div class="switch-type4 switch-box switch-active">
              <div class="img-box"></div>
              <div class="word-box">
                <div class="count-num">
                  当日转账笔数<br>
                  <span>123412</span> 笔
                </div>
                <div class="money-num">
                  当日转账金额<br>
                  <span>123412</span> 元
                </div>
              </div>
            </div>
            <div class="switch-type4 switch-box"></div>
            <div class="switch-type4 switch-box"></div>
          </div>
          <div class="switch-box-container"
               style="height:300px">
            <div class="switch-title"
                 data-name='实施跨行'>
              <span class="active-title">实施跨行</span>
              <span>实时行内</span>
            </div>
            <div class="switch-type5 switch-box switch-active">
              <div class="enter-num">
                转入笔数<br><span>234123</span>
              </div>
              <div class="enter-money">
                转入金额<br><span>234123</span>
              </div>
              <div class="out-num">
                转出笔数<br><span>234123</span>
              </div>
              <div class="out-money">
                转出金额<br><span>234123</span>
              </div>
            </div>
            <div class="switch-type5 switch-box"></div>
          </div>
          <div class="switch-special">
            <div class="left-icon"></div>
            <div class="center-container">
              <div class="seitch-line-box">
                <div class="switch-item">
                  <div class="item-title">外汇汇款</div>
                  <div class="inner-container">
                    <div>
                      跨境笔数<br>41234123
                    </div>
                    <div>
                      跨境笔数<br>41234123
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-icon"></div>
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
    this.$store.dispatch('changePageShow', { pageShow: false })
    // setTimeout(() => {
    //   this.$store.dispatch('changePageShow', { pageShow: true })
    // }, 4000)

  },
  methods: {
    fullScreen () {
      $('.inter-container').css('transform', `scale(${document.documentElement.clientWidth / 1920},${document.documentElement.clientHeight / 1080})`)
    },
  }
}
</script>
<style lang="less">
.inter-container {
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  div {
    box-sizing: border-box;
  }
  .inner-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    & > div {
      display: inline-block;
      box-sizing: border-box;
      vertical-align: top;
      // background: teal;
    }
    .left-box {
      width: 460px;
      height: 100%;
      padding: 12px;
      padding-top: 128px;
    }
    .center-box {
      width: 1000px;
      padding: 12px;
      height: 100%;
      padding-top: 128px;
      .top-num-box {
        display: flex;
        justify-content: space-between;
        color: #d9ecff;
        .count-box {
          position: relative;
        }
        .previous-week-box {
          position: absolute;
          top: 0px;
          right: 10px;
          font-size: 20px;
          line-height: 36px;
          color: #8cc2ff;
        }
        .week-up {
          color: #ff5f5c;
          font-size: 30px;
          font-weight: bold;
          vertical-align: top;
        }
        .count-word-box {
          font-size: 20px;
          line-height: 36px;
          font-weight: bold;
        }
        .count-num-box {
          display: flex;
          align-content: center;
          font-size: 64px;
          line-height: 83px;
          & > div {
            width: 64px;
            height: 83px;
            margin: 0 6px;
            text-align: center;
            // background: url(./img/);
          }
          & > .num-box {
            background: url(./img/fundBg.png);
            background-size: 100%;
          }
        }
      }
      .map-box {
        margin-top: 20px;
        height: 544px;
        position: relative;
        .map-title {
          color: #d9ecff;
          font-size: 20px;
        }
        .map-num-box {
          position: absolute;
          bottom: 40px;
          left: 0;
          font-size: 20px;
          color: #c2d6ff;
          .load-num .num span,
          .load-precent .num span {
            color: #effeff;
            font-size: 32px;
            font-weight: bold;
          }
        }
      }
      .echarts-box {
        height: 240px;
        transform: translateY(-20px);
        .echarts-title {
          color: #c2d6ff;
          font-size: 20px;
          .minute-num {
            font-size: 16px;
            margin-left: 20px;
            .num {
              font-size: 18px;
              color: white;
              font-weight: bold;
            }
          }
          .minute-num::before {
            content: "";
            width: 14px;
            height: 14px;
            display: inline-block;
            transform: translateY(2px);
            background: linear-gradient(
              #ffcc5f 0,
              rgba(255, 204, 95, 0.5) 25%,
              rgba(255, 204, 95, 0.2) 100%
            );
            margin-right: 2px;
          }
        }
        .echarts-inner {
          height: 200px;
          background: teal;
        }
      }
    }
    .right-box {
      padding: 12px;
      width: 460px;
      height: 100%;
      padding-top: 128px;
      .top-num {
        display: flex;
        align-content: space-between;
        & > div {
          height: 145px;
          width: 220px;
          color: #d9ecff;
          font-size: 16px;
          color: #d9ecff;
          background: url(./img/switch-type2.png),
            url(./img/curve.png) no-repeat;
          background-size: 100% 100%, 70% 35%;
          background-position: 0 0, 70% 84%;
          padding: 30px 0 0 30px;
          line-height: 30px;
          span {
            color: white;
            font-weight: bold;
            font-size: 32px;
          }
        }
      }
    }
  }
  .switch-box-container {
    position: relative;
    .switch-title {
      padding-left: 10px;
      span {
        font-size: 20px;
        line-height: 50px;
        color: #d9ecff;
        margin-right: 40px;
        opacity: 0.7;
      }
      .active-title {
        font-weight: bold;
        opacity: 1;
        text-shadow: #00b6ff 0 0 8px;
      }
    }
    .switch-title-special {
      span {
        margin-right: 20px;
      }
    }
    .switch-box {
      position: absolute;
      top: 46px;
      width: 100%;
    }
    .switch-type1 {
      height: 108px;
      background: url(./img/switch-type1.png);
      background-size: 100% 100%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      .word-box {
        width: 150px;
        .word-title {
          color: #80bbff;
          font-size: 18px;
        }
        .word-num {
          color: #effeff;
          font-size: 22px;
          font-weight: bold;
        }
      }
      .word-box:last-child {
        text-align: right;
      }
    }
    .switch-type2 {
      background: url(./img/switch-type2.png);
      background-size: 100% 100%;
      height: 306px;
      width: 420px;
    }
    .switch-type3 {
      .top-num {
        height: 100px;
      }
    }
    .switch-type4 {
      background: url(./img/switch-type4.png);
      background-size: 100% 100%;
      height: 200px;
      width: 420px;
      overflow: hidden;
      .img-box {
        top: 53px;
        left: 57px;
        position: absolute;
        height: 142px;
        width: 96px;
        display: inline-block;
        background: url(./img/icon-gm.png);
        background-size: 100% 100%;
      }
      .word-box {
        color: #d9ecff;
        margin-top: 40px;
        margin-left: 196px;
        font-size: 16px;
        span {
          color: white;
          font-size: 32px;
          font-weight: bold;
        }
      }
    }
    .switch-type5 {
      background-image: url(./img/switch-type5.png);
      background-size: 100% 100%;
      height: 240px;
      color: #d9ecff;
      font-size: 16px;
      line-height: 32px;
      & > div {
        width: 150px;
        text-align: center;
        span {
          font-size: 32px;
          font-weight: bold;
          color: white;
        }
      }
      & > div:nth-child(1) {
        position: absolute;
        top: 20px;
        left: 20px;
      }
      & > div:nth-child(2) {
        position: absolute;
        top: 20px;
        left: 270px;
      }
      & > div:nth-child(3) {
        position: absolute;
        top: 140px;
        left: 20px;
      }
      & > div:nth-child(4) {
        position: absolute;
        top: 140px;
        left: 270px;
      }
    }
    .switch-active {
      opacity: 1;
    }
  }
  .switch-special {
    height: 196px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left-icon {
      height: 28px;
      width: 28px;
      background-image: url(./img/icon-left.png);
      background-size: 100% 100%;
    }
    .right-icon {
      height: 28px;
      width: 28px;
      background-image: url(./img/icon-right.png);
      background-size: 100% 100%;
    }
    .center-container {
      height: 196px;
      width: 366px;
      overflow: hidden;
      .seitch-line-box {
        height: 100%;
        width: 1000px;
        & > div {
          width: 366px;
          height: 100%;
          display: inline-block;
          background-image: url(./img/switch-special.png),
            url(./img/switch-header.png);
          background-repeat: no-repeat;
          background-size: 100% 100%, 40% 20%;
          background-position: 0 0, 50% 0%;
          .item-title {
            text-align: center;
            font-size: 18px;
            color: #d9ecff;
            font-weight: bold;
            line-height: 40px;
          }
          .inner-container {
            display: flex;
            justify-items: center;
            align-content: space-around;
            & > div {
              width: 160px;
              height: 100px;
            }
          }
        }
      }
      // & > div {
      //   width: 100%;
      //   height: 100%;
      // }
    }
  }
  .resource-title-background {
    width: 1920px;
    height: 122px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url(./img/title_header.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .resource-main-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 1920px;
    height: 56px;
    background-image: url(./img/bottom-line.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: 1;
  }
}
</style>
