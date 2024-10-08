import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Optional: Material Design Icons

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Create a Vuetify instance
const vuetify = createVuetify(
    components,
    directives,
);

const app = createApp(App);

// Use the router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Mount the app
app.mount('#app');
