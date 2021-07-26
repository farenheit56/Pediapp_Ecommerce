<template>
    <q-card class="my-card">
        <q-img :src="`http://localhost:3000/images/${data.image_url}`">
            <q-chip v-if="data.chip" :class="data.chip_class" :color="data.chip_color" :label="data.chip"></q-chip>
        </q-img>

        <q-card-section class="q-mt-none q-pt-none ">
            <q-btn
            fab
            color="teal-7"
            icon="add_shopping_cart" padding="sm"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-180%);"
            />
        </q-card-section>

        <q-card-section class="q-mt-none q-pt-none ">
            <div class="text-h6">
            {{ data.name }}
            </div>
            <div class="text-subtitle1 text-justify q-mt-sm">
            {{ data.description }}
            </div>
        </q-card-section>

        <q-card-section class="q-mt-none q-pt-none ">
            <div class="col-12">
            <span class="text-h6">$ {{ data.price }}</span>
            <span class="text-h6 float-right">
                <q-btn label="See Details" rounded color="secondary" outline></q-btn>
            </span>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
  name: "CardProduct",
  props: ['data']
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
