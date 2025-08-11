<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../stores/homeStores";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between">
      <h1 class="mb-4">FetchAPI with Store</h1>
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="productStore.fetchProducts"
      >
        Reload Data
      </button>
    </div>

    <div v-if="productStore.loading" class="text-center my-4">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
    <p v-if="productStore.error" class="text-danger text-center">
      {{ productStore.error }}
    </p>

    <div class="row mt-4">
      <div class="col-3 mb-4" v-for="p in productStore.products" :key="p.id">
        <div class="card h-100">
          <img :src="p.thumbnail" class="card-img-top" :alt="p.title" />
          <div class="card-header">
            <h5 class="mb-0">{{ p.title }}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">{{ p.description }}</p>
          </div>
          <div class="card-footer text-muted">Price: ${{ p.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-btn {
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
