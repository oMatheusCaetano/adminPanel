import { createApp } from 'vue';
import Maska from 'maska';

import App from '@/App';
import store from '@/store';
import router from '@/router';

createApp(App)
  .use(store)
  .use(router)
  .use(Maska)
  .mount('#app');
