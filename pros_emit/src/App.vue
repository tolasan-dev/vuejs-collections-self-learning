<template>
  <h3>Dark Mode: {{ toggle }}</h3>

  <ThemeChild @toggle="ToggleSwitch" />
</template>

<script setup>
import { ref } from "vue";
import ThemeChild from "./components/ThemeChild.vue";

const toggle = ref(false);

function ToggleSwitch(value) {
  toggle.value = value;

}
</script>
