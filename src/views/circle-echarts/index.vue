<template>
  <div>
    <div id="myChart"
         :style="{width: '300px', height: '300px'}"></div>
    <div id="myChart2"
         :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
import echartsLiquidfill from 'echarts-liquidfill'//引入

export default {
  data () {
    return {
      msg: '我是测试'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })

      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      myChart2.setOption({
        series: [{
          type: 'liquidFill',
          data: [0.6, 0.8]
        }]
      })
    }
  }
}
</script>