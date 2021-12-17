import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/css/basc.scss";

const app = createApp(App);
// process 是全局变量，有一个环境变量env
console.log("process", process.env.VUE_APP_BASE_URL); // http://192.168.10.175:3000/dev
console.log("NODE_ENV", process.env.NODE_ENV); // development
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
