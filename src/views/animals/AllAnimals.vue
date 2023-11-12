<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import ConfirmDelete from '../../components/ConfirmDelete.vue'

const allAnimals = ref([])

const itemIDtoDelete = ref([0])

let myModal

onMounted(() => {
  myModal = new bootstrap.Modal(document.getElementById('deletePopup'))
  axios.get('http://localhost:3000/animals').then((response) => {
    allAnimals.value = response.data
  })
})

// handler confirm delete
const deletePopUp = (id) => {
  itemIDtoDelete.value = id
  myModal.show()
}

const confirmDelete = () => {
  axios.delete(`http://localhost:3000/animals/${itemIDtoDelete.value}`).then(() => {
    allAnimals.value = allAnimals.value.filter(_ => _.id !== itemIDtoDelete.value);
    myModal.hide();
  })
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-4 offset-md-4">
        <RouterLink :to="'/add-animals'" class="btn btn-primary m-2">Add</RouterLink>
      </div>
    </div>
    <!-- CARD -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="item in allAnimals" :key="item.id">
        <div class="card">
          <img :src="item.imageURL" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Animal from {{ item.country }}</p>
            <RouterLink :to="`/edit-animals/${item.id}`" class="btn btn-primary">Edit</RouterLink>
            <button type="button" class="btn btn-danger ms-2" @click="deletePopUp(item.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDelete @confirm-delete-click="confirmDelete"></ConfirmDelete>
</template>

<style></style>
