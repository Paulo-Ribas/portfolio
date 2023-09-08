import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'
import Apresentation from '../views/Apresentation.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Links from '../views/Links.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Apresentation.vue')
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
    path: '/projects-general',
    name: 'project-general',
    component: () => import('../views/ProjectsGeneral.vue')
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
