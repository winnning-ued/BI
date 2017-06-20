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
      path: '/medicalService',
      redirect: MedicalService
    },
    {
      path: '/',
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
