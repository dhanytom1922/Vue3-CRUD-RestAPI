<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <!-- Navbar content -->
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Animals</a>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
