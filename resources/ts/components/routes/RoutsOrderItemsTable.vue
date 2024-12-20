<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
    { name: "product", label: "Product", field: "product",  align: 'left', sortable: true },
    { name: "vehicle", label: "Product Code", field: "vehicle",  align: 'left', sortable: true },
    { name: "driver", label: "Quantity", field: "driver",  align: 'left', sortable: true },

]);

const rows = ref([
    {
        id: 1,
        product: "Air Feel Orthopedic Mattress - Memory Foam and Spring Mattress | Pefect Erg",
        vehicle: "4FT",
        driver: "2",

    },
    {
        id: 1,
        product: "Air Feel Orthopedic Mattress - Memory Foam and Spring Mattress | Pefect Erg",
        vehicle: "4FT",
        driver: "2",

    },
]);

</script>

<template>
    <section >
        <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            color="primary"
            hide-pagination

            table-header-class="bg-gray-100 font-semibold text-left"
        >

            <template v-slot:header-cell="props">
                <q-th
                    :props="props"

                    class="order-table-slot hover:bg-[#FCFCFC] font-semibold"
                >
                    {{ props.col.label }}
                 </q-th>
            </template>


        </q-table>
    </section>

</template>

<style lang="scss">

</style>
