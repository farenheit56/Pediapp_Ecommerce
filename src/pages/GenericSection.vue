<template>
    <q-page class="q-pa-sm">
            <!----------- Desktop----------->
            <div v-if="$q.screen.gt.xs">                    
                    <div class="col-12 q-pa-none q-ma-none">
                        <section-portrait></section-portrait>
                    </div>
                    <div class="col-12 q-mt-xl q-mb-lg text-h4 text-center">
                            {{selectedInternalSection.title}}
                    </div>
                    <div class="row q-mt-xl q-mb-xl ">
                        <div class="col-2"></div>
                        <div class="col-4 col-md-4 col-sm-5 item-end" style="height:22vw; min-height:400px">
                            <q-img v-if="selectedInternalSection.support_image_url" :src="`https://api.laboutiquedelaflor.com.ar/images/${selectedInternalSection.support_image_url}`" style="width: 100%; height: 100%;" contain>
                            </q-img>
                        </div>
                        <q-space></q-space>
                        <div class="col-4 col-md-4 col-sm-3 text-h6 text-primary justify-center">
                            {{selectedInternalSection.description}}
                        </div>
                        <div class="col-1"></div>
                    </div>            
                    </div>

            <!----- Mobile---- -->
            <div v-if="!$q.screen.gt.xs" class= "row full-width q-pr-sm text-center justify-center">
                    <div class="col-12 q-pa-none q-ma-none">
                        <section-portrait></section-portrait>
                    </div>
                    <div class="col-12 q-mt-lg text-h6 text-center">
                    {{selectedInternalSection.title}}
                    </div>
                    <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                        <div v-if="selectedInternalSection" class="text-h7 q-mt-lg">{{selectedInternalSection.description}}</div>
                    </div>
                    <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                        <q-img v-if="selectedInternalSection.support_image_url" :src="`https://api.laboutiquedelaflor.com.ar/images/${selectedInternalSection.support_image_url}`" class="q-mt-md " style="min-width: 280px;">
                        </q-img>
                    </div>
            </div>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->
  </q-page>
</template>


<script>
import mapInternalSections from 'src/mixins/mapInternalSections'
import SectionPortrait from 'src/components/reusable/sectionPortrait.vue'

export default {
    name: 'GenericSection',
    mixins:[mapInternalSections],
    components:{
        SectionPortrait
    }
}
</script>



        SectionPortrait