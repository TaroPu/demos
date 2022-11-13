import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    demos:[
      {
        name:'动画效果',
        path:"animation",
        date:'2022-9-22'
      },
      {
        name:'视频绘制',
        path:"my-video",
        date:'2022-9-30'
      },
      {
        name:'下雪效果',
        path:"my-snow",
        date:'2022-11-12'
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
