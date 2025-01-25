import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import IconFacebook from "./components/icons/IconFacebook.vue";
import IconTwitter from "./components/icons/IconTwitter.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("IconFacebook", IconFacebook);
app.component("IconTwitter", IconTwitter);

app.mount('#app')
