<script lang="ts"  setup>

import MainLayout from "../../layouts/MainLayout.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";

const showModal = ref(false)
const maximizedToggle = ref(true)
</script>

<template>

        <q-page>
            <q-btn label="Open Full-Screen Modal"   @click="showModal = true" />

             <OrderViewDrawer v-model="showModal" />
        </q-page>

</template>

<style scoped lang="scss">

</style>
