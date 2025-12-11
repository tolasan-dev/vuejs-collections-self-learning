<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-5">
        <h2 class="text-success mb-4">Product Detail</h2>

        <div class="card p-3 shadow-sm">
          <h3>{{ product.name }}</h3>
          <span class="text-muted">Product ID: {{ id }}</span
          ><br />
          <span class="text-muted">Category ID: {{ categoryId }}</span>

          <img :src="product.image" class="img-fluid mb-3" alt="product" />

          <h4>${{ product.price }}</h4>

          <router-link class="btn btn-success mt-3 rounded-3" to="/products">
            Back to Products
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const id = Number(route.params.id);
const categoryId = Number(route.params.categoryId);

// Fake database
const localProducts = [
  {
    id: 1,
    categoryId: 1,
    name: "iPhone 15",
    price: 1200,
    image: "https://via.placeholder.com/400",
    description: "Latest Apple phone.",
  },
  {
    id: 2,
    categoryId: 2,
    name: "Samsung S24",
    price: 1100,
    image: "https://via.placeholder.com/400",
    description: "Samsung flagship model.",
  },
  {
    id: 3,
    categoryId: 3,
    name: "Oppo Reno 11",
    price: 500,
    image: "https://via.placeholder.com/400",
    description: "Affordable and powerful.",
  },
];

const product = localProducts.find(
  (p) => p.id === id && p.categoryId === categoryId
);
</script>
