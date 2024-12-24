<script setup lang="ts">

import { Head } from "@inertiajs/vue3";
import { ref } from "vue"
import MainLayout from "../../layouts/MainLayout.vue";
import VehiclesTable from "../../components/vehicles/VehiclesTable.vue";
import OrderViewDrawer from "../../components/orders/OrderViewDrawer.vue";
import OrderViewDrawerCopy from "../../components/orders/OrderViewDrawerCopy.vue";
import CreateVehicleDrawer from "../../components/vehicles/CreateVehicleDrawer.vue";
import TeamsTable from "../../components/team-members/TeamsTable.vue";
import AddTeamMemberDrawer from "../../components/team-members/AddTeamMemberDrawer.vue";

const search = ref('');
const showModal = ref(false)

</script>


<template>
    <Head>
        <title>Index</title>
    </Head>
    <q-page class="py-4 bg-[#F5F5F5]" id="vehicles-page">
        <section class="flex items-center">
            <q-separator class="w-[10%] max-w-[100px]" />
            <h3 class="mb-1 q-px-md text-2xl font-medium">Vehicles Setup</h3>
            <q-separator class="flex-1" />
        </section>

        <!-- Responsive Section -->
        <section class="flex flex-col sm:flex-row sm:items-center sm:justify-between my-3 px-6 q-gutter-x-md gap-3">
            <!-- Search Input -->
            <div class="w-full sm:w-auto" >
                <div class="flex search-input items-stretch">
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

            <!-- Add Button -->
            <div class="w-full sm:w-auto">
                <q-btn
                    @click="showModal = true"
                    label="Create Vehicle"
                    unelevated
                    dense
                    icon="add_circle_outline"
                    text-color="primary"
                    size="md"
                    class="w-full sm:w-auto px-2 bg-white rounded-md border-primary"
                    style="font-weight: normal; border-radius: 6px; border: 1px solid;"
                />
            </div>
        </section>

        <section class="my-3 px-6">
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

