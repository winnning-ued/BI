import Vue from 'vue'
import Router from 'vue-router'
import CustomReports from 'business/customReports/CustomReports.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: CustomReports
    }
  ]
})
