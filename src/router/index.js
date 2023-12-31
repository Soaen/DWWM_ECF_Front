import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/liste',
      name: 'listview',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/FormConfirmView.vue')
    },
  ]
})

export default router
