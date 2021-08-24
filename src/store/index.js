import Vue from 'vue'
import Vuex from 'vuex'

import categories from './categories'
import internalSections from './internalSections'
import products from './products'
import cart from './cart'
import events from './events'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
        categories,
        internalSections,
        products,
        cart,
        events
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
