// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Optional: Material Design Icons
// Import all components and directives
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


// Create a Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
});

export default vuetify;
