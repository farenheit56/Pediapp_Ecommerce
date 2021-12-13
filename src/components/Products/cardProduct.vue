<template>
    <q-card class="my-card q-mt-md"  @click="goToProductWhenDimmed">
        <q-img @click="goToProduct" :ratio="1" :src="`https://api.pediapp.com.ar/images/${data.image_url}`" contain >
<!--             <q-chip v-if="data.chip" :class="data.chip_class" :color="data.chip_color" :label="data.chip"></q-chip> -->
            <div v-if="!data.stock" class="absolute-top-left q-pa-none q-ml-md q-mt-md text-caption text-h6 bg-grey-5 opacityClass" style="bg-red">
                Sin Stock
            </div>
        </q-img>

<!--         <q-card-section class="q-mt-none q-pt-none ">
            <q-btn
            fab
            color="secondary"
            icon="add_shopping_cart" padding="sm"
            class="absolute"
            style="top: 60; right: 12px; transform: translateY(-180%);"
            @click="addToCart"
            />
        </q-card-section> -->

        <div class="row q-pa-none q-ma-none">
            <q-card-section @click="goToProduct" class="q-mt-none q-pt-none col-12 ">
                    <div class="text-h6">
                    {{ data.name }}
                    </div>
                </q-card-section>
            <q-card-section class="q-mt-none q-pt-none col-12">
                <div @click="goToProduct" class="row justify-between items-end">
                <span class="text-h6">$ {{ parsePrice(data.price) }}</span>
                <q-img width="40px" height="40px" src="icons/cart.png" contain @click.stop="addToCart" :disabled="!data.stock"> </q-img>
                <!-- <span v-if="!data.stock" class="text-h6 text-red-5">Sin Stock</span> -->
                </div>
            </q-card-section>

        </div>

    </q-card>
</template>

<script>
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapProducts from 'src/mixins/mapProducts.js'
import mapCart from 'src/mixins/mapCart.js'
import mapHelpers from 'src/mixins/mapHelpers.js'

export default {
  name: "CardProduct",
  props: ['data'],
  mixins:[mapCategories,mapInternalSections,mapProducts, mapCart,mapHelpers],
  methods:{
      goToProduct(event){
          console.log(event)
          console.log(this.data)
          this.SetSelectedProduct(this.data)
          this.SetSelectedProductImages(this.data)
          this.$router.push({name:'productScoped', params:{product: this.data.path }})
      },
      goToProductWhenDimmed(){
          if(!this.data.stock){
              this.goToProduct()
          }
      },
      addToCart(){
          if(!this.data.stock){
              return
          }
            let cartProductObj= {
                id: this.data.id,
                name: this.data.name,
                description:this.data.description,
                quantitySelected: 1,
                price: this.data.price,
                image_url: this.data.image_url
            }
            this.PushCartProduct(cartProductObj)         
            this.$emit('openCartDrawerFromPage')
      }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
    position:relative;
    width: 100%;
     max-width: 300px;
}
.opacityClass {
    opacity:0.7
}

.my-img{
    position:relative;
    top: 0;
    bottom: 0;
    left:0;
    right:0;
    background-size: cover;
    background-position: 50% 50%;
    background-color: rgb(0, 0, 0, 0.9);
}
//:class="`${!data.stock ? 'light-dimmed' : ''}` "
</style>
