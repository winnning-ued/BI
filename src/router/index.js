import Vue from 'vue'
import Router from 'vue-router'
import MedicalService from 'views/medicalService/MedicalService.vue'
import CustomReports from 'views/customReports/CustomReports.vue'
import DataAnalysis from 'views/dataAnalysis/DataAnalysis.vue'
import BasicSettings from 'views/basicSettings/BasicSettings.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/customReports'
    },
    {
      path: '/medicalService',
      component: MedicalService
    },
    {
      path: '/customReports',
      component: CustomReports
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
