<template>
  <div>
    <div class="modal fade" id="Home">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
          </div>
          <div class="modal-body">
            <form @submit.prevent>
              <p class="m-0 p-0">Photo</p>
              <div class="d-flex align-items-center">
                <div class="photo mb-3">
                  <img
                    :src="cropStore.Crop.avertar"
                    width="100%"
                    height="100%"
                    class="object-fit-cover"
                    alt=""
                  />
                </div>
                <div
                  class="icon ms-2 bg-primary-subtle rounded-circle px-2 py-1"
                  @click="onSelected()"
                >
                  <i class="bi bi-camera fs-5 text-primary"></i>
                </div>
                <input
                  type="file"
                  class="form-control d-none"
                  id="InputImg"
                  @change="onChangeImg($event)"
                />
              </div>
              <div class="mb-3">
                <label for="exmpleImputeName" class="form-label">Name</label>
                <input type="text" class="form-control" id="exmpleImputeName" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCropStore } from "@/stores/CropStore.js";
import { onMounted } from "vue";
import { Modal } from "bootstrap";
const cropStore = useCropStore();
onMounted(() => {
  cropStore.AddCrop = Modal.getOrCreateInstance(
    document.getElementById("Home")
  );
});
const Add = () => {
  cropStore.AddCrop.show();
};
const Close = () => {
  cropStore.AddCrop.hide();
};
const onSelected = () => {
  document.getElementById("InputImg").value = "";
  document.getElementById("InputImg").click();
};
const onChangeImg = (e) => {
  if (e.currentTarget.files.length == 0) {
    return;
  }
  const file = e.currentTarget.files[0];
  console.log(file);
  cropStore.Crop.img = URL.createObjectURL(file);
  console.log(cropStore.Crop.img);
  cropStore.AddCrop.hide();
  cropStore.mdl_Crop.show();
};
</script>
<style scoped>
.photo {
  width: 150px;
  height: 150px;
  background-color: red;
}

.icon {
  transform: translateY(53px);
  cursor: pointer;
}
</style>
