<template>
  <div class="card border-success">
    <div class="card-body">
      <h3 class="card-title text-success">User Card</h3>

      <input type="text" class="form-control mb-3" v-model="name" placeholder="Enter name" />
      <p class="fw-bold">Name: {{ name }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const name = ref('')
</script>
