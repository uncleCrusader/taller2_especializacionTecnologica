import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Popular.vue')
  },
  {
    path: '/toprated',
    name: 'Top Rated',
    component: () => import('../views/TopRated.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: () => import('../views/Movie.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
