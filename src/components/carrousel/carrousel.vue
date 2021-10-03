<template>
    <div>
        <!-- Mobile Carrousel (Todos los productos) -->
        <div v-if="!$q.screen.gt.xs" class="col-12 q-pt-sm q-ml-sm q-pt-none q-mt-none text-primary text-left">
            <q-carousel
            v-model="slide1"
            v-if="products"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            infinite
            height="220px"
            class="rounded-borders q-mt-md"
            >
                <template v-for="(prod,index) in products">           
                    <q-carousel-slide :key="index" :name="index + 1" >
                        <div class="row fit items-center justify-center q-gutter-xs q-col-gutter no-wrap ">
                            <q-card @click="goToProduct(products[index])" class="q-pa-none q-ma-none q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index].image_url}`" />  
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center q-mt-md">
                                        <div class="col text-caption text-weight-bold ">
                                            {{ products[index].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(products[index+1])" v-if="products[index+1]" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index+1].image_url}`" />
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div class="col text-caption text-weight-bold">
                                            {{ products[index + 1].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>                            
                        </div>
                    </q-carousel-slide>
                </template>
            </q-carousel>
            </div>

        <div v-if="$q.screen.gt.xs" class="col-12 q-pt-sm q-ml-sm q-pt-none q-mt-none text-primary text-left">
            <q-carousel
            v-if="products"
            v-model="slide1"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            infinite
            height="220px"
            class="rounded-borders q-mt-md"
            >
                <template v-for="(prod,index) in products" >
                    <q-carousel-slide v-if="validIndex(index)" :key="index" :name="index + 1" >
                        <div v-if="validIndex(index)" class="row fit items-center justify-center q-gutter-xs q-col-gutter no-wrap ">
                            <q-card @click="goToProduct(products[index])" class="q-pa-none q-ma-none q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index].image_url}`" />  
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center q-mt-md">
                                        <div class="col text-caption text-weight-bold ">
                                            {{ products[index].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(products[index+1])" v-if="products[index+1]" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index+1].image_url}`" />
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div class="col text-caption text-weight-bold">
                                            {{ products[index + 1].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(products[index+2])" v-if="products[index+2]" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index+2].image_url}`" />
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div class="col text-caption text-weight-bold">
                                            {{ products[index + 2].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(products[index+3])" v-if="products[index+3]" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index+3].image_url}`" />
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div class="col text-caption text-weight-bold">
                                            {{ products[index + 3].name }}
                                        </div>
                                    </q-card-section>
                                </div>
                            </q-card>                                            
                        </div>
                    </q-carousel-slide>
                </template>
            </q-carousel>
            </div>
    </div>
    
</template>


<script>
import mapProducts from "src/mixins/mapProducts.js"
export default {
    name:"carrousel",
    mixins:[mapProducts],
    data(){
        return {
            slide1: 1,
            slide2: 1
        }
    },
    methods:{
        goToProduct(prod){
            this.SetSelectedProduct(prod)
            this.$router.push({name:'productScoped', params:{product: prod.path }})
        },
        validIndex(index){
            console.log(index, 'este es el index')
            if(index%4 == 0){
                console.log(index)
                console.log(this.products)
                return true
            } else {
                return false
            }
        }   
    }
}
</script>