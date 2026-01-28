import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { public: true },
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'bienvenida',
          component: () => import('@/views/BienvenidaView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/tabla-principal',
          name: 'tabla-principal',
          component: () => import('@/views/TablaPrincipal.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/formulario',
          name: 'formulario',
          component: () => import('@/views/FormularioView.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '',
      redirect: '/login',
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/login',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (!to.meta.public && to.meta.requiresAuth && !authStore.role) {
    next({ name: 'login' })
  } else if (to.name === 'login' && authStore.role) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
