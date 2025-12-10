<template>
  <div class="container mt-5 mx-auto">
    <h2 class="text-center mb-4">Render Dynamic Widgets</h2>

    <div class="d-flex gap-3 mb-4">
      <button class="btn btn-success w-100" @click="isUserCard= true">User</button>
      <button class="btn btn-primary w-100"  @click="isUserCard = false">Stats</button>
    </div>

    <!-- <UserCard />
    <StatsCard /> -->
    <!-- Dynamic Component with KeepAlive -->
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>

  </div>
</template>  

<script setup>
  import {computed, ref } from 'vue';
  import StatsCard from './components/StatsCard.vue'
  import UserCard from './components/UserCard.vue'

  const isUserCard = ref(true);
  const currentComponent = computed(() => (isUserCard.value ? UserCard : StatsCard));
</script>
