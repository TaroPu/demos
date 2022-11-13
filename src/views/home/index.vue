<template>
  <div class="home">
    <h2 v-if="demos.length == 0" class="is-empty">
      你还未开始任何案例！
    </h2>
    <ul v-else>
      <li v-for="(item,index) of demos" :key="index" @click="toDemo(index)">
        {{ item.name }}
        <span class="demo-time">{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['demos'])
  },
  methods:{
    toDemo(index){
      let path = '/demo/' + this.demos[index].path
      this.$router.replace({path});
    }
  }
}
</script>

<style scoped>
  .home {
    font-size: 2rem;
  }
  .is-empty {
    font-size: 3rem;
    margin: 10rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto;
  }
  ul > li {
    position: relative;
    width: 40%;
    height: 10rem;
    margin: 2rem;
    line-height: 8rem;
    border: 0.248rem solid yellow;
    border-radius: 2rem;
    cursor: pointer;
    background-color: #61bebe;
  }
  .demo-time {
    display: inline-block;
    position: absolute;
    height: 1.5rem;
    line-height: 1.5rem;
    right: 0.48rem;
    bottom: 1rem;
    font-size: 0.68em;
    color: yellow;
  }
  ul > li:hover {
    animation: cssHover 0.5s;
    box-shadow: 2px 2px #61bebe;
  }


  @keyframes cssHover {
    50%{
      transform:translateY(-1rem) scale(1.064);
    }
  }
</style>
