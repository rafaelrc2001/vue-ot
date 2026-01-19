import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../components/views/LoginView.vue';
import DashboardView from '../components/views/DashboardView.vue';
import CrearOTView from '../components/views/CrearOTView.vue';
import AutorizarOT from '../components/views/AutorizarOT.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/crear-ot', component: CrearOTView },
  { path: '/autorizar-ot', component: AutorizarOT },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
