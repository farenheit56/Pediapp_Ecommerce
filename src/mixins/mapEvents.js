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
        'OpenCartEventMutation'
    ]),
  },
  computed: {
    ...mapState('events', [
      'openCartEvent',
    ])
  }
};