<template>
  <BaseCard
    title="Mango"
    description="Fresh and juicy mango"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yN33N8qoK6jBBYWMUF8NJCdEJvGWSg56w&s"
  >
    <template #footer>
      <!-- <button class="buy-btn">Buy Now</button> -->
       <BaseButton >Buy now</BaseButton />
    </template>
  </BaseCard>
  <BaseCard
    title="Mango"
    description="Fresh and juicy mango"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yN33N8qoK6jBBYWMUF8NJCdEJvGWSg56w&s"
  >
    <template #footer>
      <!-- <button class="buy-btn">Buy Now</button> -->
       <BaseButton >Buy now</BaseButton />
    </template>
  </BaseCard>
</template>

<script setup>
import BaseButton from "./components/BaseButton.vue";
</script>
