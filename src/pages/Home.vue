<template>
    <q-page class="q-pa-sm">
        <div class= "row full-width q-pr-sm text-center" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
            <div class="col-12 q-pa-none q-ma-none">
                <generic-portrait/>
            </div>

            <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                <!-- Add WhiteSpace When Screen is Medium or Large -->
            </div>
            <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                <div v-if="selectedInternalSection" class="text-h7 q-mt-lg">{{selectedInternalSection.description}}</div>
            </div>
            <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                <q-img v-if="selectedInternalSection.support_image_url" :src="`https://admin.pediapp.com.ar/images/${selectedInternalSection.support_image_url}`" class="q-mt-md " style="max-width: 400px; height: 80px;" contain>
                </q-img>
            </div>
            <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                <!-- Add WhiteSpace When Screen is Medium or Large -->
            </div>
            
            <!-- Mobile carrousel -->
            <div class="col-12 q-mt-lg text-h6 text-primary">
                Productos Destacados
            </div>      
            <div v-if="$q.screen.lt.md" class="col-12 q-pt-sm q-ml-sm q-pt-none q-mt-none text-primary text-left">
                <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                infinite
                height="220px"
                class="rounded-borders q-mt-md"
                >
                    <q-carousel-slide v-for="(prod,index) in products" :key="index" :name="index + 1" >
                        <div class="row fit items-center justify-center q-gutter-xs q-col-gutter no-wrap ">
                            <q-card @click="goToProduct(products[index])" class="q-pa-none q-ma-none q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index].image_url}`" />  
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row ">
                                        <div class="text-caption">
                                            {{ products[index].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>
                            <q-card @click="goToProduct(products[index+1])" v-if="index + 1 < products.length" class="q-pa-none q-ma-none q-ml-sm q-mt-sm col-6 text-center" :style="'width:120px'" >
                                    <q-img class="rounded-borders full-height q-pa-none q-ma-none " :ratio="1"  :src="`https://admin.pediapp.com.ar/images/${products[index+1].image_url}`" />  
                                <div class=" q-pa-none q-ma-none" :style="'height:70px'">
                                    <q-card-section class="q-mt-sm q-pt-none row">
                                        <div class="text-caption">
                                          {{ products[index + 1].name }}
                                        </div>
                                    </q-card-section>
                                </div>  
                            </q-card>                            
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
    </q-page>
</template>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->

<script>
import GenericPortrait from '../components/reusable/genericPortrait.vue'
import mapInternalSections from 'src/mixins/mapInternalSections'
import mapProducts from 'src/mixins/mapProducts'

export default {
    name: 'GenericSection',
    mixins:[mapInternalSections, mapProducts],
    data(){
        return {
            slide: 1
        }
    },
    components:{
        GenericPortrait
    },
    methods:{
        goToProduct(prod){
          this.SetSelectedProduct(prod)
          this.$router.push({name:'productScoped', params:{product: prod.path }})
        },
    }
}
</script>


