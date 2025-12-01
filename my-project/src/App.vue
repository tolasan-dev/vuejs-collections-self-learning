<template>
  <div :class="theme + '-theme'" class="theme-container">
    <div class="row d-flex justify-content-center">
      <div class="col-4">
        <ThemeToggle :theme="theme" @toggleTheme="switchTheme" />

        <div class="card" :class="theme + '-theme'">
          <h1>Welcome!</h1>
          <p>This is {{ theme }} mode.</p>
        </div>

        <!-- Input (no v-model!) -->
        <input
          type="text"
          ref="txt"
          placeholder="Type anything here..."
          class="input-field"
        />

        <!-- Open Modal Button -->
        <button @click="openModal" class="btn btn-dark">Open Modal</button>
        <!-- MyModal - using props only -->

        <MyModal
          :show="isModalOpen"
          title="You Typed This:"
          :message="userTypedText"
          @close="isModalOpen = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggle from "./components/ThemeToggle.vue";
import MyModal from "./components/MyModal.vue";
// import MyModal from "./components/MyModal.vue";

export default {
  components: { ThemeToggle, MyModal },
  data() {
    return {
      theme: "light",
      isModalOpen: false,
      userTypedText: "Hello from parent!", // <-- REQUIRED
    };
  },
  methods: {
    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
    openModal() {
      // Grab the current value from the input using ref
      const inputValue = this.$refs.txt.value.trim();

      if (inputValue === "") {
        alert();
        return;
      }

      // Update the text that will be passed as a prop
      this.userTypedText = inputValue;

      // Open the modal
      this.isModalOpen = true;

      this.$refs.txt.value = "";
    },
  },
};
</script>

<style>
/* Apply theme variables to the container */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.theme-container {
  min-height: 100vh;
  padding: 20px;
}

/* Light Theme */
.light-theme {
  --primary-color: #007bff;
  --text-color: #333;
  --background-color: #ffffff;

  background-color: var(--background-color);
  color: var(--text-color);
}

/* Dark Theme */
.dark-theme {
  --primary-color: #6c757d;
  --text-color: #f8f9fa;
  --background-color: #343a40;

  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
