<template>
    <q-drawer side="left" :width="200" :value="value" @input="$emit('input', $event)" content-class="bg-grey-3"  >
        <q-scroll-area class="fit">
            <div style="max-width: 350px;" >
                <q-list class="menu-list">
                <q-item @click="redirectToSection(section)" clickable v-ripple v-for="(section,index) in internalSections" :key="index + 17" class="q-pl-sm"> 
                    <q-item-section class= "text-h7 text-bold text-primary q-mb-none q-pb-none" >
                        {{section.title}}
                    <q-separator class="q-mt-xs"></q-separator>
                    </q-item-section>
                </q-item>
                </q-list>
            </div>
        </q-scroll-area>
        <div class="absolute-bottom text-center">INSERT LOGO HERE?</div>  
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