<template>
  <h1>Hello Vue</h1>

  <div>
    <p>Number: {{ num }}</p>
    <p>Message: {{ message }}</p>

    <button @click="counting" type="button" class="btn btn-primary">
      Count
    </button>
    <button @click="outstring" type="button" class="btn btn-danger">
      Show Message
    </button>
    <button @click="changeObject" type="button" class="btn btn-success">
      Show
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let object = { name: "san tola" };

let num = ref(10);
let message = ref("");

function counting() {
  num.value++;
}

function outstring() {
  message.value = "Hello vue";
}

function changeObject() {
  // Object.name = "Mr B";
  console.log(Object.value.name);
}
</script>

<style>
body {
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
