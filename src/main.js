import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 所有使用vuex管理的组件都多了一个属性$store，它就是一个store对象
  render: h => h(App)
}).$mount('#app')
