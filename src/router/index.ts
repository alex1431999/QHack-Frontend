import { createRouter, createWebHistory } from 'vue-router'
import EvaluationView from '../views/Evaluation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'evaluation',
      component: EvaluationView,
    },
  ],
})

export default router
