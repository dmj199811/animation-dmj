<template>
  <div class="box">
    <div class="test">
      <svg x='0px'
           y='0px'
           width='300px'
           height='300px'
           viewBox='0 0 300 100'
           class="svg1">
        <line x1='50'
              y1='50'
              x2='200'
              y2='50'
              stroke='#ededed'
              stroke-width='1'></line>
      </svg>
      <svg x="0px"
           y="0px"
           width="300px"
           height="100px"
           viewBox="0 0 300 100"
           class="svg1">
        <line x1="20"
              y1="50"
              x2="200"
              y2="50"
              stroke="#000"
              stroke-width="1"></line>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.svg1 line {
  stroke-dasharray: 300, 300;
  stroke-dashoffset: 300;
}
</style>