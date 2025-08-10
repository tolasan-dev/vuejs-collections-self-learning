<template>
  <div id="app" class="container py-4">
    <!-- Include the Header/navbar component here -->
    <!-- <Header /> -->

    <!-- Render current view (Home, About, etc.) -->
    <router-view />
  </div>
</template>

<script setup>
import Header from "../src/components/layouts/Header.vue";
</script>
