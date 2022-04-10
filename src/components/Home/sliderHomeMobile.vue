<template>
    <div  :style="`height: 100%; width: 100%;` ">
        <q-img        
        :src="`https://api.laboutiquedelaflor.com.ar/images/${home.slider_url}`"
        style="width: 100%; height: 100%"
        @click="redirectToSocial('https://laboutiquedelaflor.com.ar/productos')"
        contain
        />
    </div>    
</template>


<script>
import mapInternalSections from 'src/mixins/mapInternalSections'
import mapHome from 'src/mixins/mapHome'

export default {
    name:'sliderHomeMobile',
    mixins:[mapInternalSections,mapHome],
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
                        <!-- <div class="text-h7">{{home.description}}</div> PARA AGREGAR DESCRIPCION QUE VIENE DEL ADMIN-->