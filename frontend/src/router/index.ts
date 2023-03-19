import {createRouter, createWebHistory} from 'vue-router'
import GymOverview from '../views/GymOverview.vue'
import GymDetails from '../views/GymDetails.vue'
import {propsToAttrMap} from '@vue/shared';
import EquipmentDetail from '@/EquipmentDetail.vue';
import AddEquipment from '../views/AddEquipment.vue';
import Reports from '../views/Reports.vue';
import AddReport from '../views/AddReport.vue';

export const RouteName = Object.freeze({
  GYM_OVERVIEW: 'GymOverview',
  GYM_DETAILS: 'GymDetails',
  EQUIPMENT_DETAILS: 'EquipmentDetails',
  ADD_EQUIPMENT: 'AddEquipment',
  REPORTS: 'Reports',
  ADDREPORT: 'AddReport'
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/gym',
      name: RouteName.GYM_OVERVIEW,
      component: GymOverview,
    },
    {
      path: '/',
      redirect: {name: RouteName.GYM_OVERVIEW}
    },
    {
      path: '/gym-details/:name',
      name: RouteName.GYM_DETAILS,
      component: GymDetails,
    },
    {
      path: '/equipment-details/:name',
      name: RouteName.EQUIPMENT_DETAILS,
      component: EquipmentDetail,
    },
    {
      path: '/add-equipment/:name',
      name: RouteName.ADD_EQUIPMENT,
      component: AddEquipment,
    },
    {
      path: '/reports/:name/:imgPath/:reportList+',
      name: RouteName.REPORTS,
      component: Reports,
    },
    {
      path: '/addReport/:name/:imgPath',
      name: RouteName.ADDREPORT,
      component: AddReport,
    }

  ]
})

export default router
