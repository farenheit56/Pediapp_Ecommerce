<template>
    <q-breadcrumbs>
      <q-breadcrumbs-el @click="goToProducts" label="Productos" />
      <q-breadcrumbs-el v-if="selectedCategory && !selectedSubCategory" :label="selectedCategory.name" ></q-breadcrumbs-el>
      <q-breadcrumbs-el v-if="selectedSubCategory" @click="goToCategory" :label="selectedCategoryTrunqued" />
      <q-breadcrumbs-el v-if="selectedSubCategory" :label="selectedSubCategoryTrunqued" />
        <q-breadcrumbs-el v-if="selectedProduct && fromProductScoped" :label="selectedProduct.name" />
    </q-breadcrumbs>
</template>

<script>
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'
import mapProducts from 'src/mixins/mapProducts.js'
export default {
    name:'categoriesTagas',
    props:['fromProductScoped'],
    data(){
        return {
            dummy:null
        }
    },
    mixins:[mapCategories, mapInternalSections,mapProducts],
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