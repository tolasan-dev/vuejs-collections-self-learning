import { defineStore } from "pinia"
export const useCropStore = defineStore('view/Crop',{
    state:()=>({
        AddCrop:null,
        mdl_Crop:null,
        Crop:{
            img:'',
            blob:null,
            avertar:'CAMBODIA-flag.png',
        }
    }),
    actions:{

    }
})