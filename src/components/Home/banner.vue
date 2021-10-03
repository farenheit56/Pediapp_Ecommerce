<template>
    <q-card class="q-ml-sm" :style="`height: 99%; width: 97%`">
        <q-carousel-slide v-if="bannerNumber == 1" :name="1" :img-src="`https://admin.pediapp.com.ar/images/${home.banner_image_1_url}`" >
        </q-carousel-slide>
        <q-carousel-slide v-if="bannerNumber == 2" :name="1" :img-src="`https://admin.pediapp.com.ar/images/${home.banner_image_2_url}`" >
        </q-carousel-slide>
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