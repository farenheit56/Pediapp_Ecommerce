<template>
  <q-layout v-if="$q.screen.lt.md" view="hHh LpR fff">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
        <!-- Desktop Mode Toolbar -->
       <q-toolbar v-if="$q.screen.gt.xs" style="height: 64px">
        <q-toolbar-title v-if="$q.screen.gt.sm" shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
          <span class="q-ml-sm">Pedi App</span>
        </q-toolbar-title>
        <q-space />        
        <q-btn v-for="internalSection in internalSections" :key="internalSection.id" :to="internalSection.path" :label="internalSection.title" flat dense no-wrap color="primary" icon="cloud_upload" no-caps class="q-ml-sm q-px-md"></q-btn>
        <q-space />
       </q-toolbar>

        <!-- Mobile Mode Toolbar -->
        <q-toolbar v-show="$route.name != 'cartCheckout'" v-if="!$q.screen.gt.xs" style="height:64px">
            <q-btn dense flat round class="q-mx-md" icon="home"  @click="openMenuLeftDrawer = !openMenuLeftDrawer" >
            </q-btn>
            <q-space />
            <q-btn dense flat round class="q-mx-md" icon="menu"  @click="openProductLeftDrawer = !openProductLeftDrawer" >
            </q-btn>
            <q-space />
            <q-btn dense flat round class="q-mx-md" icon="shopping_cart"  @click="openCartLeftDrawer = !openCartLeftDrawer" >
            </q-btn>
        </q-toolbar> 
        <!-- Mobile Mode Toolbar (only for CheckOut) -->
        <q-toolbar v-show="$route.name == 'cartCheckout' && !$q.screen.gt.xs" style="height:64px" class="text-center">
            <q-btn flat icon="home" @click="$router.push({path:'/'})" round></q-btn>
            <q-separator />
            <q-expansion-item
              expand-separator
              label="Ver Detalles de la compra"
              @click="openCartLeftDrawer = !openCartLeftDrawer"
              class="full-width q-pl-none"
              header-class="text-secondary"
            >
            </q-expansion-item>
        </q-toolbar> 
    </q-header>

    <!-- Drawers -->
    <product-left-drawer v-model="openProductLeftDrawer"/>
    <home-left-drawer v-model="openMenuLeftDrawer"/>
    <cart-left-drawer v-model="openCartLeftDrawer" />


    <q-page-container>
      <router-view @openCartDrawerFromPage="openCartDrawerFromPage"/>
    </q-page-container>


    <!-- Footer Mobile-->
    <q-footer class="bg-grey-1 text-primary">
      <div class="row text-center">
          <div class="col-12 q-mt-md q-mb-md text-h6 text-bold">Somos Pedi App </div>
      </div>
      <q-separator class="shadow-1"></q-separator>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
      <q-separator class="shadow-1"></q-separator>
      <div class="row text-center">
          <div class="col-5 q-ml-md q-mt-md text-h7  q-pa-none q-mb-md ">Nuestras Redes </div>
          <q-icon class="col-2" size="20px" name="fab fa-facebook"></q-icon>
          <q-icon class="col-2"  size="20px" name="fab fa-instagram"></q-icon>
          <q-icon class="col-2"  size="20px" name="fab fa-twitter"></q-icon>
          <q-space></q-space>
      </div>
      <q-separator class="shadow-1"></q-separator>
      <div class="row text-center">
          <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center ">Contacto </div>
          <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">{{contact[0].address}} </div>
          <div class="col-12  q-mt-xs q-mb-md  text-caption text-center">{{contact[0].phone}} </div>
      </div>
    </q-footer>

    <!-- SocialNetwork STICKY BTN-->
    <q-page-sticky v-show="$route.name != 'cartCheckout'"  position="left" :offset="[5, 0]">
      <q-btn flat round dense  color="blue-10" size="small" icon="fab fa-facebook" class="q-mb-xs shadow-1" @click="redirectToSocial(socialNetworks[0].url)" /><br>
      <q-btn flat round dense  color="pink-3" size="small" icon="fab fa-instagram"  class="q-mb-xs shadow-1" @click="redirectToSocial(socialNetworks[1].url)" /><br>
    </q-page-sticky>
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
//import mapEvents from 'src/mixins/mapEvents.js'
import mapExtra from 'src/mixins/mapExtra.js'

import CartLeftDrawer from 'components/cart/cartLeftDrawer.vue'

export default {
    data () {
    return {
        aliasPath: pathAlias,
        openMenuLeftDrawer:false,
        openProductLeftDrawer: false,
        openCartLeftDrawer: false,
    }
    },
    preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext, urlPath, publicPath }) {
    // fetch data, validate route and optionally redirect to some other route...
    // ssrContext is available only server-side in SSR mode

    //Here we are handling store initialization when a route is directly...
    //...hit by the browser and not throught surfing the page
    let allInternalSections= store._modulesNamespaceMap['internalSections/'].state.internalSections
    let allCategories= store._modulesNamespaceMap['categories/'].state.categories
    let allSubCategories= store._modulesNamespaceMap['categories/'].state.subcategories
    let allProducts =  store._modulesNamespaceMap['products/'].state.products
    let selectedSection
    let selectedCategory
    let selectedSubCategory
    let selectedProduct
    if(currentRoute.name != 'productsBySubcategory' && currentRoute.name != 'productsByCategory' && currentRoute.name != 'productScoped' && currentRoute.name != 'checkoutAndPay'){
        selectedSection = allInternalSections.find(section=>{
            return section.path == currentRoute.name
        })
        store.commit('internalSections/SetSelectedInternalSection', selectedSection)
    }else if (currentRoute.name == 'productsByCategory'){
      selectedSection = allInternalSections.find(section=>{
          return section.path == 'productos'
      })
      selectedCategory = allCategories.find(categorie=>{
          return categorie.path == currentRoute.params.category
      })
      store.commit('internalSections/SetSelectedInternalSection', selectedSection)
      store.commit('categories/SetSelectedCategory', selectedCategory )

    } else if (currentRoute.name == 'productsBySubcategory'){
        selectedSection = allInternalSections.find(section=>{
            return section.path == 'productos'
        })
        selectedCategory = allCategories.find(categorie=>{
          return categorie.path == currentRoute.params.category
        })
        selectedSubCategory = allSubCategories.find(subcategory=>{
          return subcategory.path == currentRoute.params.subcategory
        })
        store.commit('internalSections/SetSelectedInternalSection', selectedSection)
        store.commit('categories/SetSelectedCategory', selectedCategory )
        store.commit('categories/SetSelectedSubCategory', selectedSubCategory )
    }else if ( currentRoute.name == 'productScoped'){
        selectedProduct = allProducts.find(product=>{
          return product.path == currentRoute.params.product
        })
        store.commit('products/SetSelectedProduct', selectedProduct )
    }
    //------End of route and store initialization handling--------

    // No access to "this" here
    // Return a Promise if you are running an async job
      
    },
    mounted(){
      console.log(this.internalSections)
      console.log(this.categories)
      console.log(this.products)
      console.log(this.contact)
      console.log(this.socialNetworks)
    },
    mixins: [mapCategories, mapInternalSections, mapProducts, mapExtra],
    methods:{
      openCartDrawerFromPage(){
        this.openCartLeftDrawer = true
      },
      redirectToSocial(link){
        this.$router.push({ redirect: window.location.href = link });
      }
    },
    components:{
        ProductLeftDrawer,
        HomeLeftDrawer,
        CartLeftDrawer
    }
}
</script>