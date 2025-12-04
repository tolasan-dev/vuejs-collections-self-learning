<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal-box">
      <!-- <button class="close-btn" @click="$emit('close')">✖</button> -->

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  position: relative;
}

.close-btn {
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
