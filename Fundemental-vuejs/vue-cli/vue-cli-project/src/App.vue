<!-- src/App.vue -->
<template>
  <div class="min-vh-100">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg  shadow-sm sticky-top"
    >
      <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="#">ShopFlow</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>

            <li class="nav-item ms-3">
              <button
                class="btn btn-outline-light position-relative"
                @click="cartOpen = !cartOpen"
              >
                <i class="bi bi-cart3"></i>
                <span
                  v-if="cartCount > 0"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  {{ cartCount }}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <div
      class="bg-gradient text-white py-5"
      style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    >
      <div class="container text-center py-5">
        <h1 class="display-4 fw-bold">Summer Sale 2025</h1>
        <p class="lead mb-4">
          Up to <strong>70% OFF</strong> on selected items!
        </p>
        <a href="#" class="btn btn-light btn-lg px-5">Shop Now</a>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="container my-5">
      <h2 class="text-center mb-5 display-5 fw-bold text-dark">
        Featured Products
      </h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div v-for="product in products" :key="product.id" class="col">
          <div
            class="card h-100 shadow-sm border-0 overflow-hidden hover-shadow"
          >
            <div class="position-relative overflow-hidden">
              <img
                :src="product.image"
                class="card-img-top"
                :alt="product.name"
                style="height: 280px; object-fit: cover"
              />
              <div class="position-absolute top-0 end-0 p-3">
                <button class="btn btn-light btn-sm rounded-circle shadow">
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </div>

            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-semibold">{{ product.name }}</h5>
              <div class="mt-auto">
                <p class="h4 text-primary fw-bold mb-3">
                  ${{ product.price.toFixed(2) }}
                </p>
                <button
                  @click="addToCart(product)"
                  class="btn btn-primary w-100 rounded-pill"
                >
                  <i class="bi bi-cart-plus me-2"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Offcanvas (Bootstrap 5 Sidebar) -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      :class="{ show: cartOpen }"
      :style="{ visibility: cartOpen ? 'visible' : 'hidden' }"
    >
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title fw-bold">Your Cart ({{ cartCount }})</h5>
        <button
          type="button"
          class="btn-close"
          @click="cartOpen = false"
        ></button>
      </div>

      <div class="offcanvas-body">
        <div v-if="cartCount === 0" class="text-center py-5 text-muted">
          <i class="bi bi-cart-x display-1"></i>
          <p class="mt-3">Your cart is empty</p>
        </div>

        <div v-else>
          <div
            v-for="item in cart"
            :key="item.id"
            class="d-flex align-items-center mb-4 p-3 bg-light rounded"
          >
            <img
              :src="item.image"
              class="rounded me-3"
              style="width: 70px; height: 70px; object-fit: cover"
            />
            <div class="flex-grow-1">
              <h6 class="mb-1">{{ item.name }}</h6>
              <p class="text-primary fw-bold mb-0">
                ${{ item.price.toFixed(2) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartCount > 0" class="offcanvas-footer border-top p-4">
        <button class="btn btn-primary btn-lg w-100 rounded-pill">
          Checkout → ${{ totalPrice.toFixed(2) }}
        </button>
      </div>
    </div>

    <!-- Backdrop when cart open -->
    <div
      v-if="cartOpen"
      class="offcanvas-backdrop fade"
      :class="{ show: cartOpen }"
      @click="cartOpen = false"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Fake products
const products = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553065360-1c3a0ac8b2f?w=500",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 5,
    name: "Minimal Desk Lamp",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
  },
  {
    id: 7,
    name: "Yoga Mat Pro",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
  },
  {
    id: 8,
    name: "Premium Sunglasses",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
]);

// Cart
const cart = ref([]);
const cartOpen = ref(false);

const cartCount = computed(() => cart.value.length);
const totalPrice = computed(() =>
  cart.value.reduce((sum, p) => sum + p.price, 0)
);

function addToCart(product) {
  cart.value.push({ ...product });
}
</script>

<style>
body {
  background: linear-gradient(135deg, #1c1c1c 0%, #162e2e 100%);
}
/* Optional: smooth hover effect */
.hover-shadow {
  transition: all 0.3s ease;
}
.hover-shadow:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}
nav .container  {
   /* From https://css.glass */
  background: rgba(41, 58, 58, 0.959) !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.card {
  /* From https://css.glass */
  background: rgba(41, 58, 58, 0.959) !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.btn-primary {
  background-color: #096d6d !important;
  border: none !important;
}
.card-img-top {
  border-radius: 14px !important;
}
/* Fix offcanvas backdrop z-index */
.offcanvas-backdrop.show {
  opacity: 0.5;
}
</style>
