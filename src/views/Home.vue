<template>
  <div class="home">
    <div class="top-item">
      <el-button round @click="decrement">-</el-button>
      <p>{{ $store.state.count }}是{{ OddOrEven }}</p>
      <el-button type="primary" round @click="increment">+</el-button>
    </div>
    <div class="bottom-item">
      <el-button type="success" round @click="AddOnlyEven">奇数才加1</el-button>
      <el-button type="warning" round @click="AddOnlyOdd">偶数才加1</el-button>
      <el-button type="danger" round :loading=$store.state.state @click="TimeoutAdd">{{ $store.state.message }}</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {
    OddOrEven () {
      return this.$store.getters.IsOddEven
    }
  },
  methods: {
    // 增加1
    increment () {
      // 通知vuex去增加
      this.$store.dispatch('add')// 第二个参数可以传数据，触发store中对应的action调用
    },
    // 减少1
    decrement () {
      this.$store.dispatch('cut')
    },
    AddOnlyEven () {
      this.$store.dispatch('addonlyeven')
    },
    AddOnlyOdd () {
      this.$store.dispatch('addonlyodd')
    },
    // 模拟异步操作
    TimeoutAdd () {
      this.$store.dispatch('incrementAsync')
      // this.state = true
      // this.message = '自增中'
      // setTimeout(() => {
      //   this.state = false
      //   this.message = '3s后加1'
      // }, 3000)
    }
  }
}
</script>
<style>
  .home{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p{
    display: inline;
    margin: 0 30px;
    font-size: 22px;
  }
  .top-item{
    margin-bottom: 15px;
  }
</style>
