<template>
    <q-drawer auto-close overlay side="right" :width="280" :value="value" @input="$emit('input', $event) ">
            <div style="max-width: 350px; height:100%">
                <q-card class="bg-grey-1 justify-end " style="max-width: 350px; height:100%">
                    <q-card-section class="text-center text-h6 text-primary bg-grey-2" style="box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.05)">
                        <q-icon name="shopping_cart" class="q-mr-sm q-mb-xs"/>
                        Tu pedido
                    </q-card-section>
                    <q-scroll-area style="height:70%">
                        <div v-for="(product,index) in cartProducts" :key="index" class="q-pa-none q-ma-none">
                            <q-card-section horizontal class="q-pa-none text-center">
                                <q-card-section class="col-3 flex flex-center q-pa-sm">
                                    <q-img  
                                        class="rounded-borders"
                                        :src="`https://api.pediapp.com.ar/images/${product.image_url}`"
                                        :ratio="1"                            
                                    />
                                </q-card-section>
                                <q-card-section class="col-6 text-center q-pl-none q-pr-none">
                                    <div class="text-caption">{{product.name}}</div>
<!--                                     <div v-show="$route.name != 'cartCheckout'" class="q-pa-none q-ma-none row justify-center item-start" style="max-height:15px">
                                        <q-btn flat class="col-4 items-center" :style="{maxHeight:'20px', fontSize:'10px'}" icon="remove" round @click="product.quantitySelected = product.quantitySelected -1"/>
                                        <q-input :value="product.quantitySelected" class="q-pa-none q-ma-none col-4 items-center" readonly borderless dense :input-style="{maxHeight:'5px',minHeight:'5px'}" />
                                        <q-btn flat class="col-4 items-center justify-start" :style="{maxHeight:'20px', fontSize:'10px'}" icon="add" round @click="product.quantitySelected = product.quantitySelected + 1"/>
                                    </div> -->
                                    <div v-show="$route.name != 'cartCheckout'" class="row full-width q-pl-sm q-pr-sm q-mt-sm">
                                        <div class="col-12 divBorder shadow-1" ref="quantityButon">
                                            <div class="row rowInherit ">
                                                <q-btn  outlined size="4px" class="col-3 text-center btnBorder" icon="remove" @click="RemoveOneQuantitySelected(product)" > </q-btn>                                
                                                <div class="col-6 text-center q-mt-xs text-weight-light" > {{product.quantitySelected}} </div>
                                                <q-btn  outlined size="4px" class="col-3 text-center btnBorder" icon="add" @click="AddOneQuantitySelected(product)" >  </q-btn>                                
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="$route.name == 'cartCheckout'" class="row full-width">
                                        <q-space></q-space>
                                        <div class="col-5 text-center" ref="quantityButon">
                                            <div class="row justify-center">
                                                <div class="col-3 q-mt-sm text-weight-light" > x{{product.quantitySelected}}</div>                                
                                            </div>
                                        </div>
                                        <q-space></q-space>
                                    </div>                                        
                                </q-card-section>
                                <q-card-section class="col-3 flex flex-center">
                                    <q-btn icon="delete" v-show="$route.name != 'cartCheckout'" flat round color="primary" @click="DeleteProduct(product)" />
                                    <div class="text-caption q-mb-xs">${{parsePrice(product.partialPrice)}}</div>
                                </q-card-section>
                            </q-card-section>
                            <q-separator/>
                        </div>
                    </q-scroll-area>
                    <q-card-actions >                        
                        <div class="text-h6 text-center" style="position: absolute; bottom:10px; width:96%">
                            <q-separator color="positive" class="q-mb-sm "/>
                            <div class="q-mb-md">
                                Total : <span class="text-green-10">${{parsePrice(GetCartProductsTotalPrice())}}</span>
                            </div>
                            <q-separator color="positive" class="q-mb-xs"/>
                            <div v-show="$route.name != 'cartCheckout' && cartProducts.length != 0" class="row justify-center">
                                <q-btn color="positive" class=" shadow-2" @click="goToCheckoutAndPay" no-caps style="min-width:100px">
                                    <div class="q-mr-sm">{{`¡Pedí ya!`}}</div>
                                    <img src="icons/cart.png" style="height:35px">
                                </q-btn>
                            </div>
                        </div>
                    </q-card-actions>
                </q-card>
            </div>
 
    </q-drawer>
</template>

<script>

//Store Modules
import mapCart from 'src/mixins/mapCart'
import mapHelpers from 'src/mixins/mapHelpers'

export default {
    name: 'homeLeftDrawer',

    mixins:[mapCart,mapHelpers],
    methods:{
        goToCheckoutAndPay(){
            this.$router.push({name:'cartCheckout'})
        }
    },
    props:{
        value:Boolean
    },

}
</script>


<style lang="scss" scoped>

.divBorder{

    height: 30px;
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



</style>