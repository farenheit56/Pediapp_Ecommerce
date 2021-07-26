<template>
    <q-drawer show-if-above side="left" :width="200" :value="value" @input="$emit('input', $event)">
        <q-scroll-area class="fit">
            <div style="max-width: 350px">
                <q-list class="menu-list">
                <q-item :to="internalSections[index].path" clickable v-ripple v-for="(section,index) in internalSections" :key="index + 10" class="q-pl-sm"> 
                    <q-item-section class= "text-h6" >
                        {{internalSections[index].title}}
                    </q-item-section>
                </q-item>
                </q-list>
            </div>
        </q-scroll-area>    
    </q-drawer>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'homeLeftDrawer',
    mounted(){
        console.log(this.internalSections)
    },
    props:{
        value:Boolean
    },
    computed: {
    ...mapState('internalSections', ['internalSections','internalSectionsNames']),
    },
}
</script>