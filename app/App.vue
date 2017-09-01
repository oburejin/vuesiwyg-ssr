
<template>
  <div id="app">
    <Wysiwyg :blocks="blocks"></Wysiwyg>
  </div>
</template>

<script>
import Wysiwyg from './c/wysiwyg.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store.js';


export default {
  name: 'app',
  store,
  props: ['CONT'],
  created: function () {
    console.log('store:', store.state)    
    store.commit('set_state', JSON.parse(this.$ssrContext.state));
    console.log('store:::', store.state)
  },
  data: function () {
    // try {console.log('this', JSON.parse(this.$ssrContext.state))} catch (e) {console.log(e)};
    // try {console.log('this.CONT', this.CONT)} catch (e) {console.log(e)};
    
    return store.state
    
  },
  components: {
    'Wysiwyg': Wysiwyg
  }
}
</script>


<style lang="sass">
body
  margin: 0
  background-color: #eee
  font-family: PT Sans, sans-serif
.app
  max-width: 1004px
  width: 90%
  margin: 70px auto 50px
  padding: 10px
  background-color: #fff

.mod-flex
  display: flex

.hidden
  display: none
</style>
