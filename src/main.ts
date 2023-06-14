import 'element-plus/dist/index.css';
import './assets/app.scss';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupIcons } from './utils';

function setupApp() {
  const app = createApp(App);

  app.use(createPinia());

  app.use(ElementPlus);

  setupRouter(app);

  setupIcons(app);

  app.mount('#app');
}

setupApp();
