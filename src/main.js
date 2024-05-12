import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 
import vuetify from "./plugins/vuetify"; 

import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";
const app = createApp(App);
app.use(OpenLayersMap );
app.use(router);
app.use(vuetify); 

app.mount("#app");
