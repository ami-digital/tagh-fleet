<script setup lang="ts">

import { Head } from "@inertiajs/vue3";

import MainLayout from "../../layouts/MainLayout.vue";



</script>

<template>
    <Head>
        <title>Index</title>
    </Head>


    <MainLayout   >

        <q-page padding>
            <!-- Header Section -->
            <section class="shadow shadow-md p-6 bg-white mx-auto w-1/2">
                <div class="mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <p class="text-[21px] mb-0 text-black ">Vehicle Capacities</p>
<!--                        <q-btn-->
<!--                            rounded-->
<!--                            outline-->

<!--                                color="secondary"-->
<!--                            icon="menu_book"-->
<!--                            >-->
<!--                            <span class="text-[12px] ml-2">-->
<!--                                View Guide-->
<!--                            </span>-->

<!--                        </q-btn>-->
                    </div>

                    <div class="bg-blue-100 shadow  text-[#00a3ff] p-4 rounded-md grid grid-cols-[auto_minmax(0,_1fr)] bg-[#eff9f8] p-4 gap-4 items-center  ">

                            <q-icon name="info" size="md" class="text-blue-600"></q-icon>
                            <span >
                               Capacities allow you put limits on the amount of goods that a vehicle can carry at one time (e.g. weight, volume, units, etc.).

                            </span>

                    </div>
                </div>

                <!-- Table Section -->
                <div class="mb-6">
                    <q-table
                        :rows="[ { capacityType: 'QTY', defaultValue: 20 } ]"
                        :columns="[ { name: 'capacityType', align: 'left', label: 'Capacity Type', field: 'capacityType' }, { name: 'defaultValue', align: 'left', label: 'Default Value', field: 'defaultValue' } ]"
                        class="rounded-md shadow-md"
                    >

                    </q-table>
                    <div class="mt-5 full-width text-center">
                        <q-btn

                            outline
                            color="secondary"
                            icon="add_circle"
                        >
                            <span class="text-[12px] ml-2">
                               Create a new vehicle capacity
                            </span>

                        </q-btn>

                    </div>
                </div>

                <!-- Toggle Section -->
                <div class="mb-6 flex items-center flex justify-between  bg-[#eff9f8] rounded px-2 text-[14px]">
                    <p class="  mb-0">
                        Would you like to set a maximum number of stops for a vehicle on a route?
                    </p>


                    <q-toggle  />

                </div>

                <!-- Order Capacities Section -->
                <div class="    ">
                    <h2 class="text-lg font-semibold mb-3">Order Capacities</h2>

                    <div class="grid grid-cols-2 flex items-center justify-between ">
                        <p class="mb-0">
                            Should capacities on orders be per line item or per order?
                        </p>
                        <div>
<!--                            <q-btn-toggle-->
<!--                                class="border-gray"-->
<!--                                no-caps-->

<!--                                outline-->
<!--                                toggle-color="primary"-->
<!--                                color="white"-->
<!--                                text-color="secondary"-->
<!--                                :options="[-->
<!--                                  {label: 'Per Line Item ', value: 'one'},-->
<!--                                  {label: 'Per Order', value: 'two'}-->
<!--                                ]"-->
<!--                            />-->
                        </div>

                    </div>




                </div>

            </section>

        </q-page>
    </MainLayout>

</template>

