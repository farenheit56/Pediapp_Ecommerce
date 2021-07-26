
<template>
    
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'initCategories',
    mounted(){
        this.getCategories()
    },
    methods: {
        ...mapMutations('categories', ['SetCategories']),
        getCategories(){
            this.$api.get('categories')
            .then((response) => {
                console.log(response.data)
                this.SetCategories(response.data)
            })
            .catch((e)=>{
                console.log('error' + e);
            })    
        }
    },

}
</script>