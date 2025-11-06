import { createRouter, createWebHistory } from 'vue-router'
import PreInsrcripcion from '@/pages/PreInsrcripcion.vue'
import FormularioTerminado from '@/pages/FormularioTerminado.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component: PreInsrcripcion},
    {path:'/Formulario-Terminado', component:FormularioTerminado}
    
  ],
})

export default router
