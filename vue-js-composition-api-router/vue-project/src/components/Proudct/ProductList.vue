<template>
  <div class="container py-4">
    <h2 class="text-success mb-4">Products</h2>

    <div class="row g-3">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card overflow-hidden shadow-sm">
          <img :src="product.image" class="card-img-top rounded-4" alt="" />

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price }}</p>

            <router-link
              class="btn btn-success rounded-3"
              :to="`/products/${product.id}`"
            >
              View Detail
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "iPhone 15",
    price: 1200,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Blue_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1759734013&width=823",
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 1100,
    image:
      "https://www.incredible.co.za/api/catalog/product/s/m/sm_s928_galaxys24ultra_front_titaniumblack_231109_ecommerce_9c87.png?width=700&height=700&store=incredibleconnection&image-type=image",
  },
  {
    id: 3,
    name: "Oppo Reno 11",
    price: 500,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/oppo-reno-11-pro-124339452-1x1.png?VersionId=zvIp42B5Ji_I4kqtuxsz5BArRDP_4jfw",
  },
]);
</script>

