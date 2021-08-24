<template>
    <q-drawer show-if-above side="left" :width="200" :value="value" @input="$emit('input', $event)">
        <q-scroll-area class="fit">
            <div style="max-width: 350px">
                <q-list class="menu-list">
                <q-item @click="redirectToSection(section)" clickable v-ripple v-for="(section,index) in internalSections" :key="index + 17" class="q-pl-sm"> 
                    <q-item-section class= "text-h6" >
                        {{section.title}}
                    </q-item-section>
                </q-item>
                </q-list>
            </div>
        </q-scroll-area>    
    </q-drawer>
</template>

<script>

//Store Modules
import mapInternalSections from 'src/mixins/mapInternalSections.js'

export default {
    name: 'homeLeftDrawer',
    mixins:[mapInternalSections],
    methods: {
        redirectToSection(section){
            this.SetSelectedInternalSection(section)
            this.$router.push({ name: section.path })
        }
    },
    props:{
        value:Boolean
    },

}
</script>