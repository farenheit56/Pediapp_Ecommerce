<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
        <!-- Desktop Mode Toolbar -->
       <q-toolbar v-show="$route.name != 'cartCheckout' && $route.name != 'orderNow'" v-if="$q.screen.gt.xs" style="height: 64px">
      <q-avatar square style="width: 90px" class="q-ml-md">
        <q-img src="logo-empresa-desktop.svg" contain />
      </q-avatar>
        <q-space />
        <div v-for="(section,index) in internalSections" :key="index + 1017" @click="goToSection(section.path)">
          <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap color="primary" no-caps class="q-ml-sm q-px-md" :class="!$q.screen.gt.md? 'q-ml-none q-px-sm' : '' " :label="section.title"></q-btn>
        </div>
        <q-space v-if="$q.screen.gt.md" />        
        <q-btn flat dense no-wrap color="primary" icon="shopping_cart" no-caps class="q-ml-sm q-px-md"   @click="openCartLeftDialog = !openCartLeftDialog"></q-btn>
        <!-- <q-btn v-for="internalSection in internalSections" :key="internalSection.id" :to="internalSection.path" :label="internalSection.title" flat dense no-wrap color="primary" icon="cloud_upload" no-caps class="q-ml-sm q-px-md"></q-btn> -->
       </q-toolbar>
      <!-- Desktop Mode Toolbar (only for CheckOut)-->
      <q-toolbar v-show="$route.name == 'cartCheckout' && $q.screen.gt.xs" style="height:64px" class="text-center">
            <q-btn flat icon="home" @click="goToSection('/')" round></q-btn>
            <q-separator />
            <!-- Checkout with cart -->
            <q-space />
            <q-expansion-item
              expand-separator
              label="Ver Detalles de la compra"
              @click="openCartLeftDialog = !openCartLeftDialog"
              class="full-width q-pl-none"
              header-class="text-green-8"
            >
            </q-expansion-item>
            <q-space />
        </q-toolbar>
        <!-- Desktop Mode Toolbar (only for ORDERNOW) -->
        <q-toolbar v-show="$route.name == 'orderNow' && $q.screen.gt.xs" style="height:64px" class="text-center">
            <q-btn flat icon="home" @click="goToSection('/')" round></q-btn>
            <q-separator />
            <!-- Checkout with cart -->
            <q-expansion-item
              expand-separator
              label="Ver Detalles de la compra"
              @click="openOrderNowModal"
              class="full-width q-pl-none"
              header-class="text-green-8"
            >
            </q-expansion-item>
        </q-toolbar>

        <!-- !!!!------------------------------MOBILE-------------------------------------!!!! -->
        <!-- Mobile Mode Toolbar -->
        <q-toolbar v-show="$route.name != 'cartCheckout' && $route.name != 'orderNow'" v-if="!$q.screen.gt.xs" style="height:64px" class="row">
            <div class="text-left col-1 q-pa-none q-ma-none"> 
              <q-btn dense flat round icon="home" @click="openMenuLeftDrawer = !openMenuLeftDrawer" >
              </q-btn>
            </div>
            <div class="text-right q-ml-xs col-1 q-pa-none q-ma-none">
              <q-btn dense flat round  icon="menu"  @click="openProductLeftDrawer = !openProductLeftDrawer" >
              </q-btn>
            </div>
            <q-space></q-space>
            <div class="col-4 text-center q-pa-none q-ma-none" >
              <q-avatar square style="width: 80px">
                <q-img src="logo-empresa-desktop.svg" contain />
              </q-avatar>
            </div>
            <q-space></q-space>
            <div class="q-pa-none q-ma-none col-1 q-mr-xs"></div>
            <q-btn dense flat round  icon="shopping_cart" class="col-1 q-pa-none q-ma-none" @click="openCartLeftDrawer = !openCartLeftDrawer" >
            </q-btn>

        </q-toolbar> 
        <!-- Mobile Mode Toolbar (only for CheckOut) -->
        <q-toolbar v-show="$route.name == 'cartCheckout' && !$q.screen.gt.xs" style="height:64px" class="text-center">
            <q-btn flat icon="home" @click="goToSection('/')" round></q-btn>
            <q-separator />
            <!-- Checkout with cart -->
            <q-expansion-item
              expand-separator
              label="Ver Detalles de la compra"
              @click="openCartLeftDrawer = !openCartLeftDrawer"
              class="full-width q-pl-none"
              header-class="text-green-8"
            >
            </q-expansion-item>
        </q-toolbar>
        <!-- Mobile Mode Toolbar (only for ORDERNOW) -->
        <q-toolbar v-show="$route.name == 'orderNow' && !$q.screen.gt.xs" style="height:64px" class="text-center">
            <q-btn flat icon="home" @click="goToSection('/')" round></q-btn>
            <q-separator />
            <!-- Checkout with cart -->
            <q-expansion-item
              expand-separator
              label="Ver Detalles de la compra"
              @click="openOrderNowModal"
              class="full-width q-pl-none"
              header-class="text-green-8"
            >
            </q-expansion-item>
        </q-toolbar> 
    </q-header>

    <!-- Drawers -->
    <product-left-drawer v-model="openProductLeftDrawer"/>
    <home-left-drawer v-model="openMenuLeftDrawer"/>
    <cart-left-drawer v-model="openCartLeftDrawer" />
    <cart-left-dialog v-model="openCartLeftDialog" />
    <order-now-modal ref="orderNowModal"></order-now-modal>

    <q-page-container>
      <router-view @openCartDrawerFromPage="openCartDrawerFromPage"/>
    </q-page-container>


    <!-- Footer Mobile-->
    <q-footer v-if="!$q.screen.gt.xs" class="bg-grey-1 text-primary">
      <q-separator class="shadow-1"></q-separator>
      <div class="row text-center">
          <div class="col-12 q-mt-md q-mb-md text-h6 text-bold">Pedi App </div>
      </div>
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-avatar>
              <img src="icons/logo-pedi-app.png" @click="redirectToSocial('https://pediapp.com.ar/')" class="cursor-pointer">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
      <div class="row text-center">
          <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center ">Contacto </div>
          <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Telefono: {{contact[0].phone}} </div>
          <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Mail: {{contact[0].email || ''}} </div>
          <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Dirección: {{contact[0].address}}</div>
      </div>
    </q-footer>
    
    <!-- Footer Desktop-->
    <q-footer v-if="$q.screen.gt.xs" class="bg-white text-primary" bordered >
      <div class="row q-mt-lg"></div>
      <div class="row">
      <div class="col">
        <!-- WhiteSpace -->
      </div>
      <div class="col-3">
        <div class="row text-center">
            <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center ">Contacto </div>
            <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Telefono: {{contact[0].phone}} </div>
            <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Mail: {{contact[0].email || ''}} </div>
            <div class="col-12  q-mt-xs q-mb-xs  text-caption text-center">Dirección: {{contact[0].address}} </div>
        </div>
      </div>
<!--       <div class="col-3">
        <div class="row text-center justify-center">
            <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center ">Nuestras Redes </div>
            <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center "></div>
        </div>
        <div class="row text-center justify-center">
            <q-icon class="col-2" size="20px" name="fab fa-facebook"></q-icon>
            <q-icon class="col-2"  size="20px" name="fab fa-instagram"></q-icon>
            <q-icon class="col-2"  size="20px" name="fab fa-twitter"></q-icon>
        </div>
      </div> -->
      <div class="col-3">
        <div class="row text-center">
            <div class="col-12  q-mt-md q-mb-sm text-h7 text-bold text-center ">Pedi App </div>
        </div>
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar>
              <img src="icons/logo-pedi-app.png" @click="redirectToSocial('https://pediapp.com.ar/')" class="cursor-pointer">
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>
      </div>
      <div class="col">
        <!-- WhiteSpace -->
      </div>
    </div>
    <div class="row q-mb-lg"></div>
    </q-footer>

    <!-- SocialNetwork STICKY BTN Desktop-->
    <q-page-sticky v-show="$route.name != 'cartCheckout' && $q.screen.gt.xs"  :position="routeIsProduct? 'right': 'left'" :offset="[5, 0]">
<!--       <q-btn flat round dense  color="blue-10" size="small" icon="fab fa-facebook" class="q-mb-xs shadow-1" @click="redirectToSocial(socialNetworks[0].url)" /><br> -->
      <q-img v-if="socialNetworks[0] && socialNetworks[0].url && socialNetworks[0].icon_url" width="40px" height="40px" :src="`${BASE_IMG_URLs}/${socialNetworks[0].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[0].url)" /><br>
      <q-img v-if="socialNetworks[1] && socialNetworks[1].url && socialNetworks[1].icon_url" width="40px" height="40px" :src="`${BASE_IMG_URLs}/${socialNetworks[1].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[1].url)" /><br>
      <q-img v-if="socialNetworks[2] && socialNetworks[2].url && socialNetworks[2].icon_url" width="40px" height="40px" :src="`${BASE_IMG_URLs}/${socialNetworks[2].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[2].url)" /><br>         
      <q-img v-if="socialNetworks[3] && socialNetworks[3].url && socialNetworks[3].icon_url" width="40px" height="40px" :src="`${BASE_IMG_URLs}/${socialNetworks[3].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[3].url)" /><br>         
    </q-page-sticky>
        <!-- SocialNetwork STICKY BTN Mobile-->
    <q-page-sticky v-show="$route.name != 'cartCheckout' && !$q.screen.gt.xs"  :position="routeIsProduct? 'right': 'left'" :offset="[5, 0]">
<!--       <q-btn flat round dense  color="blue-10" size="small" icon="fab fa-facebook" class="q-mb-xs cursor-pointer shadow-1" @click="redirectToSocial(socialNetworks[0].url)" /><br> -->
      <q-img v-if="socialNetworks[0] && socialNetworks[0].url && socialNetworks[0].icon_url" width="30px" height="30px" :src="`${BASE_IMG_URLs}/${socialNetworks[0].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[0].url)" /><br>
      <q-img v-if="socialNetworks[1] && socialNetworks[1].url && socialNetworks[1].icon_url" width="30px" height="30px" :src="`${BASE_IMG_URLs}/${socialNetworks[1].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[1].url)" /><br>
      <q-img v-if="socialNetworks[2] && socialNetworks[2].url && socialNetworks[2].icon_url" width="30px" height="30px" :src="`${BASE_IMG_URLs}/${socialNetworks[2].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[2].url)" /><br>         
      <q-img v-if="socialNetworks[3] && socialNetworks[3].url && socialNetworks[3].icon_url" width="30px" height="30px" :src="`${BASE_IMG_URLs}/${socialNetworks[3].icon_url}`" contain class="q-mb-xs cursor-pointer" @click="redirectToSocial(socialNetworks[3].url)" /><br>         
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
import mapCart from 'src/mixins/mapCart.js'
import mapEvents from 'src/mixins/mapEvents.js'
import mapExtra from 'src/mixins/mapExtra.js'
import mapHome from 'src/mixins/mapHome.js'

//Drawers
import CartLeftDrawer from 'components/cart/cartLeftDrawer.vue'
import OrderNowModal from 'src/pages/orderNowModal'
import CartLeftDialog from 'components/cart/cartLeftDialog.vue'
import { BASE_IMG_URL} from 'src/env.js'

export default {
    data () {
    return {
        aliasPath: pathAlias,
        openMenuLeftDrawer:false,
        openProductLeftDrawer: false,
        openCartLeftDrawer: false,
        openCartLeftDialog:false,
        BASE_IMG_URLs: BASE_IMG_URL
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
    if(currentRoute.name == 'orderNow' || currentRoute.name == 'cartCheckout'){
      redirect({path:'/'})
    }
    if(currentRoute.name != 'productsBySubcategory' && currentRoute.name != 'productsByCategory' && currentRoute.name != 'productScoped'){
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
        store.commit('products/SetSelectedProductImages', selectedProduct )
    }
    //------End of route and store initialization handling--------

    // No access to "this" here
    // Return a Promise if you are running an async job
      
    },
    mounted(){
      console.log('---Mounted on MainLayout---')
      console.log(this.categories,'categories')
      console.log(this.products,'products')
      console.log(this.contact,'contact info')
      console.log(this.socialNetworks,'social networks')
      console.log(this.home,'Home')
      console.log(this.randomProducts, 'randomProducts')
      console.log(JSON.parse(localStorage.getItem('pediApp-currentCart')),'LocalStorage Cart')
      console.log('---------------')
      this.SetCartFromLocalStorage(JSON.parse(localStorage.getItem('pediApp-currentCart')))
    },
    mixins: [mapCategories, mapInternalSections, mapProducts, mapExtra, mapCart,mapHome,mapEvents],
    methods:{
      openCartDrawerFromPage(){
        if(this.$q.screen.gt.sm){
          this.openCartLeftDialog = true
        }else{
          this.openCartLeftDrawer = true
        }
      },
      redirectToSocial(link){
        this.$router.push({ redirect: window.location.href = link });
      },
      openOrderNowModal(){
          this.$nextTick(_ => {
              this.$refs["orderNowModal"].showOrderNowModal(this.cartOrderNow)
          });
      },
      //Desktop Toolbar Helpers.
      goToSection(sectionPath){
        let sectionToBeSelected = this.internalSections.find(section=>{
          return section.path == sectionPath
        })
            if(sectionPath == '/'){
              this.SetSelectedProduct(null)
            }
            this.SetSelectedInternalSection(sectionToBeSelected)
            this.SetSelectedCategory(null)
            this.SetSelectedSubCategory(null)
            this.$router.push({ name: sectionPath })
      },
    },
    computed:{
      routeIsProduct(){
        if(this.$route.name == 'productsBySubcategory' || this.$route.name == 'productos' || this.$route.name == 'productsByCategory' ){
          return true
        }else{
          return false
        }
      }
    },
    components:{
        ProductLeftDrawer,
        HomeLeftDrawer,
        CartLeftDrawer,
        OrderNowModal,
        CartLeftDialog
    }
}
</script>