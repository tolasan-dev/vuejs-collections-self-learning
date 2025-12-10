<template>
  <div class="card border-primary">
    <div class="card-body">
      <h3 class="card-title text-primary">Stats Card</h3>
      <p class="card-text fs-5">Visitors: <strong>1200</strong></p>

      <button class="btn btn-primary" @click="count++">
        Count: {{ count }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>
