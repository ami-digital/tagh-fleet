<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";
import prevent = event.prevent;

const orderSelected = ref([]);
const search = ref('')


const columns = ref([
    { name: "routedStop", label: "Routed Stop", field: "routedStop", align: 'left'},
    { name: "order", label: "Order", field: "order", align: 'left',  sortable: true },
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
        notes: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 10, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
    },
    {
        id: 3,
        order: "#17084",
        address: "Ralphs Lane, PE21 7AX",
        notes: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 10, 2024",
        deliveryDate: "Dec 12, 2024",
        name: "Gary King",
    },

    {
        id:4,
        order: "#17084",
        address: "Ralphs Lane, PE21 7AX",
        notes: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        contact: "+44 786 645 4587",
        date: "Dec 10, 2024",
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
    'a'
]);

const selectedStatus = ref<string[]>([]);

const resetStatusFilters = () => {
    selectedStatus.value = [];
};

const applyFilters = () => {
    console.log('Selected Filters:', selectedStatus.value);
};
</script>

<template>

    <section class="flex justify-between my-3">
        <div>
            <div class="flex gap-3">
                <div v-if="orderSelected.length !== 0" class="flex gap-3">
                    <q-btn
                        label="Add to Plan"
                        unelevated
                        dense
                        filled
                        text-color="white"
                        size="md"
                        padding="4px 14px"
                        class="px-2 bg-primary "
                        style="font-weight: normal; border-radius: 6px;"
                    />
                    <q-btn
                        label="Delete Orders"
                        unelevated
                        outline
                        dense
                        filled
                        text-color="negative"
                        size="md"
                        padding="4px 14px"
                        class="px-2 "
                        style="font-weight: normal; border-radius: 6px;"
                    />
                    <div>
                        <q-btn-dropdown
                            label="More"
                            unelevated
                            outline
                            dense
                            filled
                            text-color="primary"
                            size="md"
                            padding="4px 14px"
                            class="px-2 "
                            menu-anchor="bottom start"
                            menu-self="top left"
                            dropdown-icon="keyboard_arrow_down"
                            style="font-weight: normal; border-radius: 6px;">
                            <q-list>
                                <q-item clickable v-close-popup @click="">
                                    <q-item-section>
                                        <q-item-label>Bulk Edits</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="">
                                    <q-item-section>
                                        <q-item-label>Labels</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="">
                                    <q-item-section>
                                        <q-item-label>Export 2 Rows</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
                </div>

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
                />
            </div>
        </div>

        <div>
            <div class="flex items-center">
                <div>
                    1-6 of 6
                </div>
                <q-btn
                    unelevated
                    dense
                    filled
                    text-color="white"
                    icon="settings"
                    size="sm"
                    padding=" 8px"
                    class="px-2 bg-primary px-2 ml-3"
                    style="font-weight: normal; border-radius: 6px;"
                />
            </div>
        </div>
    </section>

    <section id="order-table">
        <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            selection="multiple"
            color="primary"
            v-model:selected="orderSelected"
            class="rounded-lg shadow-sm bg-white text-[#61646A]"
            table-header-class="bg-[#fafafa] font-semibold text-left"
        >

            <template v-slot:header-cell="props">
                <q-th
                    :props="props"
                    style="font-weight: 600; font-size: 14px;"
                    class="order-table-slot"
                >
                    {{ props.col.label }}
                    <div class="float-right">
                        <div  v-if="props.col.name  == 'status' ">
                            <q-btn
                                icon="filter_alt"
                                unelevated
                                padding="4px"
                                size="sm"
                                text-color="grey"
                                @click.stop=""
                                >

                                <q-menu anchor="bottom right" self="top right" max-width="200px">
                                    <q-card class="min-w-[100px]">
                                        <q-input
                                            v-model="search"
                                            dense
                                            placeholder="Search in filters"
                                            outlined
                                            class="p-2"
                                        >
                                            <template v-slot:append>
                                                <q-icon name="search" />
                                            </template>
                                        </q-input>

                                        <q-list bordered class="q-pb-sm" style="color: rgba(0, 0, 0, 0.88)">
                                            <q-item v-for="(item, index) in statusOptions" :key="index" dense>
                                                <q-checkbox
                                                    v-model="selectedStatus"
                                                    :val="item"
                                                    :label="item"
                                                    dense
                                                    size="xs"
                                                />
                                            </q-item>
                                        </q-list>

                                        <div class="flex justify-between items-center p-2">
                                            <q-btn
                                                flat
                                                unelevated
                                                padding="0 8px "
                                                size="md"

                                                label="Reset" @click="resetStatusFilters" :disable="selectedStatus.length === 0" :color="selectedStatus.length === 0 ? 'grey' : 'primary'" />

                                            <q-btn
                                                color="primary"
                                                v-close-popup
                                                label="OK"
                                                @click="applyFilters"
                                                unelevated
                                                size="sm"
                                                padding="2px 8px"
                                            />
                                        </div>
                                    </q-card>
                                </q-menu>

                            </q-btn>
                        </div>
                        <div v-else>
                            <q-btn
                                icon="search"
                                unelevated
                                padding="4px"
                                size="sm"
                                text-color="grey"
                                @click.stop=""
                            >
                                <q-menu anchor="bottom right" self="top right">
                                    <q-item>
                                        <div class="flex search-input">
                                            <q-input v-model="search"
                                                     outlined
                                                     dense
                                                     class="text-gray-app min-w-[200px] bg-white"
                                                     :placeholder="`${props.col.label} Search`">
                                            </q-input>
                                            <div class=" bg-primary p-2 flex items-center justify-center cursor-pointer" style="border-radius: 0 6px 6px 0">
                                                <q-icon size="14px" class="text-gray-app  inline-block" color="white" name="search"/>
                                                <span class="text-white ml-1">search</span>
                                            </div>
                                        </div>
                                    </q-item>
                                </q-menu>
                            </q-btn>
                        </div>
                    </div>
                 </q-th>
            </template>

            <template v-slot:body-cell-status="">
                <td style="width: 180px;">
                    <span class="px-1.5 py-0.5 rounded-md" style="border: 1px solid #00a398; background: rgba(0, 165, 155, 0.067);">
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
