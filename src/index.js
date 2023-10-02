import Vue from "vue";
import App from "./app.vue";
import "./css/wa/navody-digital-0.1.7.min.css";
import "./globalComponents.js";

import router from "./router";

// vue-axios wraps axios and makes it available globally across the app
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, {
    siteKey: "6Lf14KYlAAAAAFkC-LYuM_vezETIlDNxSSf6Gv7D",
    autoHideBadge: true,
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
