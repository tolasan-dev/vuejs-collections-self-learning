<template>
  <button @click="count++">Click: {{ count }}</button>
</template>

<script setup>
import { ref, watch } from "vue";

const count = ref(0);

// watch(count, (newVal, oldVal) => {
//   console.log("Count changed from", oldVal, "to", newVal);
// });

watch(
  () => count.value,
  (newVal, oldVal) => {
    console.log(`New value is :${newVal} old value: ${oldVal}`);
  }
);
</script>
