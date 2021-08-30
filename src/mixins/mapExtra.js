import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('extra', [
          'GetContact',
          'GetSocialNetworks'
      ]),
      ...mapMutations('extra', [
          'SetContact',
          'SetSocialNetworks'
      ]),
    },
    computed: {
      ...mapState('extra', [
        'contact',
        'socialNetworks'
      ])
    }
  };