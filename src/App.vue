
<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
    //Prefetching on ServerSide of initial data, it fills Our vuex store.
    preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // fetch data, validate route and optionally redirect to some other route...

    // ssrContext is available only server-side in SSR mode

    // No access to "this" here

    // Return a Promise if you are running an async job
    return Promise.all([
      store.dispatch('internalSections/actionInternalSections'),
      store.dispatch('categories/actionCategories'),
      store.dispatch('products/actionProducts')
      ])
      
    },

}
</script>
