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
            arrows
            animated
            control-color="primary"
            infinite
            height="300px"
            >
                <template v-for="(prod,index) in randomProducts">           
                    <q-carousel-slide :key="index" :name="index + 1" >
                        <div class="row fit items-center justify-center no-wrap ">
                            <q-card @click="goToProduct(randomProducts[index])" class="q-pa-none q-ma-none col-12 text-center" :style="'width:230px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index].image_url}`" />  
                                <div class=" q-pa-none q-ma-none">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center q-mt-md">
                                        <div v-if="randomProducts[index].name.length > 50" class="col text-caption text-weight-bold ">
                                            {{ randomProducts[index].name.substring(0,randomProducts[index].name.length -3) + '...' }}
                                        </div>
                                        <div v-if="randomProducts[index].name.length <= 50" class="col text-caption text-weight-bold ">
                                            {{ randomProducts[index].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
<!--                             <q-card @click="goToProduct(randomProducts[index+1])" v-if="randomProducts[index+1]" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index+1].image_url}`" />
                                <div class=" q-pa-none q-ma-none" >
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div class="col text-caption text-weight-bold">
                                            {{ randomProducts[index + 1].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>  -->                           
                        </div>
                    </q-carousel-slide>
                </template>
            </q-carousel>
            </div>

        <div v-if="$q.screen.gt.xs" class="col-12 q-pt-sm q-ml-sm q-pt-none q-mt-none text-primary text-left">
            <q-carousel
            v-if="randomProducts"
            v-model="slide1"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="black"
            arrows
            infinite
            height="25vw"
            >
                <template v-for="(prod,index) in randomProducts" >
                    <q-carousel-slide v-if="validIndex(index)" :key="index" :name="index + 1" >
                        <div v-if="validIndex(index)" class="row fit items-center justify-center no-wrap ">
                            <q-card @click="goToProduct(randomProducts[index])" class="q-pa-none q-ma-none col-3 text-center cursor-pointer" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none "  style="width:90%; height:90%" contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index].image_url}`" />  
                                <div class=" q-pa-none q-ma-none" >
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center q-mt-md">
                                        <div v-if="randomProducts[index].name.length> 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index].name.substring(0,randomProducts[index].name.length-3) +'...' }}
                                        </div>
                                        <div  v-if="randomProducts[index].name.length <= 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(randomProducts[index+1])" v-if="randomProducts[index+1]" class="q-pa-none q-ma-none q-ml-sm col-3 text-center cursor-pointer"  >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " style="width:90%; height:90%" contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index+1].image_url}`" />
                                <div class=" q-pa-none q-ma-none">
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div v-if="randomProducts[index + 1].name.length> 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 1].name.substring(0,randomProducts[index + 1].name.length-3) +'...' }}
                                        </div>
                                        <div  v-if="randomProducts[index + 1].name.length <= 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 1].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(randomProducts[index+2])" v-if="randomProducts[index+2]" class="q-pa-none q-ma-none q-ml-sm  col-3 text-center cursor-pointer"  >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none "  style="width:90%; height:90%" contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index+2].image_url}`" />
                                <div class=" q-pa-none q-ma-none" >
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div v-if="randomProducts[index + 2].name.length> 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 2].name.substring(0,randomProducts[index + 2].name.length-3) +'...' }}
                                        </div>
                                        <div  v-if="randomProducts[index + 2].name.length <= 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 2].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(randomProducts[index+3])" v-if="randomProducts[index+3]" class="q-pa-none q-ma-none q-ml-sm  col-3 text-center cursor-pointer"  >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none "  style="width:90%; height:90%" contain :ratio="1"  :src="`https://api.laboutiquedelaflor.com.ar/images/${randomProducts[index+3].image_url}`" />
                                <div class=" q-pa-none q-ma-none" >
                                    <q-card-section class="q-mt-sm q-pt-none row justify-center  q-mt-md">
                                        <div v-if="randomProducts[index + 3].name.length> 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 3].name.substring(0,randomProducts[index + 3].name.length-3) +'...' }}
                                        </div>
                                        <div  v-if="randomProducts[index + 3].name.length <= 20" class="col  text-weight-bold" :class="$q.screen.gt.md ? 'text-h6':'text-h7'">
                                            {{ randomProducts[index + 3].name }}
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
            this.SetSelectedProductImages(prod)
            this.$router.push({name:'productScoped', params:{product: prod.path }})
        },
        validIndex(index){
            if(index%4 == 0){
                return true
            } else {
                return false
            }
        }   
    }
}
</script>