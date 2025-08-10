<!-- src/views/Home.vue -->
<template>
  <div class="container mt-5 d-flex justify-content-between">
    <h1>Home Page</h1>
    <button class="btn btn-primary  " @click="modal.open()">Add data</button>

    <!-- Use the modal component -->
   <Modal/>
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/modal";
import Modal from "@/components/Modals/AddUserModal.vue"; 


const modal = useModalStore();
</script>
