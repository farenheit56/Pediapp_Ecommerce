<template>
    
</template>

<script>
import mapCategories from 'src/mixins/mapCategories'
import mapProducts from 'src/mixins/mapProducts'
import mapInternalSections from 'src/mixins/mapInternalSections'
export default {
    name:'initStateWhenAccessFromLink',
    mixins:[mapCategories,mapProducts, mapInternalSections]    
    
}
</script>