<template>
  <!-- 企业应用集成平台物理部署图_5 -->
  <div class="box">
    <div class="use-box">
      <span class="img-title1"
            data-num='0'>
        页面1
      </span>/
      <span class="img-title1"
            data-num='1'>
        页面2
      </span>
      <div class="img-out-box">
        <div class="img-box box1">
          我是页面1 12341341234123402394850192342123412
        </div>
        <div class="img-box box2">
          我是页面2 alkdjfalskdjfas;dlkfjasl;dfkjasdl;kj
        </div>
        <div class="img-box box3">
          我是页面三 12341341234123402394850192342123412
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
    let num = 0
    var a
    setInterval(() => {
      num++
      $('.img-out-box').css('transform', 'translateX(' + -1500 * num + 'px)')
      if (num == 2) {
        a = setTimeout(() => {
          num = 0
          $('.img-out-box').css('transition', 'none')
          $('.img-out-box').css('transform', 'translateX(0px)')
        }, 2000)
      } else if (num == 1) {
        $('.img-out-box').css('transition', 'transform 0.5s ease')
      }
    }, 7000)
    $('.img-title1').click(function (e) {
      clearTimeout(a)
      num = +(e.target.dataset.num)
      $('.img-out-box').css('transition', 'none')
      $('.img-out-box').css('transform', 'translateX(' + -1500 * num + 'px)')
      setTimeout(() => {
        $('.img-out-box').css('transition', 'transform 0.5s ease')
      }, 10)
    })
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    fullScreen () {
      $('.box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
  }
}
</script>
<style lang="less" >
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
  height: 667px;
  background: #0e2550;
  margin: 0 auto;
  color: white;
  position: relative;
  background-size: 100% 100%;
}
.img-out-box {
  width: 4600px;
}
.img-box {
  height: 667px;
  width: 1500px;
  display: inline-block;
}
.use-box span:first-child {
  margin-left: 30px;
}
.img-title1 {
  font-size: 24px;
  line-height: 30px;
}
.box1 {
  background-image: linear-gradient(160deg, teal, #ededed);
}
.box2 {
  background-image: linear-gradient(160deg, red, #ededed);
}
.box3 {
  background-image: linear-gradient(160deg, yellow, #ededed);
}
</style>