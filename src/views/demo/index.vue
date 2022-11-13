<template>
  <div class="demo">
    <span class="toHome" @click="doExit">退出</span>
<!--    demo区域-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    doExit () {
      this.$router.replace('/')
    }
  },
  beforeRouteLeave(to,from,next){
    if(confirm('确定退出案例吗？')) next();
  }
}
</script>


<style scoped>
.demo {
   position: relative;
}

.toHome {
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 5rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1.2568rem;
  border-radius: 0.68rem;
  cursor: pointer;
  background-color: #7ebe49;
  z-index: 10;
}
</style>
