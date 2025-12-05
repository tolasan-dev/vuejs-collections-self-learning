<template>
  <div class="card">
    <img v-if="image" :src="image" class="card-image" />

    <h3 class="card-title">{{ title }}</h3>

    <p class="card-description">
      <slot>
        {{ description }}
      </slot>
    </p>

    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  width: 260px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-4px);
}
.card-image {
  width: 100%;
  border-radius: 10px;
}
.card-title {
  margin: 10px 0 6px;
  font-size: 18px;
  font-weight: 600;
}
.card-description {
  font-size: 14px;
  color: #555;
}
.card-footer {
  margin-top: 12px;
}
</style>
