<template>
  <div class="internetMoney">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (/* function */ callback, /* DOMElement */ element) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
class firefly {
  constructor() {
    this.x = Math.random() * 810;
    this.y = Math.random() * 600;
    this.s = Math.random() * 4;
    this.ang = Math.random() * 2 * Math.PI;
    this.v = this.s * this.s / 10;
  }
  move () {
    this.x += this.v * Math.cos(this.ang);
    this.y += this.v * Math.sin(this.ang);
    this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
  }
  show (c) {
    c.beginPath();
    c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
    c.fillStyle = "#608ADC";
    c.fill();
  }
}


export default {
  data () {
    return {
      f: [],
      mouse: {},
      last_mouse: {},
      w: 810,
      h: 600
    }
  },
  methods: {

  },
  mounted () {
    window.a = this.init("canvas")
    this.loop();
    setInterval(this.loop, 1000 / 60);
    this.$store.dispatch('changePageShow', { pageShow: false })
  },
  methods: {
    init (elemid) {
      let canvas = document.getElementById(elemid)
      let a = canvas.getContext("2d")
      canvas.width = 810
      canvas.height = 600
      a.fillRect(0, 0, 800, 600);
      return a;
    },
    draw () {
      if (this.f.length < 100) {
        for (let j = 0; j < 10; j++) {
          this.f.push(new firefly());
        }
      }
      //animation
      for (let i = 0; i < this.f.length; i++) {
        this.f[i].move();
        this.f[i].show(a);
        if (this.f[i].x < 0 || this.f[i].x > this.w || this.f[i].y < 0 || this.f[i].y > this.h) {
          this.f.splice(i, 1);
        }
      }
    },
    loop () {
      a.clearRect(0, 0, this.w, this.h);
      this.draw();
    }
  }
}
</script>

<style lang="less">
.internetMoney {
  text-align: left;
}
</style>>
