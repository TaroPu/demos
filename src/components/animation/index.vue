<template>
  <div class="animation">
    <div class="box"><img src="../../assets/image/tom.png" width="300"></div>
    <div class="jerry"><img src="../../assets/image/jerry.png" width="250px"></div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
body{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right bottom, #f75afc, #0c1fee);
}
@keyframes move {
  0%{
    transform: translate(0px);
  }
  50%{
    transform: translate(1000px,200px)  rotate(360deg) scale(0.5);
  }
  100%{
    transform: translate(0px)  rotate(-360deg) scale(1);
  }
}

.box{
  width: 100px;
  height: 100px;
  animation-name: move;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.jerry {
  position: absolute;
  top: 30%;;
  right: 10%;
  /*height: 200px;*/
}
</style>
