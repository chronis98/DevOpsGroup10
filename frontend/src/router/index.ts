import {createRouter, createWebHistory} from 'vue-router'
import GymOverview from '../views/GymOverview.vue'
import GymDetails from '../views/GymDetails.vue'
import {propsToAttrMap} from '@vue/shared';
import EquipmentDetail from '@/EquipmentDetail.vue';
import EquipmentAdd from '../views/EquipmentAdd.vue';
import Reports from '../views/Reports.vue';
import ReportsAdd from '../views/ReportsAdd.vue';

export const RouteName = Object.freeze({
  GYM_OVERVIEW: 'GymOverview',
  GYM_DETAILS: 'GymDetails',
  EQUIPMENT_DETAILS: 'EquipmentDetails',
  EQUIPMENT_ADD: 'EquipmentAdd',
  REPORTS: 'Reports',
  REPORTS_ADD: 'ReportsAdd'
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
      path: '/gym/:gymId',
      name: RouteName.GYM_DETAILS,
      component: GymDetails,
    },
    {
      path: '/gym/:gymId/equipment/:equipmentId',
      name: RouteName.EQUIPMENT_DETAILS,
      component: EquipmentDetail,
    },
    {
      path: '/gym/:gymId/equipment/add',
      name: RouteName.EQUIPMENT_ADD,
      component: EquipmentAdd,
    },
    {
      path: '/gym/:gymId/equipment/:equipmentId/reports',
      name: RouteName.REPORTS,
      component: Reports,
    },
    {
      path: '/gym/:gymId/equipment/:equipmentId/reports/add',
      name: RouteName.REPORTS_ADD,
      component: ReportsAdd,
    }

  ]
})

export default router
