<template>
  <div>
    <h1>App</h1>
    <Block></Block>
  </div>
</template>

<script>
import Block from './block.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Block
  }
}
</script>