import {createRouter, createWebHistory} from 'vue-router'
import MainOverview from "@/views/MainOverview.vue";
import UserOverview from "@/views/user/UserOverview.vue";
import UserEdit from "@/views/user/UserEdit.vue";
import UserAdd from "@/views/user/UserAdd.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: MainOverview
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/users/:id',
            name: 'userEdit',
            component: UserEdit
        },
        {
            path: '/users/add',
            name: 'userAdd',
            component: UserAdd,
        },
        {
            path: '/users',
            name: 'userOverview',
            component: UserOverview,
        }
    ]
})

export default router
