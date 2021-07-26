<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <div class="col-12">
                    <section-portrait :sectionName="$route.path" :scopedCategory="['Instrumentos de hogar','Calefonesa']" />
                </div>
                <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
                <div class="col-xs-12 col-sm-11 col-md-9 col-lg-9">
                    <div class= "row">
                        <div v-for="(product, index) in productList" :key="index" class="col-xs-12 col-sm-6 col-md-4 col-lg-4 q-pa-sm q-pa-sm">
                            <card-product v-if="productList" :data="product" />
                        </div>
                    </div>
                </div>
                <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
            </div>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->
  </q-page>
</template>

<script>
import cardProduct from 'components/Products/cardProduct'
import { mapMutations, mapState } from 'vuex'
import sectionPortrait from '../components/reusable/sectionPortrait.vue'
export default {
  components: { sectionPortrait },
  name: 'PageIndex',
  data(){
      return {
          slide:1,
          productList:null
      }
  },
  mounted(){
      this.SetSelectedCategory(2),
      this.getProducts()
      console.log(this.categories)
  },
  methods:{
    ...mapMutations('categories', ['SetSelectedCategory']),
    getProducts(){
        this.$api.get('products')
        .then((response) => {
            console.log(response.data)
            this.productList = response.data
        })
        .catch((e)=>{
          console.log('error' + e);
        })
    }
  },
    computed: {
        ...mapState('categories', ['categories'])
    },
    components:{
        cardProduct,
        sectionPortrait,
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