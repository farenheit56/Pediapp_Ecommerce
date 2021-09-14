
<template>
    <q-scroll-area class="fit">
        <q-list padding class="menu-list">
            <q-item >
                <q-item-section clickable @click="goToSection('productos')">
                <q-item-label>Todos los Productos</q-item-label>
                </q-item-section>
            </q-item>
            <q-expansion-item
            v-for="(categorie, index) in categories"
            :key="index"
            :label="categorie.name"
            >
                <q-list class="q-pl-lg">
                    <q-item :v-if="categorie.subcategories" v-for="(subcategorie,index) in categorie.subcategories" :key="index" clickable @click="goToProductsFilteredBySubCat(categorie,subcategorie)" active-class="q-item-no-link-highlighting">
                        <q-item-section>
                            <q-item-label>{{subcategorie.name}}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable @click="goToProductsFilteredBySubCat(categorie,null)" active-class="q-item-no-link-highlighting">
                        <q-item-section>
                            <q-item-label><i>Ver todo en {{categorie.name}}</i></q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>            
        </q-list>
    </q-scroll-area>
</template>

<script>
import mapCategories from 'src/mixins/mapCategories.js'
import mapInternalSections from 'src/mixins/mapInternalSections.js'

export default {
    name: 'ProductLeftDrawer',
    props:{
        value:Boolean
    },
    mixins:[mapCategories, mapInternalSections],
    methods:{
        goToProductsFilteredBySubCat(category,subcategory){
            if(subcategory){
                this.SetSelectedCategory(category)
                this.SetSelectedSubCategory(subcategory)
                if(!this.selectedInternalSection){
                    let scopedInternalSection = this.internalSections.find(section=> section.path == 'productos')
                    this.SetSelectedInternalSection(scopedInternalSection)
                }
                this.$router.push({ name: 'productsBySubcategory', params: { category: category.path , subcategory:subcategory.path } })
            }else{
                this.SetSelectedCategory(category)
                this.SetSelectedSubCategory(subcategory) //null
                this.$router.push({ name: 'productsByCategory', params: { category: category.path } })
            }
        },
      goToSection(sectionPath){
        let sectionToBeSelected = this.internalSections.find(section=>{
          return section.path == sectionPath
        })
            this.SetSelectedInternalSection(sectionToBeSelected)
            this.SetSelectedCategory(null)
            this.SetSelectedSubCategory(null)
            this.$router.push({ name: sectionPath })
      },
    }
/*     computed: {
    ...mapState('categories', ['selectedCategory']),
    }, */
}
</script>