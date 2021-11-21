<template>
    <q-page class="q-pa-sm">

            <!-- Desktop -->
            <div v-if="$q.screen.gt.xs" class= "row full-width text-center justify-center">
                <div class="col-12 text-center text-primary q-mt-sm">
                    <p v-if="selectedProduct" class="text-h5">{{selectedProduct.name}}</p>
                </div>
                <div class="col-12 q-pt-md"  >
<!--                         <q-carousel
                            height="200px"
                            swipeable
                            animated
                            v-model="slide"
                            thumbnails
                            infinite
                            >
                             <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${selectedProduct.image_url}`" ></q-carousel-slide>
                        </q-carousel> -->
                        <slider></slider>
<!--                     <q-img v-if="selectedProduct" style="max-width: 400px; height: 300px;" :src="`https://api.pediapp.com.ar/images/${selectedProduct.image_url}` " contain  >
                    </q-img> -->
                </div>
                <div class="col-12 text-center q-pt-md q-mb-lg">
                    <div class="row full-width justify-center ">
                        <p v-if="selectedProduct" class="text-h8 text-strike text-red-2 q-ma-none q-mt-sm">  $ {{selectedProduct.price * 0.8}}</p>
                        <div v-if="selectedProduct" class="text-h5 text-primary q-ml-sm ">$ {{selectedProduct.price}}</div>
                    </div>
                </div>
                <div class="col-3 q-mt-md text-center q-ml-xl" >
                    <div class="row full-width q-pl-sm q-pr-sm justify-start" >
                        <div class="col-12 divBorder shadow-1" ref="quantityButon">
                            <div class="row rowInherit " >
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="remove" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="add" @click="quantity= quantity + 1" > </q-btn>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="row item-center " :class="!selectedProduct.stock? 'light-dimmed': '' ">
                        <q-space/>
                        <div class="col-2 q-ma-sm q-pt-sm" ref="quantityButon"  >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="add_shopping_cart" @click="addToCart"  />
                        </div>
                        <div class="col-2 q-ml-sm q-ma-sm q-pt-sm" ref="quantityButon" >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="fas fa-truck" @click="orderNow" />
                        </div>
                    </div>
                </div>
                    <div class="col-12 q-pt-md text-primary ">
                    <q-separator />
                    <div class=" text-h6 q-pa-none q-ma-none q-pt-sm text-weight-medium"> Descripción</div>                    
                </div>      

                <div class="col-7 q-pt-sm text-primary">
                    <div v-if="selectedProduct" class="text-h7 q-mb-md">{{selectedProduct.description}}</div>
                    
                </div>
                <div class="col-12">
                    <div v-if="!selectedProduct.stock" class="text-h5 text-red-7 q-mt-md">Sin Stock</div>
                    <q-separator></q-separator>
                        <div class="text-h6 q-mt-md text-primary text-center q-mt-sm q-mb-sm">Productos Relacionados</div>
                    <q-separator></q-separator>
                </div>
            </div>
        
                    <!-- Mobile -->
            <div v-if="!$q.screen.gt.xs" class= "row full-width justify-center">
                <div class="col-12 text-center text-primary q-mt-sm">
                    <p v-if="selectedProduct" class="text-h5">{{selectedProduct.name}}</p>
                </div>
                <div class="col-12 q-pt-md"  >
                    <q-img v-if="selectedProduct" style="max-width: 400px; height: 300px;" :src="`https://api.pediapp.com.ar/images/${selectedProduct.image_url}` " contain  >
                    </q-img>
                </div>
                <div class="col-12  q-pt-md ">
                    <div class="row full-width ">
                        <p v-if="selectedProduct" class="text-h8 text-strike text-red-2 q-ma-none q-mt-sm">  $ {{selectedProduct.price * 0.8}}</p>
                        <div v-if="selectedProduct" class="text-h5 text-primary q-ml-sm ">$ {{selectedProduct.price}}</div>
                        <q-space></q-space>
                    </div>

                </div>           

                <div class="col-6 q-mt-md text-center" >
                    <div class="row full-width q-pl-sm q-pr-sm " >
                        <div class="col-12 divBorder shadow-1" ref="quantityButon">
                            <div class="row rowInherit " >
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="remove" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="add" @click="quantity= quantity + 1" > </q-btn>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row item-center " :class="!selectedProduct.stock? 'light-dimmed': '' ">
                        <q-space/>
                        <div class="col-2 q-ma-sm q-pt-sm" ref="quantityButon"  >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="add_shopping_cart" @click="addToCart"  />
                        </div>
                        <q-space></q-space>
                        <div class="col-2 q-ml-sm q-ma-sm q-pt-sm" ref="quantityButon" >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="fas fa-truck" @click="orderNow" />
                        </div>
                        <q-space/>
                    </div>
                </div>
                    <div class="col-12 q-pt-md text-primary ">
                    <q-separator />
                    <div class=" h-5 q-pa-none q-ma-none q-pt-sm text-weight-medium"> Descripción</div>                    
                </div>      

                <div class="col-12 q-pt-sm text-primary">
                    <div v-if="selectedProduct" class="text-h7">{{selectedProduct.description}}</div>
                    
                </div>

                <div v-if="!selectedProduct.stock" class="text-h5 text-red-7 q-mt-md">Sin Stock</div>
                <q-separator></q-separator>
                    <div class="text-h6 q-mt-md text-primary text-center q-mb-sm">Productos Relacionados</div>
                <q-separator></q-separator>
            </div>
            <carrousel>
            </carrousel>
  </q-page>
</template>

<script>
import mapProducts from 'src/mixins/mapProducts'
import mapCart from 'src/mixins/mapCart'
import Carrousel from 'src/components/carrousel/carrousel.vue'
import Slider from 'src/components/Products/slider.vue'

export default {
    name:'productScoped',
    mixins:[mapProducts, mapCart],
    mounted(){
        this.fetchRelatedProducts()
    },
    data(){
        return {
            slide: 1,
            fullscreen: false,
            loadingCat: null,
            loadingSubCat: null,
            quantity: 1
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
        addToCart(){
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
        Carrousel,
        Slider
    }
}







/* 
            <div v-if="$q.screen.gt.sm" class= "row text-left justify-center">
                <div class="col-6 text-center text-primary q-mt-sm">
                    <div class="row">
                        <div class="col-12">
                        <q-img v-if="selectedProduct" style="max-width: 400px; height: 300px;" :src="`https://api.pediapp.com.ar/images/${selectedProduct.image_url}` " contain  >
                        </q-img>
                        </div>
                    </div>
                </div>
                <div class="col-6 q-pt-md ">
                    <div class="row full-height">
                        <p v-if="selectedProduct" class="col-12 self-start q-mt-md text-h5">{{selectedProduct.name}}</p>

                        <div class="col-12 self-end">
                            <div class="row full-width">
                                <p v-if="selectedProduct" class="text-h8 text-strike text-red-2 q-ma-none q-mt-sm q-mb-md">  $ {{selectedProduct.price * 0.8}}</p>
                                <div v-if="selectedProduct" class="text-h5 text-primary q-ml-sm ">$ {{selectedProduct.price}}</div>
                                <q-space></q-space>
                            </div>
                            <div class="row q-pr-sm text-bottom " >
                                <div class="col-6 divBorder shadow-1" ref="quantityButon">
                                    <div class="row rowInherit relative-bottom" >
                                        <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="remove" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                        <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                        <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="add" @click="quantity= quantity + 1" > </q-btn>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>           

                <div class="col-6">
                    <div class="row item-center " :class="!selectedProduct.stock? 'light-dimmed': '' ">
                        <q-space/>
                        <div class="col-2 q-ma-sm q-pt-sm" ref="quantityButon"  >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="add_shopping_cart" @click="addToCart"  />
                        </div>
                        <q-space></q-space>
                        <div class="col-2 q-ml-sm q-ma-sm q-pt-sm" ref="quantityButon" >  <!-- Dimmed cuando no hay stock -->
                            <q-btn color="secondary" icon-right="fas fa-truck" @click="orderNow" />
                        </div>
                        <q-space/>
                    </div>
                </div>
                    <div class="col-12 q-pt-md text-primary ">
                    <q-separator />
                    <div class=" h-5 q-pa-none q-ma-none q-pt-sm text-weight-medium"> Descripción</div>                    
                </div>      

                <div class="col-12 q-pt-sm text-primary">
                    <div v-if="selectedProduct" class="text-h7">{{selectedProduct.description}}</div>
                    
                </div>

                <div v-if="!selectedProduct.stock" class="text-h5 text-red-7 q-mt-md">Sin Stock</div>
                <q-separator></q-separator>
                    <div class="text-h6 q-mt-md text-primary text-center q-mb-sm">Productos Relacionados</div>
                <q-separator></q-separator>
            </div> */
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

