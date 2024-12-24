<script setup lang="ts">
import { ref, watch } from "vue";
import {Head, usePage} from "@inertiajs/vue3";
import { Dark } from "quasar";

import OrdersTable from "../../components/orders/OrdersTable.vue";
import OrderEditViewDrawer from "../../components/orders/OrderEditViewDrawer.vue";

const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const search = ref('');

const OrderView = ref(false);
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>

    <q-page class="px-4 sm:px-6 py-4 bg-[#F5F5F5]" id="order-page">

        <!-- Header Section -->
        <section class="flex justify-center">
            <h3 class="m-0 text-lg sm:text-2xl font-medium">Orders</h3>
        </section>

        <!-- Search Section -->
        <section class="flex flex-col sm:flex-row justify-between items-center my-4 gap-3">
            <div class="w-full sm:w-auto">
                <div class="flex search-input">
                    <q-input
                        v-model="search"
                        outlined
                        dense
                        class="text-gray-app   bg-white"
                        placeholder="Search"
                    ></q-input>
                    <div class="h-8 w-12 bg-primary flex items-center justify-center cursor-pointer"
                         style="border-radius: 0 6px 6px 0">
                        <q-icon size="xs" class="text-gray-app inline-block" color="white" name="search" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Orders Table Section -->
        <section class="my-3">
            <OrdersTable @view="OrderView = true" />
        </section>

        <!-- Drawer Component -->
        <OrderEditViewDrawer @close="OrderView = false" v-model="OrderView" />
    </q-page>
</template>

<style lang="scss">
#order-page {
    .search-input {
        .q-field__control {
            border-radius: 6px 0 0 6px;
            height: 32px;
        }
    }
}
</style>
