import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions
} from 'vuex';


export default {
  methods: {
    ...mapGetters('events', [
      'GetOpenCartEvent'
  ]),
    ...mapMutations('events', [
        'OpenCartEventMutation','SetBrowserNav'
    ]),
  },
  computed: {
    ...mapState('events', [
      'openCartEvent','browserNav'
    ])
  }
};