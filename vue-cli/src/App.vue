<!-- ParentComponent.vue -->
<template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <!-- Use BaseModal because you imported BaseModal -->
    <MyModal
      :visible="showModal"
      title="My Custom Modal"
      @close="showModal = false"
      @cancel="handleCancel"
      @confirm="handleConfirm"
    >
      <p>This is the content INSIDE the modal (slot).</p>
    </MyModal>
  </div>
</template>

<script>

import MyModal from './components/MyModal.vue';


export default {
  components: {
    MyModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleCancel() {
      console.log("Modal cancelled");
      this.showModal = false;
    },
    handleConfirm() {
      console.log("Modal confirmed");
      this.showModal = false;
    },
  },
};
</script>
