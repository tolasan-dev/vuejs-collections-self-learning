import { defineStore } from 'pinia'
export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    modalName: null,   
    payload: null        
  }),

  actions: {
    open(name = null, data = null) {
      this.isOpen = true
      this.modalName = name
      this.payload = data
    },

    close() {
      this.isOpen = false
      this.modalName = null
      this.payload = null
    }
  }
})
