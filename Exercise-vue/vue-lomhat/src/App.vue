<template>
  <div class="container">
    <h2 class="title">Vegetable Finder 🥦</h2>

    <input
      type="text"
      v-model="search"
      @input="filterList"
      placeholder="Search vegetables..."
      class="search-box"
    />

    <div class="list-box" v-if="filtered.length">
      <div class="item" v-for="veg in filtered" :key="veg">
        {{ veg }}
      </div>
    </div>

    <p v-else class="no-data">No results found</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const vegetables = ref([
  "Carrot",
  "Broccoli",
  "Onion",
  "Potato",
  "Tomato",
  "Cabbage",
  "Spinach",
]);

const filtered = ref([...vegetables.value]);
const search = ref("");

function filterList() {
  filtered.value = vegetables.value.filter((v) =>
    v.toLowerCase().includes(search.value.toLowerCase())
  );
}
</script>

<style>
.container {
  max-width: 420px;
  margin: 50px auto;
  padding: 20px;
  font-family: sans-serif;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(24, 26, 25, 0.432);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  color: #333;
}

.search-box {
  width: 100%;
  padding: 12px 0;
  border-radius: 12px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  transition: 0.25s;
}

.search-box:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
}

.list-box {
  margin-top: 18px;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.item {
  padding: 12px 16px;
  margin: 6px 0;
  border-radius: 10px;
  background: #dfdbdb;
  transition: 0.2s;
  cursor: pointer;
}

.item:hover {
  background: #4caf50;
  color: white;
}

.no-data {
  margin-top: 20px;
  text-align: center;
  color: #999;
}
</style>
