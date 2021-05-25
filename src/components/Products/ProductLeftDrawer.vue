
<template>
    <q-drawer show-if-above side="left" bordered :width="200" :value="value" @input="$emit('input', $event)">
        <q-scroll-area class="fit">
            <div class="q-pa-sm">
                <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
                {{selectedCategory}}
            </div>
        </q-scroll-area>    
    </q-drawer>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'ProductLeftDrawer',
    props:{
        value:Boolean
    },
    computed: {
    ...mapState('categories', ['selectedCategory']),
    },
}
</script>