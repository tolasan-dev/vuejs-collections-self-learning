<template>
  <button class="base-btn">
    <slot />
  </button>
</template>

<script setup></script>

<style>
.base-btn {
  padding: 8px 12px;
  border-radius: 6px;
  background: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
.base-btn:hover {
  background-color: #2e8f63;
}
</style>
