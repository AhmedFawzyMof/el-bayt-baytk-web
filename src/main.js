import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import "./style.css";
axios.defaults.baseURL = "http://localhost:5500";

createApp(App).use(store).use(router, axios).mount("#app");