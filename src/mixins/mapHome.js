import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('home', [
          'GetHome'
      ]),
      ...mapMutations('home', [
          'SetHome',
      ])
    },
    computed: {
      ...mapState('home', [
        'home',
      ])
    }
  };