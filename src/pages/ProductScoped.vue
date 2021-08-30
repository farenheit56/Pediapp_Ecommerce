<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <div class="col-12 text-center text-primary q-mt-sm">
                    <p v-if="selectedProduct" class="text-h5">{{selectedProduct.name}}</p>
                </div>
                <div class="col-12 q-pt-md" >
                    <q-img v-if="selectedProduct" style="max-width: 400px; height: 300px;" :src="`http://localhost:3000/images/${selectedProduct.image_url}` " contain  >
                    </q-img>
                    <!-- <img v-gallery :src="`http://localhost:3000/images/${selectedProduct.image_url}`" /> -->
<!--                     <q-carousel
                    swipeable
                    animated
                    arrows
                    v-model="slide"
                    :fullscreen.sync="fullscreen"
                    infinite
                    >
                    <q-carousel-slide :name="1"  >
                    <q-img v-if="selectedProduct" class="text-center align-center" style="max-width: 400px; height: 300px;" :src="`http://localhost:3000/images/${selectedProduct.image_url}` " contain  >
                    </q-img>
                    </q-carousel-slide>


                    <template v-slot:control>
                        <q-carousel-control
                        position="bottom-right"
                        :offset="[18, 18]"
                        >
                        <q-btn
                            push round dense color="white" text-color="primary"
                            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                            @click="fullscreen = !fullscreen"
                        />
                        </q-carousel-control>
                    </template>
                    </q-carousel> -->
                </div>
                <div class="col-12  q-pt-md ">
                    <div class="row full-width ">
                        <p v-if="selectedProduct" class="text-h8 text-strike text-red-2 q-ma-none q-mt-sm">  $ {{selectedProduct.price * 0.8}}</p>
                        <div v-if="selectedProduct" class="text-h5 text-primary q-ml-sm ">$ {{selectedProduct.price}}</div>
                        <q-space></q-space>
                    </div>

                </div>           
<!--                 <div class="col-12">
                    <div class="row items-center">
                        <q-space></q-space>
                        <q-btn class="col-1" color="info" label="-" dense size="10px" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 "/>
                        <q-input class="col-2 q-ma-sm q-pt-sm" type= "number" v-model="quantity" outlined readonly dense />
                        <q-btn color="info" class="col-1" dense label="+"  size="10px" @click="quantity = quantity + 1"/>
                        <q-space></q-space>
                    </div>                    
                </div> -->
                <div class="col-6 q-mt-md text-center">
                    <div class="row full-width q-pl-sm q-pr-sm">
                        <div class="col-12 divBorder shadow-1" ref="quantityButon">
                            <div class="row rowInherit ">
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="remove" @click="quantity = (quantity - 1) > 0 ? (quantity - 1) : 0 " ></q-btn>                                
                                <div class="col-6 text-center q-mt-sm text-weight-light" :value="quantity" > {{quantity}}</div>                                
                                <q-btn  outlined size="8px" class="col-3 text-center btnBorder" icon="add" @click="quantity= quantity + 1" > </q-btn>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row item-center">
                        <q-space/>
                        <div class="col-6 q-ma-sm q-pt-sm" ref="quantityButon">
                            <q-btn color="secondary" icon-right="add_shopping_cart" @click="addToCart"  />
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
<!--                 <div class="col-12 q-pa-md">
                    <q-carousel
                    v-if="relatedProductByCatAndSubCat"
                    height="200px"
                    swipeable
                    animated
                    v-model="slide"
                    infinite
                    >
                    <q-carousel-slide v-for="(product,index) in relatedProductByCatAndSubCat" :key="index" :name="index+1" :img-src="`http://localhost:3000/images/${product.image_url}`">
                        </q-carousel-slide>
                    </q-carousel>
                </div> -->
<!--                 <div class="col-xs-12 col-sm-11 col-md-9 col-lg-9">
                    <div class= "row">
                        <div v-for="(product, index) in productFilteredList" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-sm q-pa-sm">
                            <card-product v-if="products" :data="product" />
                        </div>
                    </div>
                </div> -->
            </div>
  </q-page>
</template>


<script>
import mapProducts from 'src/mixins/mapProducts'
import mapCart from 'src/mixins/mapCart'
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
        }
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