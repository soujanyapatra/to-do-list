import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Addtask from '../views/Addtask.vue'
import Edittask from '../views/Edittask.vue'
import Status from '../views/Status.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Addtask',
    name: 'Addtask',
    component: Addtask
  },
  {
    path: '/Edittask/:id',
    name: 'Edittask',
    component: Edittask
  },
  {
    path: '/Status/:id',
    name: 'Status',
    component: Status
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
