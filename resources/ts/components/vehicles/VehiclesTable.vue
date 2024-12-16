<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";



const columns = ref([
    { name: "name", label: "Name", field: "name",  align: 'left', sortable: true },
    { name: "driver", label: "Driver", field: "driver",  align: 'left', sortable: true },
    { name: "startLocation", label: "Start Location", field: "startLocation", align: 'left',},
    { name: "endLocation", label: "End Location", field: "endLocation",  align: 'left',  },
    { name: "availability", label: "Availability", field: "availability",  align: 'left', },
    { name: "driverBreak", label: "Driver Break", field: "driverBreak",  align: 'left', },
    { name: "overnight", label: "Overnight", field: "Overnight",  align: 'left', },
    { name: "qty", label: "QTY", field: "qty",  align: 'left', },
]);

const rows = ref([
    {
        id: 1,
        driver: "Chantelle",
        name: "LJ12 XJD",
        startLocation: "Depot",
        endLocation: "Depot",
        availability: "After 1:14 PM",
        Overnight: "0",
        driverBreak: "-",
        qty: "20",
    },
    {
        id: 1,
        driver: "Chantelle",
        name: "LJ12 XJD",
        startLocation: "Depot",
        endLocation: "Depot",
        availability: "After 1:14 PM",
        Overnight: "0",
        driverBreak: "-",
        qty: "20",
    },
    {
        id: 1,
        driver: "Chantelle",
        name: "LJ12 XJD",
        startLocation: "Depot",
        endLocation: "Depot",
        availability: "After 1:14 PM",
        Overnight: "0",
        driverBreak: "-",
        qty: "20",
    },

]);




</script>

<template>


    <section id="order-table">
        <q-table
            :rows="rows"
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

            <template v-slot:body-cell-actions="">
                <td style="text-align: right">
                    <q-btn
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
