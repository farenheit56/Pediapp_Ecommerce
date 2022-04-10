import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

//import routes from './routes'
import makeRoutes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async function({ store /*ssrContext */ }) {
  //await store.dispatch('internalSections/actionInternalSections') //Only works in SPA
  //const routes = makeRoutes(store) // Only works in SPA
  const internalSections = await axios.get(
    "https://api.laboutiquedelaflor.com.ar/api/internalSections"
  );
  //const categoriesAndSub = await axios.get('https://localhost:3001/api/categories')
  const routes = makeRoutes(internalSections.data);
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
