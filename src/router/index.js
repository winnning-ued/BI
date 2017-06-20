import Vue from 'vue'
import Router from 'vue-router'
import MedicalService from 'business/medicalService/MedicalService.vue'
import CustomReports from 'business/customReports/CustomReports.vue'
import DataAnalysis from 'business/dataAnalysis/DataAnalysis.vue'
import BasicSettings from 'business/basicSettings/BasicSettings.vue'


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
