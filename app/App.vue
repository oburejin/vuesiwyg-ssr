
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
  created: function () {
    // установка стейта для рендера на сервере
    // todo: устанавливать стейт до первого рендера
    if (this.$ssrContext != undefined){
      console.log(this.$ssrContext)
      store.commit('set_state', this.$ssrContext.state);
    }
  },
  data: function () {
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
