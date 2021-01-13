<template>
  <div class='attachment-box'>
    通过background-attachment:fixed 控制图片粘滞在视口区域
    <div class="word-box">我是文字一</div>
    <div class="img-box">我是图片1</div>
    <div class="word-box">我是文字二</div>
    <div class="img-box">我是图片二</div>
    <div class="word-box">我是文字三</div>
    <div class="img-box">我是图片三</div>
    <div class="word-box">我是文字四</div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.attachment-box {
  width: 50%;
  margin: 0 auto;
}
.word-box {
  font-size: 30px;
  line-height: 100vh;
  text-align: center;
  height: 100vh;
  background: #ededed;
}
.img-box {
  font-size: 30px;
  line-height: 100vh;
  text-align: center;
  height: 100vh;
}
.img-box:nth-child(2) {
  background: url(./1.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.img-box:nth-child(4) {
  background: url(./2.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
.img-box:nth-child(6) {
  background: url(./3.jpg);
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>