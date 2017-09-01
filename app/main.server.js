import Vue from 'vue';
import App from './App.vue';

// Receives the context of the render call, returning a Promise resolution to the root Vue instance.

export default context => {
  let data = context['state'];

  return Promise.resolve(
    new Vue({
      propsData: {CONT: data},
      render: h => h(App)
    })
  );
}