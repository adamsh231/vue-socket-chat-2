import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profiles from '../views/Profiles.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
