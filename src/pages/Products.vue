<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <div class="col-12">
                    <section-portrait :sectionName="$route.path" :scopedCategory="['Instrumentos de hogar','Calefonesa']" />
                </div>
                <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
                <div class="col-xs-12 col-sm-11 col-md-9 col-lg-9">
                    <div class= "row">
                        <div v-for="(product, index) in productFilteredList" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-sm q-pa-sm">
                            <card-product v-if="products" :data="product" />
                        </div>
                    </div>
                </div>
                <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
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
import sectionPortrait from '../components/reusable/sectionPortrait.vue'

//Store modules
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapProducts from 'src/mixins/mapProducts.js'

export default {
    components: { sectionPortrait },
    name: 'PageIndex',    
    data(){
      return {
          slide:1,
          productList:null
      }
    },
    mixins:[mapCategories, mapProducts, mapInternalSections],
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
        sectionPortrait,
    }
}
</script>

<style scoped>
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