import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../components/views/LoginView.vue';
import auth from '../components/services/authServices.vue';
import PrincipalView from '../components/views/PrincipalView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/principal', component: PrincipalView, meta: { requiresAuth: true } },
  { path: '/dashboard', component: PrincipalView, meta: { requiresAuth: true } }, // <--- Agrega esta línea
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