<template>
  <div :class="theme + '-theme'" class="theme-container">
    <div class="row d-flex justify-content-center">
      <div class="col-4">
        <ThemeToggle :theme="theme" @toggleTheme="switchTheme" />

        <div class="card" :class="theme + '-theme'">
          <h1>Welcome!</h1>
          <p>This is {{ theme }} mode.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeToggle from "./components/ThemeToggle.vue";

export default {
  components: { ThemeToggle },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    switchTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
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
