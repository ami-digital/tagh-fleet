<script setup lang="ts">
import { ref, watch } from "vue";
import { Head } from "@inertiajs/vue3";
import { Dark } from "quasar";
import MainLayout from "../../layouts/MainLayout.vue";
import OrdersTable from "../../components/orders/OrdersTable.vue";


const darkMode = ref(Dark.isActive);
watch(darkMode, (value) => {
    Dark.set(value);
});

const search = ref('')
</script>

<template>
    <Head>
        <title>Index</title>
    </Head>
    <q-page class="px-6 py-4 bg-[#F5F5F5]" id="order-page">

        <section class="flex justify-center">
            <h3 class="m-0 text-2xl font-medium">Orders</h3>
        </section>

        <section class="flex justify-between my-3">
            <div>
                <div class="flex search-input">
                    <q-input v-model="search"
                             outlined
                             dense
                             class="text-gray-app min-w-[200px] bg-white"
                             placeholder="Search">
                    </q-input>
                    <div class="h-8 w-12 bg-primary grid items-center justify-center cursor-pointer" style="border-radius: 0 6px 6px 0">
                        <q-icon size="xs" class="text-gray-app  inline-block" color="white" name="search"/>
                    </div>
                </div>
            </div>

            <div class="flex">
                <q-btn
                    label="Create Order"
                    unelevated
                    dense
                    icon="add"
                    text-color="accent"
                    size="md"
                    padding="4px 14px"
                    class="px-2 bg-white px-2 mr-3 rounded-md;"
                    style=" font-weight: normal; border-radius: 6px; border:1px solid #d9d9d9;"
                />
                <q-btn
                    label="Upload"
                    unelevated
                    dense
                    filled
                    text-color="white"
                    icon="upload"
                    size="md"
                    padding="4px 14px"
                    class="px-2 bg-primary "
                    style="font-weight: normal; border-radius: 6px;"
                />
            </div>
        </section>

        <section class="my-3">
            <OrdersTable />
        </section>

    </q-page>


</template>

<style lang="scss">
#order-page {
   .search-input {
       .q-field__control {
           border-radius: 6px 0 0 6px;
           height: 32px;
       }
   }
}
</style>
