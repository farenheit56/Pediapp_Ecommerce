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
          'SetSelectedProductImages',
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
        'selectedProductImages',
        'relatedProductByCat',
        'relatedProductBySubCat'
      ])
    }
  };