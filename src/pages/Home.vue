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
            <carrousel></carrousel>

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

//components
import Carrousel from 'src/components/carrousel/carrousel.vue'

export default {
    name: 'GenericSection',
    mixins:[mapInternalSections, mapProducts],
    data(){
        return {
            slide: 1
        }
    },
    components:{
        GenericPortrait,
        Carrousel
    },
    methods:{
        goToProduct(prod){
          this.SetSelectedProduct(prod)
          this.$router.push({name:'productScoped', params:{product: prod.path }})
        },
    }
}
</script>


