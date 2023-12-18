// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/Auth/Login.vue';
import Register from '@/views/Auth/Register.vue';
import Dashboard from '@/views/Admins/Dashboard.vue';
import Chats from '@/views/Admins/chats.vue';
import Contacts from '@/views/Admins/contacts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'chat',
          name: 'chat',
          component: Chats,
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contacts,
        },
      ]
    },
  ],
});

export default router;
