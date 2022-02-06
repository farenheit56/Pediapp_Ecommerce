<template>
    <q-page class="q-pa-sm">

            <!-- Desktop -->
            <div v-if="$q.screen.gt.xs" class= "row full-width text-center">
                <div class="col-12 q-ml-md q-mt-md q-mb-md">
                    <categories-tags :fromProductScoped="true" ></categories-tags>
                </div>
                <div class="col-1">
                </div>
                <div v-if="selectedProductImages" class="col-6">
                    <carousel
                        :starting-image="0"
                        :images="selectedProductImages"
                    ></carousel>
                </div>
                <div class="col-4" :class="!$q.screen.gt.md ?'col-5' : 'col-4'">
                    <div class="row items-center">
                        <div v-if="$q.screen.gt.md" class="col-12 q-mb-md"></div>
                        <div class="col-12 text-left q-mt-lg">
                            <p v-if="selectedProduct" class="text-h4" :class="!$q.screen.gt.md ?'text-h5 text-bold' : 'text-h4 text-bold'">{{selectedProduct.name}}</p>
                        </div>
                        <div class="col-7 q-pt-sm text-left" :class="!$q.screen.gt.md ?'col-12' : 'col-12'">
                            <div v-if="selectedProduct" class="text-h6 q-mb-md" :class="!$q.screen.gt.md ?'text-h7' : 'text-h6'">{{selectedProduct.description}}</div>                    
                        </div>
                        <div class="col-12 text-left q-pt-md q-mb-lg">
                            <div class="row full-width text-left">
                                <div v-if="selectedProduct" class="col-6 text-h5 text-primary q-ml-sm " :class="!$q.screen.gt.md ?'text-h6' : 'text-h5'">$ {{parsePrice(selectedProduct.price)}}</div>
                                <div v-if="!selectedProduct.stock" class="col-4 text-h5 text-red-7 text-left">Sin Stock</div>
                            </div>
                        </div>
                        <div class="col-3 text-center" :class="!$q.screen.gt.md ?'col-6' : 'col-3'">
                            <div class="row full-width q-pl-sm q-pr-sm justify-start" >
                                <div class="col-12 divBorder shadow-1" ref="quantityButon">
                                    <div class="row rowInherit " >
                                        <q-btn  outlined size="8px" class="col-3 text-center btnBorder" :disabled="!selectedProduct.stock" icon="remove" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                        <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                        <q-btn  outlined size="8px" class="col-3 text-center btnBorder" :disabled="!selectedProduct.stock" icon="add" @click="quantity= quantity + 1" > </q-btn>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 text-left">
                            <div class="row">
                                <div class="col-5 q-ml-lg" ref="quantityButon"  >  <!-- Dimmed cuando no hay stock -->
                                    <!-- <q-btn color="secondary" icon-right="add_shopping_cart" :disabled="!selectedProduct.stock" @click="addToCart"  /> -->
                                    <img src="icons/cart.png" style="height:50px" :disabled="!selectedProduct.stock" @click="addToCart(!selectedProduct.stock)" class='cursor-pointer self-center item-center q-mt-xs'>
                                </div>
<!--                                 <div class="col-5" ref="quantityButon" >
                                    <q-btn color="secondary" icon-right="fas fa-truck" :disabled="!selectedProduct.stock" @click="orderNow" />
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="$q.screen.gt.md" class="col-1">
                </div>   
                <div class="col-12" style="height:3vw">                    
                </div>
                <div class="col-12">                    
                        <div class="text-h4 q-mt-md text-primary text-center q-mt-xl q-mb-sm">Productos Relacionados</div>
                </div>
                <div class="row full-width q-mt-lg q-mb-xl"  style="height:20vw"><!-- style="height:30em;width:30em" -->
                    <div class="col-1 ">                        
                    </div> 
                    <div class="col-10" style="height:20vw"  >
                        <carrousel-related></carrousel-related>
                    </div>
                    <div class="col-1 ">                        
                    </div>
                </div>
                <div class="col-12" style="height:5vw">

                </div>
            </div>
        
            <!-- Mobile -->
            <div v-if="!$q.screen.gt.xs" class= "row full-width justify-center">
                <div class="col-12 q-ml-md q-mt-md q-mb-md">
                    <categories-tags :fromProductScoped="true" ></categories-tags>
                </div>
                <div class="col-12 q-pt-md"  >
<!--                     <q-img v-if="selectedProduct" style="max-width: 400px; height: 300px;" :src="`https://api.pediapp.com.ar/images/${selectedProduct.image_url}` " contain  >
                    </q-img> -->
                    <carousel-mobile
                        :starting-image="0"
                        :images="selectedProductImages">                        
                    </carousel-mobile>
                </div>
                <div class="col-12 q-pt-md">
                    <q-separator />
                    <div class="col-12 text-left q-mt-sm">
                        <p v-if="selectedProduct" class="text-h6 text-bold">{{selectedProduct.name}}</p>
                    </div>             
                </div>     

                <div class="col-12 q-pt-sm ">
                    <div v-if="selectedProduct" class="text-h7">{{selectedProduct.description}}</div>                    
                </div>
                <div class="col-12  q-pt-md ">
                    <div class="row full-width ">
                        <div v-if="selectedProduct" class="col-6 text-h5 text-primary q-ml-sm ">$ {{parsePrice(selectedProduct.price)}}</div>
                        <div v-if="!selectedProduct.stock" class="col-5 text-h5 text-red-7">Sin Stock</div>
                    </div>
                </div>           

                <div class="col-6 q-mt-md text-center" >
                    <div class="row full-width q-pl-sm q-pr-sm " >
                        <div class="col-12 divBorder shadow-1" ref="quantityButon">
                            <div class="row rowInherit " >
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="remove" :disabled="!selectedProduct.stock" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="add" :disabled="!selectedProduct.stock" @click="quantity= quantity + 1" > </q-btn>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row item-center " >
                        <div class="col-2 q-ma-sm q-pt-sm q-ml-md" ref="quantityButon"  >  <!-- Dimmed cuando no hay stock -->
                            <!-- <q-btn color="secondary" icon-right="add_shopping_cart" :disabled="!selectedProduct.stock" @click="addToCart"  /> -->
                            <img src="icons/cart.png" style="height:40px" :disabled="!selectedProduct.stock" @click="addToCart(!selectedProduct.stock)" class='cursor-pointer self-center item-center '>
                        </div>
                        <q-space></q-space>
<!--                         <div class="col-2 q-ml-sm q-ma-sm q-pt-sm" ref="quantityButon" >
                            <q-btn color="secondary" icon-right="fas fa-truck" :disabled="!selectedProduct.stock" @click="orderNow" />
                        </div> -->
<!--                         <q-space/> -->
                    </div>
                </div>
                <div class="col-12"  >
                    <div class="text-center text-primary text-h6 q-mt-md"> Productos Relacionados</div>
                </div>
                <div class="row full-width q-mt-lg"  style="height:350px"><!-- style="height:30em;width:30em" -->
                    <div class="col-12"  style="height:350px"  >
                        <carrousel-related></carrousel-related>
                    </div>
                </div>
            </div>
  </q-page>
</template>

<script>
import mapProducts from 'src/mixins/mapProducts'
import mapCart from 'src/mixins/mapCart'
import mapHelpers from 'src/mixins/mapHelpers'
import Carousel from 'src/components/carrousel-model/Carousel.vue'
import CarouselMobile from 'src/components/carrousel-model/CarouselMobile.vue'
import CarrouselRelated from 'src/components/carrousel/carrousel.vue'
import Slider from 'src/components/Products/slider.vue'
import CategoriesTags from 'components/reusable/categoriesTags'


export default {
    name:'productScoped',
    mixins:[mapProducts, mapCart,mapHelpers],
    mounted(){
        this.fetchRelatedProducts()
    },
    data(){
        return {
            slide: 1,
            fullscreen: false,
            loadingCat: null,
            loadingSubCat: null,
            quantity: 1,
/*             images: [
                {
                    id: '1',
                    big: 'images/p1.jpeg',
                    thumb: 'images/p1.jpeg'
                },
                {
                    id: '2',
                    big: 'images/p2.jpeg',
                    thumb: 'images/p1.jpeg'
                },
                {
                    id: '3',
                    big: 'images/p3.jpeg',
                    thumb: 'images/p1.jpeg'
                },
                {
                    id: '4',
                    big: 'images/p4.jpeg',
                    thumb: 'images/p1.jpeg'
                },
                
            ] */
        }
    },
    methods:{
        async fetchRelatedProducts(){
            if(this.selectedProduct.categories && this.selectedProduct.categories[0].id){
                await this.actionRelatedProductByCat(this.selectedProduct.categories[0].id)
                this.loadingCat = true
            }
            if (this.selectedProduct.subcategories && this.selectedProduct.subcategories[0].id){
                await this.actionRelatedProductBySubCat(this.selectedProduct.subcategories[0].id)
                this.loadingSubCat = true
            }
        },
        addToCart(outOfStock){
            if(outOfStock){
                return
            }
            let cartProductObj= {
                id: this.selectedProduct.id,
                name: this.selectedProduct.name,
                description:this.selectedProduct.description,
                quantitySelected: +this.quantity,
                price: this.selectedProduct.price,
                image_url: this.selectedProduct.image_url
            }
            this.PushCartProduct(cartProductObj)
            this.$emit('openCartDrawerFromPage')
        },
        orderNow(){
                let cartProductObj= {
                id: this.selectedProduct.id,
                name: this.selectedProduct.name,
                description:this.selectedProduct.description,
                quantitySelected: +this.quantity,
                price: this.selectedProduct.price,
                image_url: this.selectedProduct.image_url
            }
            this.PushCartOrderNow(cartProductObj)

            //Go to Checkout.
            this.$router.push({name:'orderNow'})

        },

    },
    computed: {
        relatedProductByCatAndSubCat(){
            let relatedArray = []
            if(this.relatedProductByCat){
                for (const product of this.relatedProductByCat){
                    relatedArray.push(product)
                }
            }
            if(this.relatedProductBySubCat){
                for (const product of this.relatedProductBySubCat){
                    relatedArray.push(product)
                }
            }
            return relatedArray
        }
    },
    components:{
        Carousel,
        Slider,
        CarouselMobile,
        CategoriesTags,
        CarrouselRelated
    }
}
</script>


<style lang="scss" scoped>

.divBorder{

    height: 40px;
    border-radius: 10px;
}

.btnBorder {
    /* border: 1px solid $primary; */
    height: 97%;
    border-radius: 10px;
}

.rowInherit {
    height: 100%;
}


.gonnaBeOnTheBottom {
  display: table-cell;
  vertical-align: middle;
}

</style>

