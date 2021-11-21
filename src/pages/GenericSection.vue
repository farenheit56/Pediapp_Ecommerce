<template>
    <q-page class="q-pa-sm">
            <!----------- Desktop----------->
            <div v-if="$q.screen.gt.xs" class= "row full-width q-pr-sm text-center justify-center">
                    <div class="col-12 q-pa-none q-ma-none">
                        <generic-portrait/>
                    </div>
                    <div class="col whiteSpace-grid">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                    <div class="row">
                        <q-space></q-space>
                        <div class="col-8 q-pt-sm q-ml-sm text-primary">
                            <div v-if="selectedInternalSection" class="text-h7 text-primary q-mt-lg">{{selectedInternalSection.description}}</div>
                        </div>
                        <q-space></q-space>
                    </div>

                        <div class="col-12 q-pt-sm q-mt-md q-ml-sm text-primary">
                            <q-img v-if="selectedInternalSection.support_image_url" :src="`https://api.pediapp.com.ar/images/${selectedInternalSection.support_image_url}`" class="q-mt-md  shadow-1" style="max-width: 400px;" contain>
                            </q-img>
                        </div>
                        
                    <div class="col q-pl-none whiteSpace-grid">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
            </div>

            <!----- Mobile---- -->
            <div v-if="!$q.screen.gt.xs" class= "row full-width q-pr-sm text-center justify-center">
                    <div class="col-12 q-pa-none q-ma-none">
                        <generic-portrait/>
                    </div>
                    <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                        <div v-if="selectedInternalSection" class="text-h7 q-mt-lg">{{selectedInternalSection.description}}</div>
                    </div>
                    <div class="col-12 q-pt-sm q-ml-sm text-primary text-left">
                        <q-img v-if="selectedInternalSection.support_image_url" :src="`https://api.pediapp.com.ar/images/${selectedInternalSection.support_image_url}`" class="q-mt-md " style="max-width: 400px; height: 80px;" contain>
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
import GenericPortrait from '../components/reusable/genericPortrait.vue'
import mapInternalSections from 'src/mixins/mapInternalSections'

export default {
    name: 'GenericSection',
    mixins:[mapInternalSections],
    components:{
        GenericPortrait
    }
}
</script>


