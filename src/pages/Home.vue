<template>
    <q-page class="q-pa-sm">

            <!----------- Desktop----------->
            <div v-if="$q.screen.gt.xs" >
                <div class="row full-width q-mt-lg"  style="height:44vw"><!-- style="height:30em;width:30em" -->
                    <div class="col-1 ">                        
                    </div>
                    <div class="col-7 ">
                        <div class="row full-width justify-start items-center" style="height:44vw">    
                            <div class="col-11" style="height:100%">
                                <slider-home/>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3 offset"  >
                        <div class="row full-width justify-end items-start" style="height:22vw">
                            <div class=" col-12" style="height:97%">
                                <banner :bannerNumber="1"></banner>
                            </div>
                        </div>
                        <div class="row full-width justify-end items-end" style="height:22vw">
                            <div class="col-12" style="height:97%">
                                <banner :bannerNumber="2"></banner>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-1 ">                        
                    </div>
                </div>
                <div class="row full-width q-mt-lg"  style="height:20vw"><!-- style="height:30em;width:30em" -->
                    <div class="col-1 ">                        
                    </div> 
                    <div class="col-10" style="height:20vw"  >
                        <carrousel></carrousel>
                    </div>
                    <div class="col-1 ">                        
                    </div>
                </div>
                <div class="row full-width"  style="height:7vw"><!-- style="height:30em;width:30em" -->
                    <div class="col-12 ">                        
                    </div> 
                </div>
                <div class="row full-width q-mt-lg"  style="height:22vw">
                    <div class="col-1 ">                        
                    </div>
                    <div class="col-5 ">
                        <div class="row full-width justify-start items-center q-mr-sm" style="height:22vw">    
                            <div class=" col-11 q-mr-sm" style="height:95%">
                                <banner :bannerNumber="3"></banner>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-5">
                        <div class="row full-width justify-end items-center" style="height:22vw">    
                            <div class="col-11 q-ml-sm"  style="height:95%">
                                <banner :bannerNumber="4"></banner>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-1 ">                        
                    </div>
                </div>
                <div class="row full-width justify-center"  style="height:15vw">
                    <div class="col-1 ">                        
                    </div>
                    <div class="col-3 ">
                        <div class="row full-width justify-end items-center q-mr-sm" style="height:15vw">    
                            <div class="col-9 q-mr-sm" style="height:95%">
                                <info-extra :bannerNumber="1"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3 ">
                        <div class="row full-width justify-center items-center" style="height:15vw">    
                            <div class="col-9 q-ml-sm"  style="height:95%">
                                <info-extra :bannerNumber="2"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-3">
                        <div class="row full-width justify-start items-center" style="height:15vw">    
                            <div class=" col-9 q-ml-sm"  style="height:95%">
                                <info-extra :bannerNumber="3"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-1 ">                        
                    </div>
                </div>
            </div>
            <!----------- Mobile----------->
            <div v-if="!$q.screen.gt.xs" >
                <div class="row full-width justify-center ">   
                    <div class="col-12 q-mb-md">
                        <div class="row full-width justify-center items-center" style="height:350px">    
                            <div class="col-12" style="height:95%">
                                <slider-home-mobile></slider-home-mobile>
                            </div>
                        </div>                          
                    </div>
                <div class="col-12"  >
                    <div class="text-center text-h6 q-mt-md"> Productos Destacados</div>
                </div>
                <div class="row full-width q-mt-lg"  style="height:350px"><!-- style="height:30em;width:30em" -->
                    <div class="col-12"  style="height:350px"  >
                        <carrousel></carrousel>
                    </div>
                </div>
                    <div class="col-12 q-mb-lg q-mt-lg">
                        <div class="row full-width justify-center items-center" style="height:300px">
                            <div class=" col-10" style="height:95%">
                                <banner-mobile :bannerNumber="1"></banner-mobile>
                            </div>
                        </div>                      
                    </div>
                    <div class="col-12">
                        <div class="row full-width justify-center items-center" style="height:300px">
                            <div class=" col-10" style="height:95%">
                                <banner-mobile :bannerNumber="2"></banner-mobile>
                            </div>
                        </div>                      
                    </div>
                    <div class="col-12">
                        <div class="row full-width justify-center items-center  q-mb-sm q-mt-md" style="height:200px">
                            <div class=" col-10" style="height:100%">
                                <banner-mobile :bannerNumber="3"></banner-mobile>
                            </div>
                        </div>                      
                    </div>
                    <div class="col-12">
                        <div class="row full-width justify-center items-center" style="height:200px">
                            <div class=" col-10" style="height:100%">
                                <banner-mobile :bannerNumber="4"></banner-mobile>
                            </div>
                        </div>                      
                    </div>
                    <div class="col-12 ">
                        <div class="row full-width justify-end items-center q-mt-sm q-mb-sm" style="height:200px">    
                            <div class="col-11 q-mr-sm" style="height:95%">
                                <info-extra :bannerNumber="1"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-12 ">
                        <div class="row full-width justify-end items-center q-mt-sm q-mb-sm" style="height:200px">    
                            <div class="col-11 q-mr-sm" style="height:95%">
                                <info-extra :bannerNumber="2"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    <div class="col-12 ">
                        <div class="row full-width justify-end items-center q-mt-sm q-mb-sm" style="height:200px">    
                            <div class="col-11 q-mr-sm" style="height:95%">
                                <info-extra :bannerNumber="3"></info-extra>
                            </div>
                        </div>                          
                    </div>
                    
                </div>
            </div>

    </q-page>
</template>

<script>
import SliderHome from 'src/components/home/sliderHome.vue'
import Banner from 'src/components/home/banner.vue'
import InfoExtra from 'src/components/home/infoExtra.vue'
import mapInternalSections from 'src/mixins/mapInternalSections'
import mapHome from 'src/mixins/mapHome'
import mapProducts from 'src/mixins/mapProducts'
import BannerMobile from 'src/components/Home/bannerMobile.vue'

//components
import SliderHomeMobile from 'src/components/Home/sliderHomeMobile.vue'
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
        InfoExtra,
        BannerMobile,
        SliderHomeMobile,
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
