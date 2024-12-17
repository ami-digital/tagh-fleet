<script lang="ts"  setup>

import MainLayout from "../../layouts/MainLayout.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import OrderViewDrawerCopy from "../../components/orders/OrderViewDrawerCopy.vue";

const OrderView  = ref(false)
const showModal = ref(false)
const maximizedToggle = ref(true)
</script>

<template>

        <q-page>
            <q-btn label="OrderViewDrawer"   @click="OrderView = true" />
            <q-btn label="Open Full-Screen Modal"   @click="showModal = true" />

             <OrderViewDrawerCopy @close="OrderView = false" v-model="OrderView" />
             <OrderViewDrawer @close="showModal = false" v-model="showModal" />
        </q-page>

</template>

<style scoped lang="scss">

</style>
