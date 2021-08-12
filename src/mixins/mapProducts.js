import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('products', [
          'GetProducts'
      ]),
      ...mapMutations('products', [
          'SetProducts',
          'SetSelectedProduct'
      ])
    },
    computed: {
      ...mapState('products', [
        'products',
        'selectedProduct'
      ])
    }
  };