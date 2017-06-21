import Vue from 'vue'
import Router from 'vue-router'
import MedicalService from 'business/pages/medicalService/MedicalService.vue'
import CustomReports from 'business/pages/customReports/CustomReports.vue'
import DataAnalysis from 'business/pages/dataAnalysis/DataAnalysis.vue'
import BasicSettings from 'business/pages/basicSettings/BasicSettings.vue'


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
