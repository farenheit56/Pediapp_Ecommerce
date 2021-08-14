import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('categories', [
          'GetCategories'
      ]),
      ...mapMutations('categories', [
          'SetCategories',
          'SetSelectedCategory',
          'SetSelectedSubCategory'
      ])
    },
    computed: {
      ...mapState('categories', [
        'categories','selectedCategory', 'selectedSubCategory'
      ])
    }
  };