# vue-lomhat

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```





```<template>
  <input 
    type="text" 
    v-model="search" 
    placeholder="Search vegetable..."
  />

  <ul>
    <li v-for="veg in filteredVegetables" :key="veg">
      {{ veg }}
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";

// array of vegetables
const vegetables = ref([
  "Carrot",
  "Broccoli",
  "Onion",
  "Potato",
  "Tomato",
  "Cabbage",
  "Spinach"
]);

// search text
const search = ref("");

// auto-filter list using computed
const filteredVegetables = computed(() => {
  return vegetables.value.filter(v =>
    v.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>




<template>
  <input 
    type="text" 
    v-model="search" 
    @input="filterList"
    placeholder="Search vegetable..."
  />

  <ul>
    <li v-for="veg in filtered" :key="veg">
      {{ veg }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

// original list
const vegetables = ref([
  "Carrot",
  "Broccoli",
  "Onion",
  "Potato",
  "Tomato",
  "Cabbage",
  "Spinach"
]);

// this will store filtered results
const filtered = ref([...vegetables.value]);

// search text
const search = ref("");

// filter function (no computed used)
function filterList() {
  filtered.value = vegetables.value.filter(v =>
    v.toLowerCase().includes(search.value.toLowerCase())
  );
}
</script>
