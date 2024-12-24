<script setup lang="ts">
import { ref } from "vue";

import {router} from "@inertiajs/vue3";
import {route} from "ziggy-js";
import {formatToTitleCase} from "../../core/utils";
import {useVehicles} from "../../core/composable/useVehicles";

interface Props {
    items : any[]
}
const {openEditVehicleDrawer} = useVehicles()
withDefaults(defineProps<Props>() , {items : () => []})

const columns = ref([
    { name: "name", label: "Name", field: "name",  align: 'left', sortable: true },
    { name: "driver", label: "Driver", field: "driver",  align: 'left', sortable: true },
    { name: "start_location", label: "Start Location", field: "start_location", align: 'left',},
    { name: "end_location", label: "End Location", field: "end_location",  align: 'left',  },
    { name: "availability", label: "Availability", field: "availability",  align: 'left', },
    { name: "max_number_of_stops", label: "Number of stops", field: "max_number_of_stops",  align: 'left', },
    { name: "actions", label: "", field: "actions",  align: 'left', },
]);





</script>

<template>


    <section id="order-table">
        <q-table
            :rows="items"
            :columns="columns"
            row-key="id"
            flat
            color="primary"
            hide-pagination
            class="rounded-lg shadow-sm bg-white text-[#61646A]"
            table-header-class="bg-[#e8f4fd] font-semibold text-left"
        >

            <template v-slot:header-cell="props">
                <q-th
                    :props="props"
                    style="font-weight: 600; font-size: 14px; min-width: 180px"
                    class="order-table-slot hover:bg-[#FCFCFC]"
                >
                    {{ props.col.label }}
                </q-th>
            </template>
            <template v-slot:body-cell-driver="props">
                <td style="text-align: left">
                    {{props.row?.driver?.name}}
                </td>
            </template>
            <template v-slot:body-cell-start_location="props">
                <td style="text-align: left">
                    {{formatToTitleCase(props.row?.start_location)}}
                </td>
            </template>
            <template v-slot:body-cell-end_location="props">
                <td style="text-align: left">
                    {{formatToTitleCase(props.row?.end_location)}}
                </td>
            </template>
            <template v-slot:body-cell-availability="props">
                <td style="text-align: left">
                    {{formatToTitleCase(props.row?.availability)}}
                </td>
            </template>

            <template v-slot:body-cell-actions="props">
                <td style="text-align: right">
                                        <q-btn
                                            @click.prevent="openEditVehicleDrawer(props.row.id )"
                                            flat
                                            round
                                            icon="border_color"
                                            size="sm"
                                            class=" hover:text-blue-700 mx-2"
                                            v-close-popup
                                            unelevated
                                        >
                                        </q-btn>
                    <q-btn
                        @click="router.delete(route('vehicles.destroy', { vehicle: props.row.id }))"
                        flat
                        round
                        icon="delete_outline"
                        size="sm"
                        class=" hover:text-red-700 mx-2"
                        v-close-popup
                        unelevated
                    >
                    </q-btn>
                </td>
            </template>

        </q-table>
    </section>

</template>

<style lang="scss">
#order-table {
    .q-table--col-auto-width:has(.q-checkbox) {
        text-align: left;

        @media (max-width: 1000px ) {
            position: sticky;
            left: 0;
            z-index: 99;
            background:white;
        }
    }
    .q-checkbox {
        .q-checkbox__bg {
            border: 1px solid #DCDCDC;
            border-radius: 4px;
            width: 16px;
            height: 16px;
        }
    }
}
</style>
