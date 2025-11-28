<template>
  <div class="p-3">
    <button @click="toggle" class="btn btn-success rounded-pill">
      Switch to {{ theme === "light" ? "dark" : "light" }} mode
    </button>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    toggle() {
      this.$emit("toggleTheme");
    },
  },
};
</script>
