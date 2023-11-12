<template>
  <div class="container w-50">
    <form @submit.prevent="saveUpdateAnimal">
      <legend>Update New Animal</legend>
      <div class="mb-3">
        <label for="txtName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="txtName"
          placeholder="Orang Utan"
          v-model="updateAnimal.name"
        />
      </div>
      <div class="mb-3">
        <label for="txtCountry" class="form-label">Animal's Country</label>
        <input
          type="text"
          class="form-control"
          id="txtCountry"
          placeholder="Indonesia"
          v-model="updateAnimal.country"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageURL" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="txtImageURL"
          placeholder="https://orangutan.img"
          v-model="updateAnimal.imageURL"
        />
      </div>
      <button type="submit" class="btn btn-primary" v>Save</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

let updateAnimal = reactive({
  name: '',
  country: '',
  imageURL: ''
})

const route = useRoute(); //url
const router = useRouter(); //logical navigation

//GET DATA BY ID
onMounted(() => {
  axios.get(`http://localhost:3000/animals/${route.params.id}`).then((response) => {
    updateAnimal.name = response.data.name
    updateAnimal.country = response.data.country
    updateAnimal.imageURL = response.data.imageURL
  })
  // alert(route.params.id)
})

//UPDATE FORM
const saveUpdateAnimal = () => {
  axios.put(`http://localhost:3000/animals/${route.params.id}`, updateAnimal)
  .then(() => {
    router.push('/');
  })
}
</script>

<style></style>
