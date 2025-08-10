<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="fw-bold text-primary">Home</h1>
      <button class="btn btn-primary" @click="Add()">Add</button>
    </div>
  </div>
  <ModalCropview />
  <MoldalCrop />
</template>
<script setup>
import MoldalCrop from "@/components/view/MoldalCrop.vue";
import ModalCropview from "@/components/view/ModalCropview.vue";
import { useCropStore } from "@/stores/CropStore.js";
const cropStore = useCropStore();
const Add = () => {
  cropStore.AddCrop.show();
};
</script>
