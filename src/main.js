import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
    toast:true,
    position:'top-end',
    isDismissed: true,
};

createApp(App).use(store).use(router).use(VueSweetalert2, options).mount("#app");
