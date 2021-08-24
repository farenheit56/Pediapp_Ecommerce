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
          'SetInternalSections',
          'SetSelectedInternalSection'
      ])
    },
    computed: {
      ...mapState('internalSections', [
        'internalSections',
        'selectedInternalSection'
      ])
    }
  };