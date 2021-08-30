<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm text-center" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <q-form ref="form">
                    <div class="col-12 q-mt-md text-h6 text-primary">
                        Quienes Somos
                    </div>                
                    <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                    <div class="col-12">
                    </div>
                    <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                </q-form>
                <div class="col-12 q-mt-md absolute-bottom q-mb-lg" >
                    <div class="col-12 q-mt-md text-h6 text-primary">
                        Under Construction
                    </div>      
                </div>    
            </div>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->
  </q-page>
</template>

<script>
export default {
    name: 'PageIndex',

    data(){
        return {
            slide: 1,
            lorem: 'Lorem ipe volupta',
        }
    },
    methods:{
        onIntersection(entry){
            this.isVisible = !entry.isIntersecting
        },
    },
}
</script>
