import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Guia from '../views/Guia.vue'
import Contacto from '../views/Contacto.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/guia',
      name: 'guia',
      component: Guia
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router