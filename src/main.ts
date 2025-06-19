import './assets/scss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import clickOutside from '@/directives/clickOutside.js';

const app = createApp(App);

app.directive('click-outside', clickOutside);

app.mount('#app');
