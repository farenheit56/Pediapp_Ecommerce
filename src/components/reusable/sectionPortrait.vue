<template>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinit
      height="250px"
    >

        <q-carousel-slide :name="1" :img-src="`https://api.pediapp.com.ar/images/${selectedInternalSection && selectedInternalSection.slider_url}`">
            <div class="absolute-bottom custom-caption">
            <div class="text-h8" @click="goToProducts">Productos</div>
            <div class="text-h8" v-if="selectedCategory && !selectedSubCategory">
                <div class="q-pa-none q-ma-none">{{selectedCategory.name}}</div>
            </div>
            <div class="text-h8" v-if="selectedSubCategory">
                <div class="q-pa-none q-ma-none" @click="goToCategory">{{selectedCategoryTrunqued}}</div>
                <div class="q-pa-none q-ma-none">{{selectedSubCategoryTrunqued}}</div>
            </div>
        </div>
        </q-carousel-slide>
        <!-- to add more slides -->
        <!--       <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/mountains.jpg" /> -->

    </q-carousel>
</template>


<script>
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
export default {
    name:'sectionPortrait',
    data(){
        return {
            slide:1
        }
    },
    mixins:[mapCategories, mapInternalSections],
    methods:{
        goToProducts(){
            this.SetSelectedCategory(null)
            this.SetSelectedSubCategory(null)
            this.$router.push({name: 'productos'})
        },
        goToCategory(){
            this.SetSelectedSubCategory(null)
            this.$router.push({name: 'productsByCategory', params:{ category: this.selectedCategory.path}})
        }
    },
    computed:{
        selectedCategoryTrunqued(){
            if(this.selectedCategory && this.selectedCategory.name && this.selectedCategory.name.length > 30){
                return this.selectedCategory.name.substring(0, 29) + '...'
            }else {
                return this.selectedCategory.name
            }
        },
        selectedSubCategoryTrunqued(){
            if(this.selectedSubCategory &&this.selectedSubCategory.name && this.selectedSubCategory.name.length > 30){
                return this.selectedSubCategory.name.substring(0, 29) + '...'
            }else {
                return this.selectedSubCategory.name
            }
        }
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