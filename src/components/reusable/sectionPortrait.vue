<template>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinit
      height="250px"
    >

        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" >
            <div class="absolute-bottom custom-caption">
            <div class="text-h6">{{sectionName}}</div>
            <div class="text-h8">{{`${scopedCategory[0]} - ${scopedCategory[1]}`}}</div>
        </div>
        </q-carousel-slide>
        <!-- to add more slides -->
        <!--       <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/mountains.jpg" /> -->

    </q-carousel>
</template>


<script>
export default {
    name:'sectionPortrait',
    data(){
        return {
            slide:1
        }
    },
    props:['sectionName', 'scopedCategory']
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