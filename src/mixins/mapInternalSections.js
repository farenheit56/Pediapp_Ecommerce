import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';


  export default {
    methods: {
      ...mapGetters('internalSections', [
          'GetInternalSections'
      ]),
      ...mapMutations('internalSections', [
          'SetInternalSections'
      ])
    },
    computed: {
      ...mapState('internalSections', [
        'internalSections'
      ])
    }
  };