<script lang="ts"  setup>

import MainLayout from "../../layouts/MainLayout.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import OrderViewDrawerCopy from "../../components/orders/OrderViewDrawerCopy.vue";
import RoutesDetailsDrawer from "../../components/routes/RoutesDetailsDrawer.vue";

const OrderView  = ref(false)
const showModal = ref(false)
const routeStatus = ref(false)

</script>

<template>

        <q-page>
            <q-btn label="edit order"   @click="OrderView = true" />
            <q-btn label="plan details"   @click="showModal = true" />
            <q-btn label="Open Route details"   @click="routeStatus = true" />

             <OrderViewDrawerCopy @close="OrderView = false" v-model="OrderView" />
             <OrderViewDrawer @close="showModal = false" v-model="showModal" />
             <RoutesDetailsDrawer @close="routeStatus = false" v-model="routeStatus" />
        </q-page>

</template>

<style scoped lang="scss">

</style>
