<template>
<!--     <q-card :style="`height: 100%; width: 100%`">
        <q-carousel-slide v-if="bannerNumber == 1" :name="1" :img-src="`https://api.laboutiquedelaflor.com.ar/images/${home.banner_image_1_url}`" >
        </q-carousel-slide>
        <q-carousel-slide v-if="bannerNumber == 2" :name="1" :img-src="`https://api.laboutiquedelaflor.com.ar/images/${home.banner_image_2_url}`" >
        </q-carousel-slide>
    </q-card> -->
    <div :style="`height: 100%; width: 100%`">
        <q-img        
        v-if="bannerNumber == 1"   
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.banner_image_1_url}`"
        style="width: 100%; height: 100%;"
        href="www.gooogle.com"
        @click="redirectToSocial('https://laboutiquedelaflor.com.ar/productos')"
        />
        <q-img    
        v-if="bannerNumber == 2"     
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.banner_image_2_url}`"
        style="width: 100%; height: 100%;"
        @click="redirectToSocial('https://laboutiquedelaflor.com.ar/productos')"
        />
        <q-img    
        v-if="bannerNumber == 3"     
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.body_banner_image_1_url}`"
        style="width: 100%; height: 100%;"
        @click="redirectToSocial('https://laboutiquedelaflor.com.ar/productos')"
        />
        <q-img    
        v-if="bannerNumber == 4"     
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.body_banner_image_2_url}`"
        style="width: 100%; height: 100%;"
        @click="redirectToSocial('https://laboutiquedelaflor.com.ar/productos')"
        />
    </div>
    

</template>


<script>
import mapHome from 'src/mixins/mapHome'

export default {
    name:'banner',
    props:['bannerNumber'],
    mixins:[mapHome],
    data(){
        return {
            slide:1
        }
    },
    methods:{
        redirectToSocial(link){
            this.$router.push({ redirect: window.location.href = link });
        },
    }
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