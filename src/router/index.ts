import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
