import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('products', [
          'GetProducts'
      ]),
      ...mapMutations('products', [
          'SetProducts',
          'SetSelectedProduct',
          'SetRelatedProductByCat',
          'SetRelatedProductBySubCat'
      ]),
      ...mapActions('products',[
        'actionProducts',
        'actionRelatedProductByCat',
        'actionRelatedProductBySubCat'
      ])
    },
    computed: {
      ...mapState('products', [
        'products',
        'selectedProduct',
        'relatedProductByCat',
        'relatedProductBySubCat'
      ])
    }
  };