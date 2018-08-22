// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    collection:[

    ]
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    collection1:(state) => {

      state.collection.push('收藏1')
      state.collection=Array.from(new Set(state.collection))
    },
    collection2:(state) => {
      state.collection.push('收藏2')
      state.collection=Array.from(new Set(state.collection))
    }
  }
})

export default store
