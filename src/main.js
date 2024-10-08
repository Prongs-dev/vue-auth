// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure you have router set up
import vuetify from './plugins/vuetify'; // Import the Vuetify plugin

const app = createApp(App);

// Use the router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Mount the app
app.mount('#app');
