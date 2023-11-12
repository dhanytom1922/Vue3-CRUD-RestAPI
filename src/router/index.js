import { createRouter, createWebHistory } from 'vue-router'
import AllAnimals from '../views/animals/AllAnimals.vue'
import AddAnimal from '../views/animals/AddAnimal.vue'
import EditAnimal from '../views/animals/EditAnimal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllAnimals
    },
    {
      path: '/add-animals',
      name: 'Add Animals',
      component: AddAnimal
    },
    {
      path: '/edit-animals/:id',
      name: 'edit Animals',
      component: EditAnimal
    }
  ]
})

export default router
