import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// import reuse components of button
import BaseButton from "./components/BaseButton.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App);

app.component("BaseCard", BaseCard);

app.mount("#app");
