import { createRouter, createWebHistory } from 'vue-router'
import Profiles from '../views/Profiles.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {
    path: '/',
    redirect: Profiles
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: Chat,
    props: true
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
