import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
import Apresentation from '../views/Apresentation.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Links from '../views/Links.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/start',
    name: 'start',
    component: Start
  },
  {
    path: '/apresentation',
    name: 'apresentation',
    component: Apresentation
  },
  {
    path: '/skills',
    name: 'skill',
    component: Skills
  },
  {
    path: '/projects',
    name: 'project',
    component: Projects
  },
  {
    path: '/links',
    name: 'links',
    component: Links
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
