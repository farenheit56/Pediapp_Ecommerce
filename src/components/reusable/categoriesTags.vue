<template>
    <q-breadcrumbs>
        <!-- General -->
      <q-breadcrumbs-el v-if="!fromProductScoped" @click="goToProducts" label="Productos" :class="selectedCategory||selectedSubCategory? 'cursor-pointer': ''" />
      <!-- Products -->
      <q-breadcrumbs-el v-if="selectedCategory && !selectedSubCategory && !fromProductScoped" :label="selectedCategory.name" ></q-breadcrumbs-el>
      <q-breadcrumbs-el v-if="selectedSubCategory && !fromProductScoped" @click="goToCategory" :label="selectedCategoryTrunqued" class="cursor-pointer"/>
      <q-breadcrumbs-el v-if="selectedSubCategory && !fromProductScoped" :label="selectedSubCategoryTrunqued" />
      <!-- Product Scoped -->
      <q-breadcrumbs-el v-if="fromProductScoped" @click="goToProducts" label="Productos" class="cursor-pointer" />
      <q-breadcrumbs-el v-if="selectedCategory && fromProductScoped" @click="goToCategory" :label="selectedCategoryTrunqued" class="cursor-pointer"></q-breadcrumbs-el>
      <q-breadcrumbs-el v-if="selectedSubCategory && fromProductScoped" @click="goToSubCategory" :label="selectedSubCategoryTrunqued" class="cursor-pointer"/>
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
        },
        goToSubCategory(){
            console.log(this.selectedSubCategory,'esta es la subcctegoria que se selecciona')
            this.$router.push({ name: 'productsBySubcategory', params: { category: this.selectedCategory.path , subcategory: this.selectedSubCategory.path } })
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