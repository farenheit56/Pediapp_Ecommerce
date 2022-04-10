import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// Agregamos la URL base de nuestra API
const api = axios.create({
  baseURL: "https://api.laboutiquedelaflor.com.ar/api"
});
Vue.prototype.$api = api

export { axios, api }
