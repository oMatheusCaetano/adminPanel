import { createApp } from 'vue';

import 'tailwindcss/tailwind.css';

import App from '@/App';
import router from '@/router';

createApp(App)
  .use(router)
  .mount('#app');
