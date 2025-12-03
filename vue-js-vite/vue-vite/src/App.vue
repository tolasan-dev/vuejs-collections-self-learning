<template>
  <p>Number : {{ num }}</p>
  <br />
  <p>String: {{ string }}</p>
</template>

<script>
// import { ref } from "vue"; 

export default {
  setup() {
    let num = ref(10);
    let string = ref("Hello vue js with version running by vite");

    return { num, string };
  },
};
</script>

<style></style>
