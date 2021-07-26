<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <div class="col-12">
                    <section-portrait :sectionName="'Productos'" :scopedCategory="['Instrumentos de hogar','Calefonesa']" />
                </div>
                <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
                <div>HOLAA</div>
                <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                    <!-- Add WhiteSpace When Screen is Medium or Large -->
                </div>
            </div>

  </q-page>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import sectionPortrait from '../components/reusable/sectionPortrait.vue'

export default {
  components: { sectionPortrait },
  name: 'PageIndex',
  data(){
      return {
          alhunData:null,
      }
  },
  mounted(){
      console.log(this.prop1)
  },
  methods:{
    ...mapMutations('categories', ['SetSelectedCategory']),
  },
    computed: {
        ...mapState('categories', ['categories'])
    },
    components:{
        sectionPortrait
    }
}
</script>

<style scoped>

.whiteSpace-grid {
    background: #b442ab;
    background-clip: content-box;
}

</style>