import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import { RouteNamesEnum } from '@/router/router.types'
import { useUserStore } from '@/stores/user'
import { getStorageItemWithExpiry } from '@/helpers/localStorageHelpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('@/views/SingleProjectView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', { style: 'color: red;' }, '404 Not Found')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const token = getStorageItemWithExpiry()

  // Проверяем, если пользователь не авторизован и нет токена
  if (!userStore.isLoginStatus && !token) {
    if (to.name !== RouteNamesEnum.login && to.name !== RouteNamesEnum.register) {
      next({ name: RouteNamesEnum.login })
    } else {
      next()
    }
  } else if (token && !userStore.isLoginStatus) {
    // Если токен существует, но пользователь не авторизован
    await userStore.preLoginUserStatus()
    next()
  } else {
    next()
  }
})

export default router
