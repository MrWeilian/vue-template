import Vue from 'vue'
import App from './client/project1/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
