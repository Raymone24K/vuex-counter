import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态对象
  state: {
    count: 0,
    state: false,
    message: '3s后加1'
  },

  // 包含多个更新state函数的对象
  mutations: {
    // 增加的mutation
    addCount (state) {
      state.count++
    },
    // 减少的mutation
    cutCount (state) {
      state.count--
    }
  },

  // 包含多个对应时间回调函数的对象
  actions: {
    // 增加的action
    add ({ commit }) {
      // 提交mutation
      commit('addCount')
    },
    // 减少的action
    cut ({ commit }) {
      // 提交mutation
      commit('cutCount')
    },
    addonlyeven ({ commit, state }) {
      if (state.count % 2 === 1 || state.count % 2 === -1) {
        commit('addCount')
      }
    },
    addonlyodd ({ commit, state }) {
      if (state.count % 2 === 0) {
        commit('addCount')
      }
    },
    incrementAsync ({ commit, state }) {
      state.state = true
      state.message = '自增中'
      setTimeout(() => {
        state.state = false
        state.message = '3s后加1'
        commit('addCount')
      }, 3000)
    }
  },

  // 包含多个getter计算属性函数的对象
  getters: {
    IsOddEven (state) {
      return state.count % 2 === 0 ? '偶数' : '奇数'
    }
  },

  // 将store分割成模块
  modules: {
  }
})
