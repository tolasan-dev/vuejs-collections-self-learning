import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// import reuse components of button
import BaseButton from "./components/BaseButton.vue";




const app = createApp(App)

// register globally
app.component('BaseButton', BaseButton)

app.mount('#app')