<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";
import prevent = event.prevent;

const orderSelected = ref([]);
const search = ref('')
const statusSelectList = ref('')


const columns = ref([

    { name: "name", label: "Name", field: "name", align: 'left',  sortable: true,},
    { name: "address", label: "Address", field: "address",  align: 'left', sortable: true },
    { name: "notes", label: "Panned ETA", field: "notes",  align: 'left', sortable: true },
    { name: "status", label: "Completed", field: "status",  align: 'left', sortable: true },
    { name: "date", label: "Order Notes", field: "date",  align: 'left', sortable: true },
    { name: "contact", label: "Driver Notes", field: "contact",  align: 'left', sortable: true },

]);

const rows = ref([
    {
        id: 1,
        name: "#2023",
        address: "39 Lakeside  ",
        notes: "Orders: Explore ",
        contact: "+44 786 645 4587",
        date: "Dec 1, 2024",
        deliveryDate: "Dec 12, 2024",

    },
    {
        id: 2,
        name: "#17084",
        address: "Ralphs Lane ",
        notes: "Orders: Explore ",
        contact: "+44 786 645 4587",
        date: "Dec 10, 2024",
        deliveryDate: "Dec 12, 2024",

    },
    {
        id: 3,
        name: "#1484",
        address: "Ralphs Lane ",
        notes: " Explore how ",
        contact: "+44 786 645 4587",
        date: "Dec 30, 2024",
        deliveryDate: "Dec 12, 2024",

    },

    {
        id:4,
        name: "#1784",
        address: "Ralphs Lane, PE21 7AX",
        notes: " how to tailor ",
        contact: "+44 786 645 4587",
        date: "Dec 20, 2024",
        deliveryDate: "Dec 12, 2024",

    },
    {
        id:5,
        name: "#17484",
        address: "Ralphs Lane, PE21 7AX",
        notes: "Orders: Explore",
        contact: "+44 786 645 4587",
        date: "Dec 1, 2024",
        deliveryDate: "Dec 12, 2024",

    },
]);

const statusOptions = ref([
    'Open',
    'Routed',
    'Delivered',
    'Undelivered',
    'On Hold',
    'Completed',
]);


const currentPage = ref<number>(1);
const rowsPerPage = ref<number>(2);


const isFilterDialogOpen = ref(false);
const filters = ref<{ [key: string]: string }>({});


const applyDialogFilters = () => {
    console.log("Applied Filters:", filters.value);
    isFilterDialogOpen.value = false;
};
const resetFilters = () => {
    filters.value = {};
};


</script>

<template>


    <section id="order-table">
        <q-table
            :rows="rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)"
            :columns="columns"
            row-key="id"
            flat

            color="primary"
            hide-pagination
            v-model:selected="orderSelected"
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

            <template v-slot:body-cell-status="">
                <td class="w-[180px]">
                    <span class="px-1.5 py-0.5 rounded-md" style="border: 1px solid #214080; background:#e8f4fd;">
                        open
                    </span>
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
