\<template>
  <input v-model.trim="email" placeholder="Email" />

  <!-- Show error when email is empty -->
  <p v-if="!email">Email is required!</p>

  <button type="button" @click="clearInput">Clear</button>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

function clearInput() {
  email.value = "";
}
</script>
