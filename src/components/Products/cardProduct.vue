<template>
    <q-card class="my-card">
            <q-img @click="goToProduct" :ratio="1" :src="`https://admin.pediapp.com.ar/images/${data.image_url}`">
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
                <div @click="goToProduct">
                <span class="text-h6 col-6">$ {{ data.price }}</span>
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

export default {
  name: "CardProduct",
  props: ['data'],
  mixins:[mapCategories,mapInternalSections,mapProducts, mapCart],
  methods:{
      goToProduct(){
          this.SetSelectedProduct(this.data)
          this.$router.push({name:'productScoped', params:{product: this.data.path }})
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
  width: 100%;
  max-width: 300px;
}
</style>
