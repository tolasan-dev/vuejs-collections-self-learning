<template>
  <!-- Backdrop -->
  <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
    <!-- Modal Box -->
    <div class="modal-box" @click.stop>
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button
          class="close-btn"
          @click="$emit('close')"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>

      <div class="modal-body">
        <!-- Option 1: Use prop if passed -->
        <div v-if="$slots.default">
          <slot />
        </div>

        <!-- Option 2: Fallback to message prop if no slot content -->
        <div v-else-if="message" class="message-content">
          {{ message }}
        </div>

        <!-- Option 3: Empty state -->
        <div v-else class="empty-state">No content provided</div>
      </div>

      <!-- Optional: dedicated close button at bottom -->
      <div class="modal-footer">
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",

  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  
    message: {
      type: String,
      default: "",
    },
  },

  emits: ["close"], // Vue 3 best practice
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-box {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.close-btn:hover {
  background: #f0f0f0;
}

.modal-body {
  padding: 20px;
  min-height: 80px;
  font-size: 1.1rem;
}

.message-content {
  white-space: pre-wrap; /* preserves line breaks */
}

.empty-state {
  color: #999;
  font-style: italic;
}

.modal-footer {
  padding: 16px 20px;
  text-align: right;
  border-top: 1px solid #eee;
  background: #f9f9f9;
}

.modal-footer button {
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
