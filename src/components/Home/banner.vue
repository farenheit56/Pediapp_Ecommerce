<template>
<!--     <q-card :style="`height: 100%; width: 100%`">
        <q-carousel-slide v-if="bannerNumber == 1" :name="1" :img-src="`https://admin.pediapp.com.ar/images/${home.banner_image_1_url}`" >
        </q-carousel-slide>
        <q-carousel-slide v-if="bannerNumber == 2" :name="1" :img-src="`https://admin.pediapp.com.ar/images/${home.banner_image_2_url}`" >
        </q-carousel-slide>
    </q-card> -->
    <q-card  :style="`height: 100%; width: 100%`">
        <q-img        
        v-if="bannerNumber == 1"   
        :src="`https://admin.pediapp.com.ar/images/${home.banner_image_1_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
        <q-img    
        v-if="bannerNumber == 2"     
        :src="`https://admin.pediapp.com.ar/images/${home.banner_image_2_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
        <q-img    
        v-if="bannerNumber == 3"     
        :src="`https://admin.pediapp.com.ar/images/${home.support_image_url}`"
        style="width: 100%; height: 100%;"
        contain
        />
    </q-card>
    

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

<style lang="scss" scoped>
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  }
</style>



        <!-- to add more slides -->
        <!--       <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/mountains.jpg" /> -->