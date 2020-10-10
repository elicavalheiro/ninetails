import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import PokeCadastro from '@/views/PokeCadastro';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'PokeCadastro',
    component: PokeCadastro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
