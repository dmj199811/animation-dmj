<template>
  <div class="outer-box">
    <video class="logoVideo"
           autoplay='autoplay'
           muted
           loop="loop"
           src="./img/logoRaotate.mp4"></video>
    <p class="loading-box">
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.wordToAnimate()
    this.fullScreen()
    window.onresize = () => {
      this.fullScreen()
    }
  },
  methods: {
    wordToAnimate () {
      let timeNum = 1600
      let str = '立刻就会罚款'
      let arr = str.split('')
      let num = arr.length
      arr.forEach((item, index) => {
        let html = `<span class='load-word'>` + item + `</span>`
        $('.loading-box').append(html)
      })
      document.getElementsByClassName('load-word').forEach((item, index) => {
        setTimeout(() => {
          $('.loading-box span').eq(num - index - 1).addClass('jump-word')
        }, index * timeNum / 2)
        setTimeout(() => {
          $('.loading-box span').eq(index).removeClass('jump-word')
        }, index * timeNum / 2 + num * timeNum / 2)
      })
      setInterval(() => {
        document.getElementsByClassName('load-word').forEach((item, index) => {
          setTimeout(() => {
            $('.loading-box span').eq(num - index - 1).addClass('jump-word')
          }, index * timeNum / 2)
          setTimeout(() => {
            $('.loading-box span').eq(index).removeClass('jump-word')
          }, index * timeNum / 2 + num * timeNum / 2)
        })
      }, num * timeNum)
    },
    fullScreen () {
      $('.outer-box').css('transform', `scale(${document.documentElement.clientWidth / 3840},${document.documentElement.clientHeight / 1440})`)
    },
  }
}
</script>
<style>
.outer-box {
  height: 1000px;
  width: 3840px;
  overflow: hidden;
  background: #144a74;
  transform-origin: 0 0;
}
.logoVideo {
  height: 600px;
  width: 600px;
}
.loading-box {
  font-size: 200px;
  color: white;
  transform: translateY(-480px) translateX(-300px);
  text-shadow: 0px 0px 20px white;
}
.load-word {
  display: inline-block;
  transition: 0.4s ease-in transform;
}
.jump-word {
  transform: translateX(600px);
  color: #ededed;
}
video {
  mix-blend-mode: screen;
}
</style>