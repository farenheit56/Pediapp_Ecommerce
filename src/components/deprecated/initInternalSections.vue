
<template>
    <div>
    <!--   COMPONENT DEPRECATED, NOW I INIT CATEGORIES USING PREFETCH METHOD IN APP.VUE -->
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'initCategories',
    mounted(){
        this.getInternalSections()
    },
    
    methods: {
        ...mapMutations('internalSections', ['SetInternalSections', 'SetInternalSectionsNames']),
        getInternalSections(){
            this.$api.get('internalSections')
            .then((response) => {
                this.SetInternalSections(response.data)
                this.SetInternalSectionsNames(response.data)
            })
            .catch((e)=>{
                console.log('error' + e);
            })
        }
    },
}
</script>

//DEPRECATED METHOD.
