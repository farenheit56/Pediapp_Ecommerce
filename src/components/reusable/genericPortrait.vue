<template>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinit
      height="250px"
    >

        <q-carousel-slide :name="1" :img-src="`https://admin.pediapp.com.ar/images/${selectedInternalSection.slider_url}`" >
            <div class="absolute-bottom custom-caption">
            <div class="text-h7">{{selectedInternalSection.title}}</div>
        </div>
        </q-carousel-slide>
        <!-- to add more slides -->
        <!--       <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/mountains.jpg" /> -->

    </q-carousel>
    
</template>


<script>
import mapInternalSections from 'src/mixins/mapInternalSections'

export default {
    name:'sectionPortrait',
    mixins:[mapInternalSections],
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