<template>
    <q-page>
        <q-toolbar class="bg-accent text-white">
            <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <q-toolbar-title>
            Page Title
            </q-toolbar-title>
            <q-btn>HOLAA</q-btn>
        </q-toolbar>
        <q-page-scroller expand position="top" :duration="0" :scroll-offset="350" :offset="[0, 0]" @click.stop>
            <q-toolbar class="bg-accent text-white">
                <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                <q-toolbar-title>
                Page Title
                </q-toolbar-title>
                <q-btn>HOLAA</q-btn>
            </q-toolbar>
        </q-page-scroller>
        <div class='row full-width q-col-gutter-sm'>
            <q-carousel
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinit
            class="col-12"
            height="500px"
            >
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
            </q-carousel>
        </div>
        <div v-for="n in 30" :key= n>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </div>
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
