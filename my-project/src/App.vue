<template>
  <div class="app-container">
    <h1>Hello Vue Modal with Props</h1>
    <p>
      Type something below and click the button → it will appear in the modal
      using a prop!
    </p>

    <!-- Input (no v-model!) -->
    <input
      type="text"
      ref="txt"
      placeholder="Type anything here..."
      class="input-field"
    />

    <!-- Open Modal Button -->
    <button @click="openModal" class="open-btn">Open Modal</button>

    <!-- MyModal - using props only -->
    <MyModal
      :show="isModalOpen"
      title="You Typed This:"
      :message="userTypedText"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script>
import MyModal from "./components/MyModal.vue";

export default {
  name: "App",

  components: {
    MyModal,
  },

  data() {
    return {
      isModalOpen: false,
      userTypedText: "", // This will be sent as a prop
    };
  },

  methods: {
    openModal() {
      // Grab the current value from the input using ref
      const inputValue = this.$refs.txt.value.trim();

      // Update the text that will be passed as a prop
      this.userTypedText = inputValue || "You didn't type anything 😅";

      // Open the modal
      this.isModalOpen = true;
    },
  },
};
</script>

<style scoped>
.app-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  font-family: system-ui, sans-serif;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.input-field {
  padding: 12px 16px;
  font-size: 1.1rem;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
}

.open-btn {
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.open-btn:hover {
  background-color: #369e6e;
}
</style>
