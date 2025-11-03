import { createRouter, createWebHistory } from 'vue-router'
import PreInsrcripcion from '@/pages/PreInsrcripcion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component: PreInsrcripcion}
  ],
})

export default router
