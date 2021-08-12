<template>
  <q-layout view="hHh LpR fff">

    <q-header elevated class="bg-white text-grey-8" height-hint="64">

        <!-- Desktop Mode Toolbar -->
       <q-toolbar v-if="$q.screen.gt.xs" style="height: 64px">
        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
          <span class="q-ml-sm">PediApp</span>
        </q-toolbar-title>
        <q-space />        
        <q-btn v-for="internalSection in internalSections" :key="internalSection.id" :to="internalSection.path" :label="internalSection.title" flat dense no-wrap color="primary" icon="cloud_upload" no-caps class="q-ml-sm q-px-md"></q-btn>
        <q-space />
       </q-toolbar>

        <!-- Mobile Mode Toolbar -->
        <q-toolbar v-if="!$q.screen.gt.xs" style="height:64px">
            <q-btn dense flat round class="q-mx-md" icon="home"  @click="openMenuLeftDrawer = !openMenuLeftDrawer" >
                <div class="text-subtitle1">{{$t('nav.home')}}</div>
            </q-btn>
            <q-space />
            <q-btn dense flat round class="q-mx-md" icon="menu"  @click="openProductLeftDrawer = !openProductLeftDrawer" >
                <div class="text-subtitle1">{{$t('nav.products')}}</div>
            </q-btn>
            <q-space />
            <q-btn dense flat round class="q-mx-md" icon="shopping_cart"  @click="openCartLeftDrawer = !openCartLeftDrawer" >
                <div class="text-subtitle1">{{$t('nav.cart')}}</div>
            </q-btn>

        </q-toolbar> 
    </q-header>

    <!-- Drawers -->
    <product-left-drawer v-model="openProductLeftDrawer"/>
    <home-left-drawer v-model="openMenuLeftDrawer"/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import ProductLeftDrawer from 'components/Products/ProductLeftDrawer'
import HomeLeftDrawer from 'components/Home/homeLeftDrawer.vue'
import pathAlias from 'src/router/pathAlias/pathAliasEs.js'

//Store Mixins
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapProducts from 'src/mixins/mapProducts.js'

export default {
    data () {
    return {
        aliasPath: pathAlias,
        openMenuLeftDrawer:false,
        openProductLeftDrawer: false,
        openCartLeftDrawer: false,
    }
    },
    mounted(){
      console.log(this.internalSections)
      console.log(this.categories)
      console.log(this.products)
    },
    mixins: [mapCategories, mapInternalSections, mapProducts],
    computed:{
      //To render some Element if especific path is achived.
/*         renderSomeElement(){
            //E.g: products
            if(this.$route.fullPath == this.$t('pathAlias.products') ){
                return true
            }
        } */
    },
    components:{
        ProductLeftDrawer,
        HomeLeftDrawer
    }
}
</script>