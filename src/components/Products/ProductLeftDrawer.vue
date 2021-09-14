
<template>
    <q-drawer
        :value="value"
        :width="200"
        @input="$emit('input', $event)"
        side="left"
        bordered

    >
<!--         <q-scroll-area class="fit">
            <q-list>
                <q-expansion-item
                    v-for="(categorie,index) in categories"
                    :key="index + 117"
                    v-ripple
                    icon="mail"
                    :label="categorie.name"
                    expand-separator
                >                    
                </q-expansion-item>

            </q-list>
        </q-scroll-area> -->  
        <q-scroll-area class="fit">
            <q-list padding class="menu-list">
                <q-item to="productos" active-class="q-item-no-link-highlighting">
                    <q-item-section avatar>
                    <q-icon name="forward" color="primary" />
                    </q-item-section>
                    <q-item-section>
                    <q-item-label>Productos</q-item-label>
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
    </q-drawer>
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
            //E.g, when comming from another internal section and going to product page. Need to set Product as selectedSection. That way
            //information such as image, and text that belongs to Product Section is set properly.
            if(!this.selectedInternalSection || (this.selectedInternalSection && this.selectedInternalSection.path != 'productos')){
                let scopedInternalSection = this.internalSections.find(section=> section.path == 'productos')
                this.SetSelectedInternalSection(scopedInternalSection)
            }
            if(subcategory){
                this.SetSelectedCategory(category)
                this.SetSelectedSubCategory(subcategory)

                this.$router.push({ name: 'productsBySubcategory', params: { category: category.path , subcategory:subcategory.path } })
            }else{
                this.SetSelectedCategory(category)
                this.SetSelectedSubCategory(subcategory) //null
                this.$router.push({ name: 'productsByCategory', params: { category: category.path } })
            }
        }
    }
/*     computed: {
    ...mapState('categories', ['selectedCategory']),
    }, */
}
</script>