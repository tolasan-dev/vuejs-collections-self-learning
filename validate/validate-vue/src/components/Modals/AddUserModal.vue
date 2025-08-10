<template>
  <div
    class="modal fade"
    tabindex="-1"
    ref="modalRef"
    aria-labelledby="modalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form @submit.prevent="handleSubmit" class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">Add User</h5>
          <button
            type="button"
            class="btn-close"
            @click="modal.close()"
          ></button>
        </div>

        <!-- Profile Avatar with Camera Icon -->
        <div class="card mb-3 mx-3 p-3 text-center">
          <div class="position-relative d-inline-block">
            <img
              :src="avatarPreview || defaultAvatar"
              alt="User Avatar"
              class="rounded-circle"
              style="
                width: 100px;
                height: 100px;
                object-fit: cover;
                cursor: pointer;
              "
              @click="triggerFileInput"
            />
            <label
              for="avatarInput"
              class="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-2"
              style="cursor: pointer"
              title="Upload avatar"
            >
              <i class="bi bi-camera-fill"></i>
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              class="d-none"
              @change="onFileChange"
            />
          </div>
          <h5 class="mt-2">{{ form.name || "Name Preview" }}</h5>
        </div>

        <div class="modal-body">
          <div class="mb-3">
            <label>Name</label>
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': $v.form.name.$error }"
            />
            <div class="invalid-feedback" v-if="$v.form.name.$error">
              Name is required.
            </div>
          </div>

          <div class="mb-3">
            <label>Email</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': $v.form.email.$error }"
            />
            <div class="invalid-feedback" v-if="$v.form.email.$error">
              Valid email required.
            </div>
          </div>

          <div class="mb-3">
            <label>Password</label>
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': $v.form.password.$error }"
            />
            <div class="invalid-feedback" v-if="$v.form.password.$error">
              Password must be at least 6 characters.
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="modal.close()"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>

    <!-- Cropper Modal Overlay -->
    <div v-if="showCropper" class="cropper-modal">
      <div class="cropper-container">
        <cropper
          ref="cropper"
          :src="rawImage"
          :stencil-props="{ aspectRatio: 1 }"
          stencil-component="circle-stencil"
        />
        <div class="d-flex justify-content-end mt-3 gap-2">
          <button class="btn btn-secondary" @click="cancelCrop">Cancel</button>
          <button class="btn btn-primary" @click="applyCrop">Crop</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { Modal } from "bootstrap";
import { useModalStore } from "@/stores/modal";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const modal = useModalStore();
const modalRef = ref(null);
let modalInstance = null;

const defaultAvatar = "https://via.placeholder.com/100?text=Avatar";
const avatarPreview = ref(null);

const form = reactive({
  name: "",
  email: "",
  password: "",
  avatar: null,
});

const rules = {
  form: {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
};

const $v = useVuelidate(rules, { form });

onMounted(() => {
  modalInstance = new Modal(modalRef.value, { backdrop: "static" });
});

watch(
  () => modal.isOpen,
  (val) => {
    val ? modalInstance.show() : modalInstance.hide();
  }
);

// Cropper state
const showCropper = ref(false);
const rawImage = ref(null);
const cropper = ref(null);

function triggerFileInput() {
  document.getElementById("avatarInput").click();
}

function onFileChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  rawImage.value = URL.createObjectURL(file);
  showCropper.value = true;
}

function applyCrop() {
  if (!cropper.value) return;

  const canvas = cropper.value.getResult();
  if (!canvas) return;

  canvas.toBlob((blob) => {
    if (!blob) return;

    // Replace form.avatar with cropped image file
    form.avatar = new File([blob], "avatar-cropped.png", { type: "image/png" });

    // Update preview
    avatarPreview.value = URL.createObjectURL(blob);

    // Close cropper modal
    showCropper.value = false;

    // Clean up raw image URL
    URL.revokeObjectURL(rawImage.value);
    rawImage.value = null;
  });
}

function cancelCrop() {
  showCropper.value = false;
  URL.revokeObjectURL(rawImage.value);
  rawImage.value = null;
}

async function handleSubmit() {
  const isValid = await $v.value.$validate();
  if (!isValid) return;

  console.log("Form submitted:", { ...form, avatar: form.avatar });

  $v.value.$reset();
  modal.close();
}
</script>


