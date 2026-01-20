
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../components/views/LoginView.vue';
import AutorizarOT from '../components/views/AutorizarOT.vue';
import CrearOTView from '../components/views/CrearOTView.vue';
import auth from '../components/services/authServices.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: AutorizarOT, meta: { requiresAuth: true } },
  { path: '/crear-ot', component: CrearOTView, meta: { requiresAuth: true } },
  { path: '/autorizar-ot', component: AutorizarOT, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router;
