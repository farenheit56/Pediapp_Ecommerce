<template>
    <div :style="`height: 100%; width: 100%`">
        <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${home.slider_url}`" >
            <div class="q-ma-md absolute-top-left">
                <!-- <div class="text-h7">{{home.description}}</div> PARA AGREGAR DESCRIPCION QUE VIENE DEL ADMIN-->
            </div>
        </q-carousel-slide>
    </div>
    
</template>


<script>
import mapInternalSections from 'src/mixins/mapInternalSections'
import mapHome from 'src/mixins/mapHome'

export default {
    name:'sectionPortrait',
    mixins:[mapInternalSections,mapHome],
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