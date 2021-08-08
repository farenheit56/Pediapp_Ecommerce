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
          'SetSelectedCategory'
      ])
    },
    computed: {
      ...mapState('categories', [
        'categories'
      ])
    }
  };