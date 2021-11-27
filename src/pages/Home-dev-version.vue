<template>
    <q-page class="q-pa-sm">

            <!----------- Desktop----------->
            <div v-if="$q.screen.gt.xs" >
                <div class="row bg-red full-width "  style="height:44vw"><!-- style="height:30em;width:30em" -->
                    <div class="col-1  bg-white">                        
                    </div>
                    <div class="col-7  bg-blue">
                        <div class="row full-width justify-center items-center" style="height:44vw">    
                            <div class="bg-grey col-10" style="height:95%">
                                <slider-home/>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3  bg-orange"  >
                        <div class="row full-width justify-center items-center" style="height:22vw">
                            <div class="bg-grey col-10" style="height:90%">
                                <banner :bannerNumber="1"></banner>
                            </div>
                        </div>
                        <div class="row full-width justify-center items-center" style="height:22vw">
                            <div class="bg-grey col-10" style="height:90%">
                                <banner :bannerNumber="2"></banner>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-1  bg-white">                        
                    </div>
                </div>
                <q-separator></q-separator>
                <div class="row bg-red full-width"  style="height:22vw">
                    <div class="col-1  bg-white">                        
                    </div>
                    <div class="col-5  bg-blue">
                        <div class="row full-width justify-end items-center q-mr-sm" style="height:22vw">    
                            <div class="bg-grey col-9 q-mr-sm" style="height:95%">
                                <banner :bannerNumber="3"></banner>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-5 bg-blue">
                        <div class="row full-width justify-start items-center" style="height:22vw">    
                            <div class="bg-grey col-9 q-ml-sm"  style="height:95%">
                                <banner :bannerNumber="4"></banner>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-1  bg-white">                        
                    </div>
                </div>
                <q-separator></q-separator>
                <div class="row bg-red full-width justify-center"  style="height:15vw">
                    <div class="col-1  bg-white">                        
                    </div>
                    <div class="col-3  bg-blue">
                        <div class="row full-width justify-end items-center q-mr-sm" style="height:15vw">    
                            <div class="bg-grey col-9 q-mr-sm" style="height:95%">
                                <info-extra :bannerNumber="1"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3 bg-blue">
                        <div class="row full-width justify-center items-center" style="height:15vw">    
                            <div class="bg-grey col-9 q-ml-sm"  style="height:95%">
                                <info-extra :bannerNumber="2"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3 bg-blue">
                        <div class="row full-width justify-start items-center" style="height:15vw">    
                            <div class="bg-grey col-9 q-ml-sm"  style="height:95%">
                                <info-extra :bannerNumber="3"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-1  bg-white">                        
                    </div>
                </div>

            <!-- Imagen Soporte, Si la quieren, esta. Pero no tengo relevado donde ponerla -->
<!--             <div class="col-9 q-pt-sm q-mt-md q-ml-sm text-primary">
                <div class="row" style="height: 150px">
                    <div class="col-12">
                        <q-card class="q-ml-sm" :style="`height: 99%; width: 98%`">
                            <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${home.support_image_url}`" contain >
                            </q-carousel-slide>
                        </q-card>
                    </div>
                </div>
            </div> -->
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
import InfoExtra from 'src/components/home/infoExtra.vue'
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
        Banner,
        InfoExtra
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


