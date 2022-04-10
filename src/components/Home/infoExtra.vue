<template>
    <div :style="`height: 100%; width: 100%`">
        <q-img        
        v-if="bannerNumber == 1"   
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.extra_info_image_1_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
        <q-img    
        v-if="bannerNumber == 2"     
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.extra_info_image_2_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
        <q-img    
        v-if="bannerNumber == 3"     
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.extra_info_image_3_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
    </div>  
</template>


<script>
import mapHome from 'src/mixins/mapHome'

export default {
    name:'sectionPortrait',
    props:['bannerNumber'],
    mixins:[mapHome],
    data(){
        return {
            slide:1
        }
    },
}
</script>
