import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: '/tabla-principal',
          name: 'tabla-principal',
          component: () => import('@/views/TablaPrincipal.vue'),
        },
        {
          path: '/formulario',
          name: 'formulario',
          component: () => import('@/views/FormularioView.vue'),
        },
      ],
    },
  ],
})

export default router
