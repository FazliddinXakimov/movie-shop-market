import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toaster from "@meforma/vue-toaster";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseDialog from "./components/UI/BaseDialog.vue";

library.add(fas, far);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(Toaster, {
  position: "top",
});
app.use(router);
app.use(store);
app.component("base-dialog", BaseDialog);

app.mount("#app");
