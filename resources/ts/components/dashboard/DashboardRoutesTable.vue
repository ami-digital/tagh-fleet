<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";
import prevent = event.prevent;

const orderSelected = ref([]);
const search = ref('')



const columns = ref([

    { name: "vehicle", label: "Vehicle", field: "vehicle", align: 'left',  sortable: true,},
    { name: "driver", label: "Driver", field: "driver",  align: 'left', sortable: true },
    { name: "date", label: "Date", field: "date",  align: 'left', sortable: true },
    { name: "stop", label: "Stop", field: "stop",  align: 'left', sortable: true },
    { name: "qty", label: "Qty", field: "qty",  align: 'left', sortable: true },
    { name: "completed", label: "Completed", field: "completed",  align: 'left', sortable: true },
    { name: "failed", label: "Failed", field: "failed",  align: 'left', sortable: true },
    { name: "action", label: " ", field: "contact",  align: 'left', sortable: true },

]);

const rows = ref([
    {
        id: 1,
        vehicle: "#2023",
        driver: "39 Lakeside  ",
        date: "Orders: Explore ",
        stop: "+44 786 645 4587",
        qty: "Dec 1, 2024",
        completed: "Dec 12, 2024",
        failed: "Dec 12, 2024",

    },


]);




const currentPage = ref<number>(1);
const rowsPerPage = ref<number>(2);

const currentPageRange = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value + 1;
    const end = Math.min(currentPage.value * rowsPerPage.value, rows.value.length);
    return { start, end };
});


const filters = ref<{ [key: string]: string }>({});



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
                    class="hover:bg-[#FCFCFC] px-4 py-2 "
                    style="font-size: 12px;"
                >
                    {{ props.col.label }}
                </q-th>
            </template>

            <template v-slot:body-cell-vehicle>
                <td class="px-4 py-2">
      <span class="px-1.5 py-0.5 rounded-md bg-blue-100 border border-blue-500">
        KL19 ZXB
      </span>
                </td>
            </template>
            <template v-slot:body-cell-driver>
                <td class="px-4 py-2">
      <span class="px-1.5 py-0.5 rounded-md bg-blue-100 border border-blue-500">
        Wajid Gulistan
      </span>
                </td>
            </template>
            <template v-slot:body-cell-date>
                <td class="px-4 py-2">
      <span class="px-1.5 py-0.5 rounded-md bg-blue-100 border border-blue-500">
        Dec 22, 2024
      </span>
                </td>
            </template>
            <template v-slot:body-cell-status="">
                <td class="px-4 py-2">
      <span
          class="px-1.5 py-0.5 rounded-md"
          style="border: 1px solid #214080; background: #e8f4fd;"
      >
        open
      </span>
                </td>
            </template>
            <template v-slot:body-cell-action="">
                <td class="px-4 py-2">
                    <q-btn
                        flat
                        color="blue"

                        size="sm"
                        class="rounded-md"
                        label="Edit"
                    />
                </td>
            </template>
        </q-table>
        <div class="w-full flex justify-end">
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
