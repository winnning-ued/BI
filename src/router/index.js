import Vue from 'vue'
import Router from 'vue-router'
import MedicalService from 'views/medicalService/MedicalService.vue'
import Dean from 'views/dean/Dean.vue'
import DataAnalysis from 'views/dataAnalysis/DataAnalysis.vue'
import BasicSettings from 'views/basicSettings/BasicSettings.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/dean'
    },
    {
      path: '/medicalService',
      component: MedicalService
    },
    {
      path: '/dean',
      component: Dean
    },
    {
      path: '/dataAnalysis',
      component: DataAnalysis
    },
    {
      path: '/basicSettings',
      component: BasicSettings
    }
  ]
})
