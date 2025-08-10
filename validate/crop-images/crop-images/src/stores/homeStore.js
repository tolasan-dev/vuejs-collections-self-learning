import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
    currentModal: null,
    modalData: null,
  }),
  actions: {
    open(modalName, data = null) {
      this.currentModal = modalName;
      this.modalData = data;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
      this.currentModal = null;
      this.modalData = null;
    },
  },
});
