import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';
Vue.use(TDesign);

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
