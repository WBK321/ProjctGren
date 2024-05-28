import { createRouter, createWebHistory } from 'vue-router'
import Redist from './views/Redist.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/Redis',
            name: 'Redis',
            component: Redist
        },
        {
            path: '/friends',
            name: 'profile',
            component:'UserPage'
        }
    ]
})