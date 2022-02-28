import Vue from 'vue'
import axios from 'axios'


const lang = localStorage.getItem('lang') || 'en_GB'
// axios.defaults.baseURL = 'https://jacto.com/api/v1'; 
axios.defaults.headers['Accept-Language'] = lang;
axios.defaults.headers['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET';
axios.defaults.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})