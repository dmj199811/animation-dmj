<template>
  <div>
    <div class="disasters-main-box">
      <div class="img-list-out"
           style="margin:200px">
        <div class="slide-show-auto">
          <div class="inner-img-box"
               v-for="(item ,index) in imgList"
               :key="index">
            <img :src="item.img"
                 alt=""
                 style='width:200px;height:200px'>
          </div>
        </div>
      </div>
      <div class="operation-box">
        <div class="img-list-out"
             style="margin:100px">
          <div class="slide-show-operation"
               ref="operationBox">
            <div class="inner-img-box"
                 v-for="(item ,index) in imgList"
                 :key="index">
              <img :src="item.img"
                   alt=""
                   style='width:200px;height:200px'>
            </div>
          </div>
        </div>
        <div class="clone-node-out"
             style="margin-left:100px">
          <img src="./1.jpg"
               alt=""
               ref="cloneNode"
               @click="putIn"
               class="clone-node">
        </div>
      </div>
    </div>
    <el-button @click="nextChange">下一个</el-button>
    <el-button @click="prevChange">上一个</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [{ img: require('./1.jpg') }, { img: require('./2.jpg') }, { img: require('./3.jpg') }, { img: require('./4.jpg') }, { img: require('./1.jpg') }, { img: require('./2.jpg') }, { img: require('./3.jpg') }, { img: require('./4.jpg') }]
    }
  },
  mounted () {
    this.$store.dispatch('changePageShow', { pageShow: false })
  },
  methods: {
    nextChange () {
      this.$refs['operationBox'].style.marginLeft = '-400px'
    },
    prevChange () {
      this.$refs['operationBox'].style.marginLeft = '-600px'
    },
    putIn () {
      let node = document.getElementsByClassName('clone-node')[0].cloneNode(true)
      document.getElementsByClassName('clone-node-out')[0].appendChild(node)
      setTimeout(() => {
        document.getElementsByClassName('clone-node-out')[0].removeChild(document.getElementsByClassName('clone-node')[0])
      }, 2000)
      document.getElementsByClassName('clone-node')[0].classList.add('move-node')
      document.getElementsByClassName('clone-node')[1].addEventListener('click', this.putIn)
    }
  }
}
</script>
<style lang="less">
.disasters-main-box {
  text-align: left;
}
.img-list-out {
  width: 200px;
  overflow-x: scroll;
  background: #ededed;
}
.img-list-out::-webkit-scrollbar {
  display: none;
}
.slide-show-auto {
  width: 1600px;
  height: 200px;
  animation: imgCirculation 70s infinite;
}
.operation-box {
  position: relative;
}
.slide-show-operation {
  width: 1600px;
  height: 200px;
  transition: 1s;
}
.clone-node {
  width: 50px;
  height: 50px;
  transition: 2s linear;
  position: absolute;
  top: 300px;
}
.move-node {
  position: absolute;
  top: 0;
  left: 100px;
  height: 200px;
  transition: 2s;
  width: 200px;
}
.inner-img-box {
  width: 200px;
  height: 200px;
  display: inline-block;
  background: teal;
}
@keyframes imgCirculation {
  0% {
    margin-left: 0;
  }
  12% {
    margin-left: 0;
  }
  14% {
    margin-left: -200px;
  }
  26% {
    margin-left: -200px;
  }
  28% {
    margin-left: -400px;
  }
  40% {
    margin-left: -400px;
  }
  42% {
    margin-left: -600px;
  }
  54% {
    margin-left: -600px;
  }
  56% {
    margin-left: -800px;
  }
  68% {
    margin-left: -800px;
  }
  70% {
    margin-left: -1000px;
  }
  82% {
    margin-left: -1000px;
  }
  84% {
    margin-left: -1200px;
  }
  98% {
    margin-left: -1200px;
  }
  100% {
    margin-left: -1400px;
  }
}
</style>