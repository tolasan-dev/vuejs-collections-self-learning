<template>
  <div class="modal fade" tabindex="-1" ref="modalRef" aria-hidden="true"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Modal } from "bootstrap";
import { useModalStore } from "@/stores/homeStore";

const modalStore = useModalStore();
const modalRef = ref(null);
const bsModal = ref(null);

onMounted(() => {
  bsModal.value = new Modal(modalRef.value);
});

watch(
  () => modalStore.isOpen,
  (isOpen) => {
    if (isOpen) {
      bsModal.value.show();
    } else {
      bsModal.value.hide();
    }
  }
);

function openModal() {
  modalStore.open();
}

function closeModal() {
  modalStore.close();
}
</script>
