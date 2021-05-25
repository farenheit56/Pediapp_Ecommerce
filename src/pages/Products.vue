<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm" :class="`${screenSm ? 'justify-center': ''}`">
                <div class="col-12 slider-grid q-pa-none">
                SLIDERIMAGE<br>
                SLIDERIMAGE<br>
                SLIDERIMAGE<br>
                SLIDERIMAGE<br>
                SLIDERIMAGE<br>
                </div>
                <div class="col whiteSpace-grid" :class="`${screenSm ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
                <div class="col-xs-12 col-sm-11 col-md-9 col-lg-9 products-grid borders-grid">
                    <div class= "row">
                        <div v-for="n in 12" :key="n" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-sm q-pa-sm product-grid borders-grid">
                            <q-card class="my-card">
                            <img src="https://cdn.quasar.dev/img/mountains.jpg">
                            <q-card-section>
                                <div class="text-h6">Our Changing Planet</div>
                                <div class="text-subtitle2">by John Doe</div>
                            </q-card-section>
                            <q-card-section class="q-pt-none">
                                Gato
                            </q-card-section>
                            </q-card>
                        </div>
                    </div>

                </div>
                <div class="col q-pl-none whiteSpace-grid" :class="`${screenSm ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
            </div>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PageIndex',
  mounted(){
      this.SetSelectedCategory(2)
  },
  methods:{
      ...mapMutations('categories', ['SetSelectedCategory']),
  },
  computed: {
    screenSm(){
        if(this.$q.screen.sm || this.$q.screen.xs){
            return true
        }else {
            return false
        }
    },
    screenMd(){
        if(this.$q.screen.md || this.$q.screen.lg){
        return true
        }else {
        return false
        }
    }
}
}
</script>

<style scoped>
/* add grid properties to debug responsive behaviour */
.slider-grid {
    background: #f59494;
    background-clip: content-box;
}
.categories-grid {
    background: #bebebe;
    background-clip: content-box;
}
.products-grid {
    background: #afb3ee;
    background-clip: content-box;
}
.product-grid {
    background: #afeeb9;
    background-clip: content-box;
}
.whiteSpace-grid {
    background: #b442ab;
    background-clip: content-box;
}
.borders-grid {
    border:1px solid black;
    box-sizing: border-box;
}


</style>