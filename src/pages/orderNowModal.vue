<template>
    <q-dialog
      position="top"
      v-model="showModal"
      :full-width="$q.screen.gt.xs ? true: false"
      :style="{maxHeight: '300px'}"
    >
        <q-card class="bg-grey-1 justify-end " >
            <q-card-section class="text-center text-h6 text-primary bg-grey-2" style="box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.05)">
                <q-icon name="shopping_cart" class="q-mr-sm q-mb-xs"/>
                Tu pedido
            </q-card-section>
                <div v-if="product" class="q-pa-none q-ma-none">
                    <q-card-section horizontal class="q-pa-none text-center">
                        <q-card-section class="col-3 flex flex-center q-pa-sm">
                            <q-img  
                                class="rounded-borders"
                                :src="`https://api.pediapp.com.ar/images/${product.image_url}`"
                                :ratio="1"
                                contain                            
                            />
                        </q-card-section>
                        <q-card-section class="col-6 text-center q-pl-none q-pr-none flex flex-center">
                            <div v-if="!$q.screen.gt.xs" class="text-caption">{{product.name}}<br>x{{product.quantitySelected}}</div>
                            <div v-if="$q.screen.gt.xs" class="text-h6">{{product.name}}<br>x{{product.quantitySelected}}</div>
<!--                             <div  class="row full-width">
                                <q-space></q-space>
                                <div class="col-5 text-center" ref="quantityButon">
                                    <div class="row justify-center">
                                        <div class="col-3 q-mt-sm text-weight-light" > x{{product.quantitySelected}}</div>                                
                                    </div>
                                </div>
                                <q-space></q-space>
                            </div>   -->                                      
                        </q-card-section>
                        <q-card-section class="col-3 flex flex-center">
                            <div v-if="!$q.screen.gt.xs" class="text-caption q-mb-xs">${{product.price * product.quantitySelected}}</div>
                            <div v-if="$q.screen.gt.xs" class="text-h6 q-mb-xs">${{product.price * product.quantitySelected}}</div>
                        </q-card-section>
                    </q-card-section>
                    <q-separator/>
                </div>
        </q-card>
    </q-dialog>
</template>

<script>

export default {
    name:'modalOrderNow',
    data(){
        return{
            showModal: false,
            product: null
        }
    },
    methods:{
        showOrderNowModal(product){     
            this.product = product
            this.showModal = true
        },
    },

}
</script>
