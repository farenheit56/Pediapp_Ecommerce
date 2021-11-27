<template>
    <div class="q-ml-sm" :style="`height: 25vw`">
        <q-img v-if="selectedProduct" width="50%" height="98%" :src="`https://api.pediapp.com.ar/images/${images[selectedImage]}` " contain  >
                <q-btn v-if="selectedImage != 0" flat rounded icon="fas fa-arrow-left" class="absolute-bottom-left q-mb-xl" @click="prevImage()"></q-btn>
                <q-btn v-if="selectedImage != selectedProduct.product_images.length" flat rounded icon="fas fa-arrow-right" class="absolute-bottom-right q-mb-xl" @click="nextImage()"></q-btn>
        </q-img>
    </div>
</template>

<script>

import mapProducts from 'src/mixins/mapProducts.js'
export default {
    //Deprecado, no se usa mas
    name:'carrousel',
    data(){
        return {
            images:{},
            selectedImage: 0
        }
    },
    mixins:[mapProducts],
    mounted(){
        this.$set(this.images, 0, this.selectedProduct.image_url);
        this.selectedProduct.product_images.forEach((image,index)=>{
            this.$set(this.images, index + 1, image.image_url);
        })
    },
    methods:{
        nextImage(index){
            this.selectedImage += 1
        },
        prevImage(index){
            this.selectedImage -= 1
        }
    }
    
}
</script>

<style>

</style>