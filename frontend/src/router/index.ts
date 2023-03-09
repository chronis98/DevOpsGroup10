import {createRouter, createWebHistory} from 'vue-router'
import GymOverview from '../views/GymOverview.vue'
import GymDetails from '../views/GymDetails.vue'
import {propsToAttrMap} from '@vue/shared';

export const RouteName = Object.freeze({
    GYM_OVERVIEW: 'GymOverview',
    GYM_DETAILS: 'GymDetails'
});

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/gym',
            name: RouteName.GYM_OVERVIEW, // just to
            component: GymOverview, //loaded it the start
            //props: {name : true}
        },
        {
            path: '/',
            // name: 'GymOverview', // just to
            // component: GymOverview //loaded it the start
            redirect: {name: RouteName.GYM_OVERVIEW}
        },
        {
            path: '/gym-details/:name',
            name: RouteName.GYM_DETAILS,
            component: GymDetails,
        }
    ]
})

export default router
