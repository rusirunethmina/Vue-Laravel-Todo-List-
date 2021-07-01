require('./bootstrap');


import Vue from 'vue'

import App from './vue/app'


//vForms
import { Form, } from 'vform';
window.Form = Form;


import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})


const app = new Vue({

    el:'#app',
    components : {App}
});

