// Requred by theme templates
window.jQuery = require('jQuery');
// Import Nav module
import * as nav from './modules/nav.js';

import * as login from './modules/login.js';

// Kick off the mobile nav js
nav.init();

login.init();
