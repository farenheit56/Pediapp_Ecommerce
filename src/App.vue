
<template>
  <div id="q-app">
    <router-view />
    <init-categories />
    <init-internal-sections />
  </div>
</template>
<script>
import initCategories from 'components/Categories/initCategories.vue';
import initInternalSections from 'components/Home/initInternalSections.vue';

export default {
  name: 'App',
  components: {
      initCategories,
      initInternalSections
  }
}
</script>
