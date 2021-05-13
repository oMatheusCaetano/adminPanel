import { createApp } from 'vue';
import Maska from 'maska';

import 'tailwindcss/tailwind.css';

import App from '@/App';
import router from '@/router';

createApp(App)
  .use(router)
  .use(Maska)
  .mount('#app');
