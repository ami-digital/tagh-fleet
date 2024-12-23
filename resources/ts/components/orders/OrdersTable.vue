<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";
import prevent = event.prevent;
import OrdersTopNavActions from "./OrdersTopNavActions.vue";
import OrderTableHeaderAction from "./OrderTableHeaderAction.vue";




const emits = defineEmits(['view'])

const orderSelected = ref([]);
const search = ref('')
const statusSelectList = ref('')


const columns = ref([
    { name: "routedStop", label: "Routed Stop", field: "routedStop", align: 'left'},
    { name: "order", label: "Order", field: "order", align: 'left',  sortable: true,},
    { name: "address", label: "Delivery Address", field: "address",  align: 'left', sortable: true },
    { name: "notes", label: "Delivery Notes", field: "notes",  align: 'left', sortable: true },
    { name: "status", label: "Status", field: "status",  align: 'left', sortable: true },
    { name: "date", label: "Order Date", field: "date",  align: 'left', sortable: true },
    { name: "contact", label: "Delivery Contact", field: "contact",  align: 'left', sortable: true },
    { name: "deliveryDate", label: "Delivery Date", field: "deliveryDate",  align: 'left', sortable: true },
    { name: "name", label: "Customer Name", field: "name",  align: 'left', sortable: true },
]);

const rows = ref([
    {
        id: 1,
        order: "#2023",
        address: "39 Lakeside Road, EN8 0EX",
        notes: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 1, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Chantelle Henshall",
    },
    {
        id: 2,
        order: "#17084",
        address: "Ralphs Lane, PE21 7AX",
        notes: "Orders: Explore ur view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 10, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
    },
    {
        id: 3,
        order: "#1484",
        address: "Ralphs Lane, PE21 7AX",
        notes: " Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 30, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
    },

    {
        id:4,
        order: "#1784",
        address: "Ralphs Lane, PE21 7AX",
        notes: " how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 20, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
    },
    {
        id:5,
        order: "#17484",
        address: "Ralphs Lane, PE21 7AX",
        notes: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 1, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
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

const currentPageRange = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value + 1;
    const end = Math.min(currentPage.value * rowsPerPage.value, rows.value.length);
    return { start, end };
});

const isFilterDialogOpen = ref(false);
const filters = ref<{ [key: string]: string }>({});

const openFilterDialog = () => {
    // Initialize filters object with empty values
    filters.value = columns.value.reduce((acc, col) => {
        acc[col.name] = "";
        return acc;
    }, {} as { [key: string]: string });

    isFilterDialogOpen.value = true;
};

const applyDialogFilters = () => {
    console.log("Applied Filters:", filters.value);
    isFilterDialogOpen.value = false;
};
const resetFilters = () => {
    filters.value = {};
};


</script>

<template>

    <section class="flex justify-between my-3">
        <div>
            <div class="flex gap-3">

                <section  v-if="orderSelected.length !== 0" >
                    <OrdersTopNavActions  />
                </section>

                <q-btn
                    label="Filters"
                    unelevated
                    dense
                    filled
                    text-color="white"
                    icon="filter_alt"
                    size="md"
                    padding="4px 14px"
                    class="px-2 bg-primary "
                    style="font-weight: normal; border-radius: 6px;"
                    @click="openFilterDialog"
                />
            </div>
        </div>

        <div>
            <div class="flex items-center no-wrap-lg">
                <div class="mx-2 text-accent">
                    {{ currentPageRange.start }}-{{ currentPageRange.end }} of {{ rows.length }}
                </div>
                <div>
                    <q-pagination
                        v-model="currentPage"
                        :max="Math.ceil(rows.length / rowsPerPage)"
                        direction-links
                        gutter="sm"
                        active-design="outline"
                        active-color="white"
                        active-text-color="primary"
                        class="text-primary"
                    />
                </div>

            </div>
        </div>
    </section>

    <section id="order-table">
        <q-table
            :rows="rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)"
            :columns="columns"
            row-key="id"
            flat
            selection="multiple"
            color="primary"
            @row-click="() => emits('view')"
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
                   <OrderTableHeaderAction  :type="props.col.name" :label="props.col.label"/>
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

    <q-dialog persistent v-model="isFilterDialogOpen">
        <q-card class="w-[700px] max-w-[70vh] q-px-md q-py-md rounded-md" >

            <q-card-section class="flex justify-between items-center no-wrap q-py-none">
                <div class="text-lg font-semibold">Filters</div>
                <q-btn
                    flat
                    round
                    icon="close"
                    class=" hover:text-red-700"
                    v-close-popup
                    unelevated
                >
                </q-btn>
            </q-card-section>

            <q-card-section>
                <div v-for="col in columns" :key="col.name" class="mb-4">
                    <div class="mb-1">
                        <label>{{col.label}}</label>
                    </div>

                    <div>
                        <q-select
                            v-if="col.name  === 'status' "
                            outlined
                            dense
                            v-model="statusSelectList"
                            :options="statusOptions"
                        />
                        <q-input
                            v-else
                            v-model="filters[col.name]"
                            dense
                            outlined
                            class="w-full"
                        />
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Reset" @click="resetFilters" />
                <q-btn
                    label="Apply Filters"
                    unelevated
                    dense
                    filled
                    text-color="white"
                    size="md"
                    padding="4px 14px"
                    class="px-2 bg-primary "
                    style="font-weight: normal; border-radius: 6px;"
                    @click="applyDialogFilters"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
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
