// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'wued-ui/lib/theme-default/index.css'
import WuedUI from 'wued-ui'
import VCharts from 'v-charts'

import 'assets/css/index.css'

import "./filters/numericalToString.js" // 数值转文字 如 10000 -> 1万

Vue.config.productionTip = false;
Vue.use(WuedUI);
Vue.use(VCharts);
// Vue.filter('x2', value => value * 2);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
