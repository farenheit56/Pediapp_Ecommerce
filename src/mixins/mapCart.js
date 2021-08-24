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
          'DeleteProduct'
      ]),
    },
    computed: {
      ...mapState('cart', [
        'cartProducts',
      ])
    }
  };