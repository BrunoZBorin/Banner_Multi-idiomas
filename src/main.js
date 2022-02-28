import Vue from 'vue';
import App from './App.vue'
import VueResource from 'vue-resource';
// import axios from './plugins/axios';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource);
const lang = localStorage.getItem('lang') || 'en_GB'
Vue.http.headers['Accept-Language'] = lang;
new Vue({
  render: h => h(App),
}).$mount('#app')
