<template>
  <div class="container py-3">
    <h1 class="mb-4">Handle</h1>
    <button class="btn btn-primary" @click="openModal">Add User</button>
    <UserModal />
  </div>
</template>

<script setup>
import { useModalStore } from "@/stores/homeStore";
import UserModal from "./components/ModalExample.vue";

const modal = useModalStore();

function openModal() {
  modal.open();
}
</script>
