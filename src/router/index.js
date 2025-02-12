import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/InfoPublic',
      name: 'InfoPublic',
      component: () => import('../views/InfoPublic.vue')
    },
    {
      path: '/SciResearch',
      name: 'SciResearch',
      component: () => import('../views/SciResearch.vue')
    },
    {
      path: '/GroupMembers',
      name: 'GroupMembers',
      component: () => import('../views/GroupMembers.vue')
    },
    {
      path: '/GroupPhotos',
      name: 'GroupPhotos',
      component: () => import('../views/GroupPhotos.vue')
    },
    {
      path: '/English',
      name: 'English',
      component: () => import('../views/English.vue')
    }
  ]
})

export default router
