<template>
  <div class="container w-50">
    <form @submit.prevent="addNewAnimal">
      <legend>Add New Animal</legend>
      <div class="mb-3">
        <label for="txtName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="txtName"
          placeholder="Orang Utan" v-model="newAnimal.name"
        />
      </div>
      <div class="mb-3">
        <label for="txtCountry" class="form-label">Animal's Country</label>
        <input
          type="text"
          class="form-control"
          id="txtCountry"
          placeholder="Indonesia" v-model="newAnimal.country"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageURL" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="txtImageURL"
          placeholder="https://orangutan.img" v-model="newAnimal.imageURL"
        />
      </div>
      <button type="submit" class="btn btn-primary" v>Add</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

let newAnimal = reactive({
  name: '',
  country: '',
  imageURL: '',
});

// karena sudah menggunakan reactive
// let name = ref ('');
// let country = ref ('');
// let imageURL = ref ('');



const router = useRouter();
const addNewAnimal = () => {
  // console.log(newAnimal)
  // console.log(name.value);
  // alert('hi');

  // POST KE API ---->
  axios.post('http://localhost:3000/animals', newAnimal)
  .then(() => {
    router.push('/')
  })
}

</script>

<style></style>
