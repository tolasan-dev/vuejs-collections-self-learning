<template>
  <div>
    <h1>Vue Lifecycle Demo</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase Count</button>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

import { ref } from "vue";

// reactive state
const count = ref(0);

// lifecycle hooks
onBeforeMount(() => {
  console.log(" onBeforeMount → Actor behind the curtain");
});

onMounted(() => {
  console.log("🟢 onMounted → Actor steps on stage");
});

onBeforeUpdate(() => {
  console.log("🟠 onBeforeUpdate → Director updates script");
});

onUpdated(() => {
  console.log("🔵 onUpdated → Actor performs new line");
});

onBeforeUnmount(() => {
  console.log("🟣 onBeforeUnmount → Actor preparing to leave");
});

onUnmounted(() => {
  console.log("🔴 onUnmounted → Actor exits the stage");
});
</script>

<style>
body {
  font-family: sans-serif;
}
</style>
