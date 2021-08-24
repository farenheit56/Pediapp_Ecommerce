<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <div class="col-12 text-center">
                    <div v-if="selectedProduct" class="text-h5">{{selectedProduct.name}}</div>
                </div>
                <div class="col-12 q-pt-md">
                    <q-img v-if="selectedProduct" :src="`http://localhost:3000/images/${selectedProduct.image_url}`">
                    </q-img>
                </div>
                <div class="col-12 text-center q-pt-md">
                    <div v-if="selectedProduct" class="text-h5">$ {{selectedProduct.price}}</div>
                </div>
                
                <div class="col-12">
                    <div class="row items-center">
                        <q-input class="col-3 q-ma-sm q-pt-sm q-ml-lg" type= "number" v-model="quantity" filled />
                        <q-space></q-space>
                        <div class="col-7 q-ma-sm q-pt-sm" ref="quantityButon">
                            <q-btn color="secondary" icon-right="add_shopping_cart" @click="addToCart" label="Agregar" />
                        </div>
                    </div>
                </div>
                <div class="col-12 q-pa-md">
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
                </div>
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