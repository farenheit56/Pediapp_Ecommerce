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
          'SetRandomProducts',
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
        'randomProducts',
        'selectedProduct',
        'selectedProductImages',
        'relatedProductByCat',
        'relatedProductBySubCat'
      ])
    }
  };