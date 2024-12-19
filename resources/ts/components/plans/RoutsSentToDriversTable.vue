<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
    { name: "name", label: "Name", field: "name",  align: 'left', sortable: true },
    { name: "vehicle", label: "Vehicle", field: "vehicle",  align: 'left', sortable: true },
    { name: "driver", label: "Driver", field: "driver",  align: 'left', sortable: true },
    { name: "date", label: "Date", field: "date",  align: 'left', sortable: true },
    { name: "stop", label: "Stop", field: "stop",  align: 'left', sortable: true },
    { name: "status", label: "Status", field: "status",  align: 'left', sortable: true },
    { name: "route", label: "View Route", field: "route", align: 'left'},
]);

const rows = ref([
    {
        id: 1,
        name: "Plan 1 - Route 2",
        vehicle: "",
        driver: "",
        date: "Dec 1, 2024",
        stop: "1",
        status: "Not Started",
        route: "",
    },
]);

</script>

<template>
    <section id="routes-table">
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
                    style="font-size: 14px; min-width: 180px"
                    class="order-table-slot hover:bg-[#FCFCFC] font-semibold"
                >
                    {{ props.col.label }}
                 </q-th>
            </template>

            <template v-slot:body-cell-vehicle="">
                <td class="">
                    <span class="px-1.5 py-0.5 rounded-md" style="border: 1px solid #214080; background:#e8f4fd;">
                        Alline Baxter
                    </span>
                </td>
            </template>

            <template v-slot:body-cell-driver="">
                <td class="">
                    <span class="px-1.5 py-0.5 rounded-md" style="border: 1px solid #214080; background:#e8f4fd;">
                        Alline Baxter
                    </span>
                </td>
            </template>

            <template v-slot:body-cell-date="">
                <td class="">
                    <span class="px-1.5 py-0.5 rounded-md" style="border: 1px solid #214080; background:#e8f4fd;">
                        Alline Baxter
                    </span>
                </td>
            </template>

            <template v-slot:body-cell-route="">
                <td class="">
                    <span class="px-1.5 py-0.5 rounded-md bg-primary text-white" style="border: 1px solid #214080; background:#e8f4fd;">
                        View Route
                    </span>
                </td>
            </template>

        </q-table>
    </section>

</template>

<style lang="scss">
#routes-table {
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
