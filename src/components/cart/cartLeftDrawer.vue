<template>
    <q-drawer show-if-above side="right" :width="250" :value="value" @input="$emit('input', $event)">
            <div style="max-width: 350px; height:100%">
                <q-card class="bg-grey-1 justify-end " style="max-width: 350px; height:100%">
                    <q-card-section class="text-center text-h6 text-black bg-grey-2" style="box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.05)">
                        <q-icon name="shopping_cart" class="q-mr-sm"/>
                        Resumen
                    </q-card-section>
                    <q-scroll-area style="height:70%">
                        <div v-for="(product,index) in cartProducts" :key="index" class="q-pa-none q-ma-none">
                            <q-card-section horizontal class="q-pa-none text-center">
                                <q-card-section class="col-3 flex flex-center q-pa-sm">
                                    <q-img  
                                        class="rounded-borders"
                                        :src="`http://localhost:3000/images/${product.image_url}`"
                                        :ratio="1"                            
                                    />
                                </q-card-section>
                                <q-card-section class="col-5 flex flex-center">
                                    <div class="text-caption">{{product.name}}</div>
                                    <div class="q-pa-none q-ma-none row item-start" style="max-height:15px">
                                        <q-btn flat class="col-4 items-center" :style="{maxHeight:'20px', fontSize:'10px'}" icon="remove" round/>
                                        <q-input :value="product.quantitySelected" class="q-pa-none q-ma-none col-4 items-center" readonly borderless :input-style="{maxHeight:'20px'}" />
                                        <q-btn flat class="col-4 items-center justify-start" :style="{maxHeight:'20px', fontSize:'10px'}" icon="add" round/>
                                    </div>                               
                                </q-card-section>
                                <q-card-section class="col-4 flex flex-center">
                                    <q-btn icon="delete" flat round color="red" @click="DeleteProduct(product)" />
                                    <div class="text-caption q-mb-xs">${{product.partialPrice}}</div>
                                </q-card-section>
                            </q-card-section>
                            <q-separator/>
                        </div>
                    </q-scroll-area>
                    <q-card-actions >                        
                        <div class="text-h6 text-center" style="position: absolute; bottom:10px; width:96%">
                            <q-separator color="secondary" class="q-mb-sm "/>
                            <div class="q-mb-md">
                                Total : <span class="text-secondary">${{GetCartProductsTotalPrice()}}</span>
                            </div>
                            <q-separator color="secondary" class="q-mb-xs"/>
                            <div class="row justify-center">
                            <q-btn color="secondary" icon-right="shopping_cart" class=" shadow-2" label="INICIAR COMPRA" />
                            </div>
                        </div>
                    </q-card-actions>
                </q-card>
<!--                 <div class="text-h6">
                    <div class="q-mr-md">
                        Total : <span class="text-blue">${{GetCartProductsTotalPrice()}}</span>
                    </div>
                </div> -->
            </div>
 
    </q-drawer>
</template>

<script>

//Store Modules
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapCart from 'src/mixins/mapCart'

export default {
    name: 'homeLeftDrawer',
    mixins:[mapInternalSections, mapCart],
    methods: {
        redirectToSection(section){
            this.SetSelectedInternalSection(section)
            this.$router.push({ name: section.path })
        }
    },
    props:{
        value:Boolean
    },

}
</script>