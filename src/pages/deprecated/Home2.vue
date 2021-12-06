<template>
    <q-page class="q-pa-sm">

            <!----------- Desktop----------->
            <div v-if="$q.screen.gt.xs" class= "row full-width q-pr-sm text-center justify-center">
                    <div class="col-7 q-pa-none q-ma-none full-height"  >
                        <div class="row" style="height: 40em;width:40em ">
                            <div class="col-12 text-center">
                                <slider-home/>
                            </div>
                        </div>
                    </div>  
                    <q-space></q-space>
                    <div class="col-5 full-height">
                        <div class="row">
                            <div class="col-12">
                                <banner :bannerNumber="1"></banner>
                            </div>
                            <div class="col-12">
                                <banner :bannerNumber="2"></banner>
                            </div>
                        </div>
                    </div>
                        
                    <div class="col q-pl-none whiteSpace-grid">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                    <!-- Desktop carrousel -->
                    <div class="col-12 q-mt-lg text-h6 text-primary">
                        Productos Destacados
                    </div>
                    <carrousel></carrousel>

                    <!-- Imagen Soporte, Si la quieren, esta. Pero no tengo relevado donde ponerla -->
                    <div class="col-9 q-pt-sm q-mt-md q-ml-sm text-primary">
                        <div class="row" style="height: 150px">
                            <div class="col-12">
                                <q-card class="q-ml-sm" :style="`height: 99%; width: 98%`">
                                    <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${home.support_image_url}`" contain >
                                    </q-carousel-slide>
                                </q-card>
                            </div>
                        </div>
                    </div>
        </div>
        <!----------- Mobile----------->
        <div v-if="!$q.screen.gt.xs" class= "row full-width q-pr-sm text-center justify-center">
            <div class="col-12 q-pa-none q-ma-none"  >
                <div class="row" style="height: 350px">
                    <div class="col-12">
                        <slider-home/>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row q-mt-sm" style="height: 350px">
                    <div class="col-6">
                        <banner :bannerNumber="1"></banner>
                    </div>
                    <div class="col-6">
                        <banner :bannerNumber="2"></banner>
                    </div>
                </div>
                
            </div>
            <div class="col q-pl-none whiteSpace-grid">
                <!-- Add WhiteSpace When Screen is Medium or Large -->
            </div>
            <!-- Desktop carrousel -->
            <div class="col-12 q-mt-lg text-h6 text-primary">
                Productos Destacados
            </div>
            <carrousel></carrousel>

            <!-- Imagen Soporte, Si la quieren, esta. Pero no tengo relevado donde ponerla -->
            <div class="col-9 q-pt-sm q-mt-md q-ml-sm text-primary">
                <div class="row" style="height: 150px">
                    <div class="col-12">
                        <q-card class="q-ml-sm" :style="`height: 99%; width: 98%`">
                            <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${home.support_image_url}`" contain >
                            </q-carousel-slide>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->

<script>
import SliderHome from 'src/components/home/sliderHome.vue'
import Banner from 'src/components/home/banner.vue'
import mapInternalSections from 'src/mixins/mapInternalSections'
import mapHome from 'src/mixins/mapHome'
import mapProducts from 'src/mixins/mapProducts'

//components
import Carrousel from 'src/components/carrousel/carrousel.vue'

export default {
    name: 'GenericSection',
    mixins:[mapInternalSections, mapProducts, mapHome],
    data(){
        return {
            slide: 1
        }
    },
    components:{
        Carrousel,
        SliderHome,
        Banner
    },
    methods:{
        goToProduct(prod){
          this.SetSelectedProduct(prod)
          this.SetSelectedProductImages(prod)
          this.$router.push({name:'productScoped', params:{product: prod.path }})
        },
    }
}
</script>


