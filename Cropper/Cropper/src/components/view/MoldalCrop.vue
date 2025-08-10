<template>
    <div class="modal fade" id="Crop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Crop">Crop</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <cropper :src="cropStore.Crop.img"
                    :auto-zoom="true"
                     @change="onChangeCrop" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary " @click="onSave()">Save Change</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCropStore } from '@/stores/CropStore.js';
import { onMounted } from 'vue';
import { Modal } from 'bootstrap';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';
// import 'vue-advanced-cropper/dist/index.css';
// import 'vue-advanced-cropper/dist/theme.compact.css';
const cropStore = useCropStore();
let temp = null;
onMounted(() => {
    cropStore.mdl_Crop = Modal.getOrCreateInstance(document.getElementById('Crop'));
});
const onChangeCrop = ({canvas}) => {
    temp = canvas
};
const onSave = () => {
    temp.toBlob((bin)=> {
        cropStore.Crop.blob = bin;
        cropStore.Crop.avertar = URL.createObjectURL(bin);
        cropStore.mdl_Crop.hide();
        cropStore.AddCrop.show();
    }),'image/jpeg';
}

</script>