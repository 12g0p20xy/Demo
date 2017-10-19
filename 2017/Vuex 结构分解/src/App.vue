<template>
  <main>
    <table>
      <tr>
        <th>state</th>
        <th></th>
        <th>getter</th>
      </tr>
      <tr>
        <td>
          <button @click="countHandler('minus')">-</button>
          {{ count }}
          <button @click="countHandler('add')">+</button>
        </td>
        <td>* 100</td>
        <td>= {{ count100 }}</td>
      </tr>
    </table>
    
  </main>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.counter.count
    },
    count100() {
      return this.$store.getters.count100
    }
  },
  methods: {
    countHandler(type) {
      if (type === 'add') {

        // 直接触发 mutation
        // this.$store.commit('ADD', 10)

        // 通过 actions 触发
        this.$store.dispatch('add', 10)

      }
      if (type === 'minus') {
        this.$store.dispatch('minus', 5)
      }
    },
  }
}

</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
table {
  border-spacing: 0;

  th, td {
    padding: 10px 15px;
    border: 1px solid #ddd;
  }
}
</style>
