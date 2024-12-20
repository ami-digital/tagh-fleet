<script setup>

import RoutsOrderItemsTable from "./RoutsOrderItemsTable.vue";
</script>

<template>
    <q-card >
        <!-- Status -->
        <q-card-section class="bg-gray-200 p-4  rounded-md  ">
            <div class="flex  space-x-2  justify-center items-center  ">

                <div  >

                    <p class="mb-0 font-semibold  text-md" >Order Info</p>
                </div>
            </div>

        </q-card-section>
        <q-card-section  style="padding: 0" >
            <div class="w-full flex flex-col  ">
                <div class="  p-3">
                    <div class="flex justify-between items-center">
                        <p class="mb-0 "> <span class="font-semibold  text-xs">Order Number :</span> <span>#1174</span></p>
                        <p class="mb-0 "> <span class="font-semibold  text-xs">Contact Name :</span> <span>Runita Virdee</span></p>

                    </div>
                </div>

                <div class="  p-3">
                    <div class=" ">
                        <p class=" text-xl text-center  ">Order Line Items</p>
                        <div>

                        </div>
                        <RoutsOrderItemsTable />
                    </div>
                </div>

            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped lang="scss">

</style>
