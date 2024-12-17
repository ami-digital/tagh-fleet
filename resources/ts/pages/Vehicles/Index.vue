<script setup lang="ts">

import { Head } from "@inertiajs/vue3";
import { ref } from "vue"
import MainLayout from "../../layouts/MainLayout.vue";
import VehiclesTable from "../../components/vehicles/VehiclesTable.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import OrderViewDrawerCopy from "../../components/orders/OrderViewDrawerCopy.vue";
import CreateVehicleDrawer from "../../components/vehicles/CreateVehicleDrawer.vue";

const search = ref('');
const showModal = ref(false)

</script>

<template>
    <Head>
        <title>Index</title>
    </Head>


        <q-page padding id="vehicles-page">
            <section class="shadow-md p-6 bg-white mx-auto ">

                <section class="flex items-center justify-between">
                    <h3 class="mb-1 mt-0  text-2xl font-medium">Vehicles Setup</h3>

                    <q-btn
                        label="View Guide"
                        unelevated
                        dense
                        icon="menu_book"
                        text-color="primary"
                        size="md"
                        padding="4px 14px"
                        class="px-2 bg-white mr-3 rounded-lg border-primary"
                        style=" font-weight: normal; border-radius: 18px; border:2px solid ;"
                    />

                </section>
                <section class="flex my-3 q-gutter-x-md">
                    <div>
                        <div class="flex search-input">
                            <q-input v-model="search"
                                     outlined
                                     dense
                                     class="text-gray-app min-w-[200px] bg-white"
                                     placeholder="Search Vehicles">
                            </q-input>
                            <div class="h-8 w-12 bg-primary grid items-center justify-center cursor-pointer" style="border-radius: 0 6px 6px 0">
                                <q-icon size="xs" class="text-gray-app  inline-block" color="white" name="search"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <q-btn
                            label="Creat Vehicle"
                            unelevated
                            dense
                            icon="add_circle_outline"
                            text-color="primary"
                            size="md"
                            padding="4px 14px"
                            class="px-2 bg-white px-2 mr-3 rounded-md border-primary"
                            style=" font-weight: normal; border-radius: 6px; border:1px solid;"
                            @click="showModal = true"
                        />
                    </div>
                </section>
                <VehiclesTable />
            </section>



            <CreateVehicleDrawer @close="showModal = false" v-model="showModal" />
        </q-page>

</template>

<style lang="scss">
#vehicles-page {
    .search-input {
        .q-field__control {
            border-radius: 6px 0 0 6px;
            height: 32px;
        }
    }
}
</style>

