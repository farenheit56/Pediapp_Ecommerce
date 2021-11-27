<template>
    <q-card class="my-card"  @click="goToProductWhenDimmed">
                <q-img @click="goToProduct" :ratio="1" :src="`https://api.pediapp.com.ar/images/${data.image_url}`" contain >
                    <q-chip v-if="data.chip" :class="data.chip_class" :color="data.chip_color" :label="data.chip"></q-chip>
                </q-img>

            <q-card-section class="q-mt-none q-pt-none ">
                <q-btn
                fab
                color="secondary"
                icon="add_shopping_cart" padding="sm"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-180%);"
                @click="addToCart"
                />
            </q-card-section>
        
        <div class="row q-pa-none q-ma-none">
            <q-card-section @click="goToProduct" class="q-mt-none q-pt-none col-12 ">
                    <div class="text-h6">
                    {{ data.name }}
                    </div>
                </q-card-section>
            <q-card-section class="q-mt-none q-pt-none col-12">
                <div @click="goToProduct" class="row justify-between">
                <span class="text-h6 ">$ {{ parsePrice(data.price) }}</span>
                <span v-if="!data.stock" class="text-h6 text-red-5">Sin Stock</span>
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
      goToProduct(){
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
            let cartProductObj= {
                id: this.data.id,
                name: this.data.name,
                description:this.data.description,
                quantitySelected: 1,
                price: this.data.price,
                image_url: this.data.image_url
            }
            console.log(cartProductObj)
            this.PushCartProduct(cartProductObj)
            console.log(this.cartProducts)            
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
