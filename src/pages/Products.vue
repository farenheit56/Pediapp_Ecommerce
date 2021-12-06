<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm" :class="`${!$q.screen.gt.xs ? 'justify-center': ''}`">
                <div class="col-12">
                    <section-portrait></section-portrait>
                </div>
                <div class="col-3" style="min-height:600px" :class="`${!$q.screen.gt.xs ? 'hidden': ''}`">
                    <product-drawer-desktop></product-drawer-desktop>
                </div>

                <div class="col-xs-12 col-sm-11 col-md-8 col-lg-8">
                    <div class= "row">
                        <div class="col-12 q-ml-md q-mt-md q-mb-md">
                            <categories-tags :fromProductScoped="false"></categories-tags>
                        </div>
                        <div v-for="(product, index) in productFilteredList.slice((ElementosPorPagina * current) - ElementosPorPagina , (ElementosPorPagina * current))" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-sm q-pa-sm">
                            <card-product @openCartDrawerFromPage="openCartDrawerFromPage" v-if="products" :data="product" class="cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div class="col q-pl-none " :class="`${!$q.screen.gt.xs ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
                <div class="col-12 q-mt-sm q-mb-sm">
                    <div class="row justify-center">
                        <q-pagination
                            v-model="current"
                            color="black"
                            size="11px"
                            :max="TotalPaginas"
                            :max-pages="4"
                            :boundary-numbers="true"
                            :min="1"
                            @click="logInConsole"
                        >
                        </q-pagination>
                    </div>
                </div>
            </div>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->

  </q-page>
</template>

<script>
import cardProduct from 'components/Products/cardProduct'
import CategoriesTags from 'components/reusable/categoriesTags'

//Store modules
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapProducts from 'src/mixins/mapProducts.js'
import ProductDrawerDesktop from 'components/Products/productDrawerDesktop.vue'
import SectionPortrait from 'src/components/reusable/sectionPortrait.vue'

export default {
    name: 'PageIndex',    
    data(){
    return {
        slide:1,
        productList: null,
        ElementosPorPagina: 9,
        TotalPaginas: 1,
        current:1,

      }
    },
    mixins:[mapCategories, mapProducts, mapInternalSections],
    mounted(){
        this.CalcularTotalPaginas()
    },
    methods:{
        openCartDrawerFromPage(){
            this.$emit('openCartDrawerFromPage')
        },
        //Pagination Logic
        CalcularTotalPaginas(){
            let resto = this.products.length % this.ElementosPorPagina
            if(resto){
                this.TotalPaginas = (this.products.length - resto) / this.ElementosPorPagina + 1
            }else{
                this.TotalPaginas = this.products.length / this.ElementosPorPagina
            }
            
        },
        logInConsole(){
            window.scrollTo({
            top: 0,
            left: 270,
            behavior: 'smooth'
        });
        }
    },
    computed:{
        productFilteredList() {
            if(this.selectedCategory){
                //By Category
                let productsBySelectedCategory = this.products.filter((product)=>{
                    let matchId = null
                    for (let category of product.categories){
                        if(category.id === this.selectedCategory.id){
                            matchId= true
                        }
                    }
                    return matchId
                })
                //By Subcategory
                if(this.selectedSubCategory){
                    let productByCategoryAndSubcategory = productsBySelectedCategory.filter((product)=>{
                        let matchId = null
                        for (let subcategory of product.subcategories){
                            if(subcategory.id === this.selectedSubCategory.id){
                                matchId= true
                            }
                        }
                        return matchId                    
                    })
                    return productByCategoryAndSubcategory
                }
                return productsBySelectedCategory
            }else{
                return this.products
            }
        }
    },

    components:{
        cardProduct,
        SectionPortrait,
        ProductDrawerDesktop,
        CategoriesTags
    }
}
</script>

<style Product, ProductDrawerDesktopLeftDrawerscoped>
/* add grid properties to debug responsive behaviour */
.slider-grid {
    background: #f59494;
    background-clip: content-box;
}
.categories-grid {
    background: #bebebe;
    background-clip: content-box;
}
.products-grid {
    background: #afb3ee;
    background-clip: content-box;
}
.product-grid {
    background: #afeeb9;
    background-clip: content-box;
}
.whiteSpace-grid {
    background: #b442ab;
    background-clip: content-box;
}
.borders-grid {
    border:1px solid black;
    box-sizing: border-box;
}


</style>