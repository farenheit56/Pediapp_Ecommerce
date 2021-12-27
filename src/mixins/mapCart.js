import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('cart', [
          'GetCartProducts',
          'GetCartProductsTotalPrice'
      ]),
      ...mapMutations('cart', [
          'PushCartProduct',
          'DeleteProduct',
          'AddOneQuantitySelected',
          'RemoveOneQuantitySelected',
          'PushCartOrderNow',
          'SetCartFromLocalStorage',
          'KillCartProduct'

      ]),
    },
    computed: {
      ...mapState('cart', [
        'cartProducts',
        'cartOrderNow'
      ])
    }
  };