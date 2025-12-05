<!-- <template>
  <button @click="count++">Click: {{ count }}</button>
</template>

<script setup>
import { ref, watch } from "vue";

const count = ref(0);


watch(
  () => count.value,
  (newVal, oldVal) => {
    if (newVal > 5 || oldVal >5) {
      alert("hello wold");
    }
  }
);
</script> -->

<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "",
  email: "",
  age: "",
});

import {reactive } from "vue";

const endUser = reactive({
  
  name: " ",
  height: "",
  age: "",
  address: " "
});
</script>

<template>
  <input v-model="user.name" placeholder="Name" />
  <input v-model="user.email" placeholder="Email" />
  <input v-model="user.age" placeholder="Age" />
  <input v-model="user.age" placeholder="height" />
  <input v-model="user.age" placeholder="address" />

  <pre>{{ endUser }}</pre>
</template>
