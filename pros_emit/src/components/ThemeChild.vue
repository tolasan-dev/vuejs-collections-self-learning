<template>
  <button @click="handleClick">Toggle Dark Mode</button>
  <h3>Child Switch: {{ localValue }}</h3>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["toggle"]);

const localValue = ref(false);

function handleClick() {
  
  localValue.value = !localValue.value;
  emit("toggle", localValue.value);
}
</script>
